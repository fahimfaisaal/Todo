import { createContext } from 'react';

const MyDayContext = createContext({
  todos: [],
  dispatch: null,
  filter: 'all',
});

export default MyDayContext;
