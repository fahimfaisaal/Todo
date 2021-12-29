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
 * @param {{id: string, editedItemText: string}} action
 * @returns array
 */
const editItem = (items, action) => {
  const { id, editedItemText } = action;
  const editedTodo = items.find((todo) => todo.id === id);
  const editedTodoIndex = items.findIndex((todo) => todo.id === id);

  const updateTodo = {
    ...editedTodo,
    text: editedItemText,
    editedAt: getCurrentDate(),
  };

  const pushEditedTodo = items.reduce((updatedArr, todo, index) => {
    if (index !== editedTodoIndex) {
      updatedArr.push(todo);
    } else {
      updatedArr.push(updateTodo);
    }
    return updatedArr;
  }, []);

  return pushEditedTodo;
};

/**
 * @param {array} items
 * @param {string} id
 * @returns array
 */
const deleteItem = (items, id) => items.filter((item) => item.id !== id);

/**
 * @param {array} items
 * @param {string} id
 * @returns array
 */
const toggleItem = (items, id) => {
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

  switch (action.type) {
    case 'FETCH': {
      const fetchItems = action.payload.fetchData;
      return {
        ...state,
        items: fetchItems,
      };
    }
    case 'FILTER': {
      const { visibility } = action.payload;

      return {
        ...state,
        visibility,
      };
    }
    case 'ADD': {
      const newItems = addItem(items, action.payload);

      return {
        ...state,
        items: newItems,
      };
    }
    case 'DELETE': {
      const withoutDeleted = deleteItem(items, action.payload.id);

      return {
        ...state,
        items: withoutDeleted,
      };
    }
    case 'EDIT': {
      const withEditedItems = editItem(items, action.payload);

      return {
        ...state,
        items: withEditedItems,
      };
    }
    case 'TOGGLE': {
      const withToggleItems = toggleItem(items, action.payload.id);

      return {
        ...state,
        items: withToggleItems,
      };
    }
    case 'CLEAR':
      return {
        ...state,
        items: [],
      };
    default:
      return items;
  }
};

export default itemsReducer;
