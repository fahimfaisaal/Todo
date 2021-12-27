/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import {
  useContext, useEffect, useRef, useState,
} from 'react';
import enterKey from '../../assets/icon/enter-key';
import MyDayContext from '../../context/MyDayContext';
import Input from '../atoms/Input';
import ItemLayout from '../atoms/ItemLayout';

export default function AddTodoInput({ pushTodo }) {
  const [value, setValue] = useState('');
  const todoInputRef = useRef(null);
  const { filter, setFilter } = useContext(MyDayContext);

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
  };

  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;

    if (keyCode === 13) {
      pushTodo(value);
      filter === 'done' && setFilter('due');
      setValue('');
    }
  };

  const onClickHandler = () => {
    pushTodo(value);
    filter === 'done' && setFilter('due');
    setValue('');
  };

  return (
    <ItemLayout classes="sticky top-0 z-10">
      <Input
        ref={todoInputRef}
        id="add-todo-input"
        classes="item-input input-text"
        placeholder="add todo"
        value={value}
        handler={handleChange}
        keyPressHandler={handleKeyPress}
      />
      <i className="cursor-pointer" onClick={onClickHandler}>{enterKey}</i>
    </ItemLayout>
  );
}

AddTodoInput.propTypes = {
  pushTodo: propTypes.func.isRequired,
};
