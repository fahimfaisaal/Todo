import { useEffect, useReducer, useState } from 'react';
import createTodo from '../../utils/createTodo';
import filterItems from '../../utils/filterItems';
import generateStatus from '../../utils/generateStatus';
import itemsReducer from '../../utils/itemsReducer';
import { dispatchFetchData, saveToLocaleStorage } from '../../utils/localeStorageFunc';
import ItemController from '../molecules/ItemController';
import ViewBox from '../molecules/ViewBox';

export default function MyDay() {
  const [todos, dispatch] = useReducer(itemsReducer, []);
  const [visibility, setVisibility] = useState('all');
  const filterTodos = filterItems(todos, visibility);
  const status = generateStatus(todos);

  useEffect(dispatchFetchData.bind(this, 'myDay', dispatch), []);

  useEffect(
    saveToLocaleStorage
      .bind(this, 'myDay', todos),
    [todos],
  );

  return (
    <div className="my-day">
      <ViewBox
        subHeading="My Day"
        status={status}
        items={filterTodos}
        dispatch={dispatch}
        visibility={visibility}
        setVisibility={setVisibility}
        createItem={createTodo}
      />
      <ItemController
        dispatch={dispatch}
        placeholder="todos"
        lengthOfItems={todos.length}
        visibility={visibility}
        setVisibility={setVisibility}
      />
    </div>
  );
}
