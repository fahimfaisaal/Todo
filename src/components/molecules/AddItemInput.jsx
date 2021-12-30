import propTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import keyPressHandler from '../../utils/keyPressHandler';
import ItemLayout from '../atoms/ItemLayout';
import InputBox from './InputBox';

export default function AddItemInput({ addItem, state, setMyDay }) {
  const [value, setValue] = useState('');
  const todoInputRef = useRef(null);
  const { visibility } = state;

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const submitItem = () => {
    addItem(value);

    if (visibility === 'done') {
      const filterAction = {
        ...state,
        visibility: 'due',
      };

      setMyDay(filterAction);
    }

    setValue('');
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
  };

  const enterKeyPressHandler = (e) => {
    keyPressHandler(e, submitItem);
  };

  const onClickHandler = () => {
    submitItem();
  };

  return (
    <ItemLayout classes="sticky top-0 z-10">
      <InputBox
        inputRef={todoInputRef}
        classes="input-text"
        placeholder="add todo"
        value={value}
        changeHandler={handleChange}
        keyPressHandler={enterKeyPressHandler}
        clickHandler={onClickHandler}
      />
    </ItemLayout>
  );
}

AddItemInput.propTypes = {
  addItem: propTypes.func.isRequired,
  state: propTypes.string.isRequired,
  setMyDay: propTypes.func.isRequired,
};
