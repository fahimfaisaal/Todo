import propTypes from 'prop-types';
import { useContext, useState } from 'react';
import circle from '../../assets/icon/circle';
import completeCircle from '../../assets/icon/circle-complete';
import deleteIcon from '../../assets/icon/delete';
import editIcon from '../../assets/icon/edit';
import MyDayContext from '../../context/MyDayContext';
import ItemLayout from '../atoms/ItemLayout';
import ItemTitle from '../atoms/ItemTitle';
import EditInputBox from './EditInputBox';

export default function Item({ todo }) {
  const {
    text, isComplete, id,
  } = todo;

  const { dispatch } = useContext(MyDayContext);
  const [isEdit, setEdit] = useState(false);

  const deleteTodoHandler = () => {
    dispatch({
      type: 'DELETE_TODO',
      id,
    });
  };

  const editTodoHandler = (editedValue) => {
    dispatch({
      type: 'EDIT_TODO',
      id,
      editedTodoText: editedValue,
    });

    setEdit(!isEdit);
  };

  const toggleEditTodoHandler = () => {
    setEdit(!isEdit);
  };

  const toggleDoneTodoHandler = () => {
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    });
  };

  return (
    <ItemLayout>
      {!isEdit && (
        <i
          className="cursor-pointer"
          onClick={toggleDoneTodoHandler}
        >
          {isComplete ? completeCircle : circle}
        </i>
      )}

      {(!isEdit) ? (
        <ItemTitle
          text={text}
          isComplete={isComplete}
        />
      ) : (
        <EditInputBox
          text={text}
          editTodoHandler={editTodoHandler}
        />
      )}

      {(!isComplete && !isEdit) && (
        <i className="px-4 cursor-pointer" onClick={toggleEditTodoHandler}>
          {editIcon}
        </i>
      )}

      <i className="cursor-pointer" onClick={deleteTodoHandler}>{deleteIcon}</i>
    </ItemLayout>
  );
}

Item.propTypes = {
  todo: propTypes.objectOf(propTypes.any),
};
