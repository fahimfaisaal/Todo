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

const itemsReducer = (items, action) => {
  switch (action.type) {
    case 'FETCH':
      return action.fetchData;
    case 'ADD':
      return addItem(items, action);
    case 'DELETE':
      return deleteItem(items, action.id);
    case 'EDIT':
      return editItem(items, action);
    case 'TOGGLE':
      return toggleItem(items, action.id);
    case 'CLEAR':
      return [];
    default:
      return items;
  }
};

export default itemsReducer;
