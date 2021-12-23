import shortid from 'shortid';
import getCurrentDate from './getCurrentDate';

const createList = (listColor = 'transparent') => {
  const newList = {
    id: shortid.generate(),
    listColor,
    todos: [],
    createdAt: getCurrentDate(),
    editedAt: null,
    isCompleted: false,
    status: [0, 0],
  };

  return newList;
};

export default createList;
