import shortid from 'shortid';
import getCurrentDate from './getCurrentDate';

const createList = (listName, listColor = null) => {
  const newList = {
    id: shortid.generate(),
    text: listName,
    listColor,
    todos: [],
    createdAt: getCurrentDate(),
    editedAt: null,
    isComplete: false,
    status: '0/0',
  };

  return newList;
};

export default createList;
