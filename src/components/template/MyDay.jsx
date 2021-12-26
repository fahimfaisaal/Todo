import { useEffect, useReducer } from 'react';
import MyDayContext from '../../context/MyDayContext';
import getCurrentDate from '../../utils/getCurrentDate';
import ItemController from '../molecules/ItemController';
import ViewBox from '../molecules/ViewBox';

const addTodo = (state, newTodo) => {
  if (newTodo.text) {
    return [newTodo, ...state];
  }

  return state;
};

const editTodo = (state, id, editedTodoText) => {
  const editedTodo = state.find((todo) => todo.id === id);
  const editedTodoIndex = state.findIndex((todo) => todo.id === id);

  const updateTodo = {
    ...editedTodo,
    text: editedTodoText,
    editedAt: getCurrentDate(),
  };

  const pushEditedTodo = state.reduce((updatedArr, todo, index) => {
    if (index !== editedTodoIndex) {
      updatedArr.push(todo);
    } else {
      updatedArr.push(updateTodo);
    }
    return updatedArr;
  }, []);

  return pushEditedTodo;
};

const toggleTodo = (state, id) => {
  const allWithoutDone = state.filter((todo) => todo.id !== id);
  let doneTodo = state.find((todo) => todo.id === id);

  const isDone = doneTodo.isComplete;

  doneTodo = {
    ...doneTodo,
    isComplete: !isDone,
  };

  return !isDone ? [...allWithoutDone, doneTodo] : [doneTodo, ...allWithoutDone];
};

const todoReducer = (state, action) => {
  const {
    type, id, newTodo, editedTodoText,
  } = action;

  switch (type) {
    case 'FETCH_MY_DAY':
      return action.todos;
    case 'ADD_TODO':
      return addTodo(state, newTodo);
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== id);
    case 'EDIT_TODO':
      return editTodo(state, id, editedTodoText);
    case 'TOGGLE_TODO':
      return toggleTodo(state, id);
    case 'CLEAR_TODOS':
      return [];
    default:
      return state;
  }
};

const todoContext = {};

export default function MyDay() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const localTodos = localStorage.getItem('myDay');

    if (localTodos.length) {
      const convertToJson = JSON.parse(localTodos);

      dispatch({
        type: 'FETCH_MY_DAY',
        todos: convertToJson,
      });
    }
  }, []);

  useEffect(() => {
    const convertTodo = JSON.stringify(todos);

    localStorage.setItem('myDay', convertTodo);
  }, [todos]);

  todoContext.todos = todos;
  todoContext.dispatch = dispatch;

  return (
    <MyDayContext.Provider value={todoContext}>
      <ViewBox subHeading="My Day" />
      <ItemController dispatch={dispatch} placeholder="todos" lengthOfItems={todos.length} />
    </MyDayContext.Provider>
  );
}
