import { useContext } from 'react';
import ListContext from '../context/listContext';
import MyDayContext from '../context/MyDayContext';

const selectContext = (contextType) => {
  if (contextType === 'myDay') {
    return useContext(MyDayContext);
  }

  return useContext(ListContext);
};

export default selectContext;
