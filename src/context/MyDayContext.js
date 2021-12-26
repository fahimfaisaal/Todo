import { createContext } from 'react';

const MyDayContext = createContext({
  todos: [],
  dispatch: null,
  setFilter: null,
});

export default MyDayContext;
