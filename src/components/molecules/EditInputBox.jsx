import propTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import keyPressHandler from '../../utils/keyPressHandler';
import InputBox from './InputBox';

// # clear
export default function EditInputBox({ text, editItemHandler }) {
  const [editValue, setEditValue] = useState(text);
  const editedNodeRef = useRef(null);

  useEffect(() => {
    editedNodeRef.current.focus();
  }, []);

  const onChangeHandler = (e) => setEditValue(e.target.value);

  const enterKeyPressHandler = (e) => {
    editValue && (
      keyPressHandler(e, () => editItemHandler(editValue))
    );
  };

  const updateOnClick = () => {
    editValue && editItemHandler(editValue);
  };

  return (
    <InputBox
      inputRef={editedNodeRef}
      placeholder="edit your day"
      value={editValue}
      changeHandler={onChangeHandler}
      keyPressHandler={enterKeyPressHandler}
      clickHandler={updateOnClick}
    />
  );
}

EditInputBox.propTypes = {
  text: propTypes.string.isRequired,
  editItemHandler: propTypes.func.isRequired,
};
