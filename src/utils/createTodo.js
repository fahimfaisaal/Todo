import shortid from "shortid";
import getCurrentDate from "./getCurrentDate";

/**
 * Create a new Todo
 * @param {string} title 
 * @param {string} description 
 * @returns {object}
 */
const createTodo = (title, description) => {
    const newTodo = {
        id: shortid.generate(),
        title,
        description,
        isCompleted: false,
        createdAt: getCurrentDate(),
        editedAt: null
    }

    return newTodo;
}

export default createTodo;