import { useEffect, useReducer } from 'react';
import createTodo from '../../utils/createTodo';
import stateReducer from '../../utils/stateReducer';
import { dispatchFetchData, saveToLocaleStorage } from '../../utils/localeStorageFunc';
import ItemController from '../molecules/ItemController';
import ViewBox from '../molecules/ViewBox';

const initialMyDayState = {
  items: [],
  visibility: 'all',
};

export default function MyDay() {
  const [myDayState, dispatchMyDay] = useReducer(stateReducer, initialMyDayState);
  const { items: todos } = myDayState;

  // fetch todos from localStorage
  useEffect(dispatchFetchData.bind(this, 'myDay', dispatchMyDay), []);

  // save todos to localStorage on change state
  useEffect(
    saveToLocaleStorage
      .bind(this, 'myDay', todos),
    [todos],
  );

  return (
    <div className="my-day">
      <ViewBox
        subHeading="My Day"
        state={myDayState}
        dispatch={dispatchMyDay}
        createItem={createTodo}
      />
      <ItemController
        state={myDayState}
        dispatch={dispatchMyDay}
        placeholder="todos"
      />
    </div>
  );
}
