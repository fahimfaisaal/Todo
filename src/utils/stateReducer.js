import findItemNIndex from './findItemViaIndex';
import getCurrentDate from './getCurrentDate';

/**
 * @param {array} items
 * @param {{text: string, createItemCallback: Function}} action
 * @returns array
 */
const addItem = (items, action) => {
  const { text, createItemCallback } = action;

  if (text) {
    const newItem = createItemCallback(text);
    return [newItem, ...items];
  }

  return items;
};

/**
 * @param {array} items
 * @param {{id: string, editedItemText: string}} payload
 * @returns array
 */
const editItem = (items, { id, editedItemText }) => {
  const [editedItemIndex, editedItem] = findItemNIndex(items, id);

  const updateItem = {
    ...editedItem,
    text: editedItemText,
    editedAt: getCurrentDate(),
  };

  const pushEditedItem = Array.from(items);
  pushEditedItem[editedItemIndex] = updateItem;

  return pushEditedItem;
};

/**
 * @param {array} items
 * @param {string} id
 * @returns array
 */
const deleteItem = (items, { id }) => items.filter((item) => item.id !== id);

/**
 * @param {array} items
 * @param {string} id
 * @returns array
 */
const toggleItem = (items, { id }) => {
  console.log(items);
  const allWithoutDone = items.filter((item) => item.id !== id);
  let doneItem = items.find((item) => item.id === id);

  const isDone = doneItem.isComplete;

  doneItem = {
    ...doneItem,
    isComplete: !isDone,
  };

  return !isDone
    ? [...allWithoutDone, doneItem]
    : [doneItem, ...allWithoutDone];
};

const itemsReducer = (state, action) => {
  const { items } = state;
  const { type, payload } = action;
  const payloadMode = payload.mode;

  function itemsDataHandler(newData) {
    console.log(payloadMode);
    return {
      ...items,
      [payloadMode]: newData,
    };
  }

  switch (type) {
    case 'FETCH': {
      const fetchItems = payload.fetchData;
      return {
        ...state,
        items: fetchItems,
      };
    }
    case 'FILTER': {
      const { visibility } = payload;

      return {
        ...state,
        visibility,
      };
    }
    case 'ADD': {
      const addNewItems = addItem(items[payloadMode], payload);

      return {
        ...state,
        items: itemsDataHandler(addNewItems),
      };
    }
    case 'DELETE': {
      const withoutDeleted = deleteItem(items[payloadMode], payload);

      return {
        ...state,
        items: itemsDataHandler(withoutDeleted),
      };
    }
    case 'EDIT': {
      const withEditedItems = editItem(items[payloadMode], payload);

      return {
        ...state,
        items: itemsDataHandler(withEditedItems),
      };
    }
    case 'TOGGLE': {
      const withToggleItems = toggleItem(items[payloadMode], payload);

      return {
        ...state,
        items: itemsDataHandler(withToggleItems),
      };
    }
    case 'MODE_SWITCH': {
      let { mode } = payload;
      mode = mode === 'myDay' ? 'list' : 'myDay';

      return {
        ...state,
        mode,
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        items: itemsDataHandler([]),
      };
    }
    default:
      return items;
  }
};

export default itemsReducer;
