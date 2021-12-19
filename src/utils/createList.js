import getCurrentDate from "./getCurrentDate";
import shortid from "shortid";

const createList = () => {
    const newList = {
        id: shortid.generate(),
        todos: [],
        createdAt: getCurrentDate(),
        editedAt: null,
        isCompleted: false,
        status: [0, 0]
    }

    return newList;
}

export default createList;