import propTypes from 'prop-types';
import { useState } from 'react';
import circle from '../../assets/icon/circle';
import completeCircle from '../../assets/icon/circle-complete';
import deleteIcon from '../../assets/icon/delete';
import editIcon from '../../assets/icon/edit';
import ItemLayout from '../atoms/ItemLayout';
import ItemTitle from '../atoms/ItemTitle';
import EditInputBox from './EditInputBox';

export default function Item({ item, dispatch }) {
  const {
    text, isComplete, id, editedAt,
  } = item;

  const [isEdit, setEdit] = useState(false);

  const deleteItemHandler = () => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  const editItemHandler = (editedValue) => {
    const editAction = {
      type: 'EDIT',
      id,
      editedItemText: editedValue,
    };

    dispatch(editAction);
    setEdit(!isEdit);
  };

  const toggleEditItemHandler = () => {
    setEdit(!isEdit);
  };

  const toggleDoneItemHandler = () => {
    const toggleAction = {
      type: 'TOGGLE',
      id,
    };

    dispatch(toggleAction);
  };

  return (
    <ItemLayout>
      {!isEdit && (
        <i
          className="cursor-pointer"
          onClick={toggleDoneItemHandler}
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
          editItemHandler={editItemHandler}
        />
      )}

      {editedAt && (
        <p className="text-xs text-gray-400 pr-2">edited</p>
      )}

      {(!isComplete && !isEdit) && (
        <i className="pr-4 cursor-pointer" onClick={toggleEditItemHandler}>
          {editIcon}
        </i>
      )}

      <i className="cursor-pointer" onClick={deleteItemHandler}>{deleteIcon}</i>
    </ItemLayout>
  );
}

Item.propTypes = {
  item: propTypes.objectOf(propTypes.any),
  dispatch: propTypes.func.isRequired,
};
