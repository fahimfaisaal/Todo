import propTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import enterKey from '../../assets/icon/enter-key';
import Input from '../atoms/Input';

export default function EditInputBox({
  text, editTodoHandler,
}) {
  const [editValue, setEditValue] = useState(text);
  const editedNodeRef = useRef(null);

  useEffect(() => {
    editedNodeRef.current.focus();
  }, []);

  const onChangeHandler = (e) => setEditValue(e.target.value);

  const onKeyPressHandler = (e) => {
    const keyCode = e.keyCode || e.which;

    if (keyCode === 13 && editValue) {
      editTodoHandler(editValue);
    }
  };

  const updateOnClick = () => {
    editValue && editTodoHandler(editValue);
  };

  return (
    <>
      <Input
        ref={editedNodeRef}
        classes="item-input"
        placeholder="add your day"
        value={editValue}
        handler={onChangeHandler}
        keyPressHandler={onKeyPressHandler}
      />

      <i className="w-9 cursor-pointer" onClick={updateOnClick}>{enterKey}</i>
    </>
  );
}

EditInputBox.propTypes = {
  text: propTypes.string.isRequired,
  editTodoHandler: propTypes.func.isRequired,
};
