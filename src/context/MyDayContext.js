import { createContext } from 'react';

const MyDayContext = createContext({
  todos: [],
  dispatch: null,
});

export default MyDayContext;
