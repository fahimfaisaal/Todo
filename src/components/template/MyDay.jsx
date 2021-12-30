import { useEffect, useState } from 'react';
import createTodo from '../../utils/createTodo';
import { saveToLocaleStorage } from '../../utils/localeStorageFunc';
import ItemController from '../molecules/ItemController';
import ViewBox from '../molecules/ViewBox';

const initialMyDayState = {
  items: [],
  visibility: 'all',
};

export default function MyDay() {
  const [myDayState, setMyDay] = useState(initialMyDayState);
  const { items: todos } = myDayState;

  // fetch todos from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('myDay'));

    setMyDay({
      ...myDayState,
      items: data,
    });
  }, []);

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
        setMyDay={setMyDay}
        createItem={createTodo}
      />
      <ItemController
        state={myDayState}
        setMyDay={setMyDay}
        placeholder="todos"
      />
    </div>
  );
}
