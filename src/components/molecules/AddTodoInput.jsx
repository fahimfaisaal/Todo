/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import enterKey from '../../assets/icon/enter-key';
import Input from '../atoms/Input';
import ItemLayout from '../atoms/ItemLayout';

export default function AddTodoInput({ pushTodo }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    window.onload = () => {
      const todoInputBox = document.getElementById('add-todo-input');
      todoInputBox.focus();
    };
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
  };

  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;

    if (keyCode === 13) {
      pushTodo(value);
      setValue('');
    }
  };

  const onClickHandler = () => {
    pushTodo(value);
    setValue('');
  };

  return (
    <ItemLayout classes="sticky top-0 z-10">
      <Input
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
