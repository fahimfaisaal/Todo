import shortid from 'shortid';
import getCurrentDate from './getCurrentDate';

/**
 * Create a new Todo
 * @param {string} text
 * @param {string} description
 * @returns {object}
 */
const createTodo = (text) => {
  const newTodo = {
    id: shortid.generate(),
    text,
    isComplete: false,
    createdAt: getCurrentDate(),
    editedAt: null,
  };

  return newTodo;
};

export default createTodo;
