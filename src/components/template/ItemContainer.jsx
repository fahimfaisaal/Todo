import { useEffect, useReducer } from 'react';
import createList from '../../utils/createList';
import createTodo from '../../utils/createTodo';
import { dispatchFetchData, saveToLocaleStorage } from '../../utils/localeStorageFunc';
import stateReducer from '../../utils/stateReducer';
import ViewBox from '../molecules/ViewBox';

const initialState = {
  items: {
    myDay: [],
    list: [],
  },
  selectedList: null,
  visibility: 'all',
  mode: 'myDay',
};

const subHeadings = {
  myDay: 'My Day',
  list: 'Todo List',
};

export default function ItemContainer() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const { items, mode, selectedList } = state;

  // fetch items from localStorage
  useEffect(dispatchFetchData.bind(this, 'items', dispatch), []);

  // save items to localStorage on change state
  useEffect(
    saveToLocaleStorage
      .bind(this, 'items', items),
    [items],
  );

  const selectedCreateItem = mode === 'list'
    ? createList
    : createTodo;

  return (
    <ViewBox
      subHeading={subHeadings[mode] || selectedList.text}
      state={state}
      dispatch={dispatch}
      createItem={selectedCreateItem}
      clearPlaceholder="items"
    />
  );
}
