import propTypes from 'prop-types';
import { useState } from 'react';
import circle from '../../assets/icon/circle';
import completeCircle from '../../assets/icon/circle-complete';
import deleteIcon from '../../assets/icon/delete';
import editIcon from '../../assets/icon/edit';
import ItemLayout from '../atoms/ItemLayout';
import ItemTitle from '../atoms/ItemTitle';
import EditInputBox from './EditInputBox';

export default function Item({ item, dispatch, mode }) {
  const [isEdit, setEdit] = useState(false);

  const {
    text, isComplete, id, editedAt, status,
  } = item;

  const deleteItemHandler = () => {
    const deleteAction = {
      type: 'DELETE',
      payload: {
        id,
        mode,
      },
    };

    dispatch(deleteAction);
  };

  const editItemHandler = (editedValue) => {
    const editAction = {
      type: 'EDIT',
      payload: {
        id,
        editedItemText: editedValue,
        mode,
      },
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
      payload: {
        id,
        mode,
      },
    };

    dispatch(toggleAction);
  };

  return (
    <ItemLayout>
      {!isEdit && (
        <i
          className={!status ? 'cursor-pointer' : ''}
          onClick={!status && toggleDoneItemHandler}
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

      {status && (
        <p className="ml-3 text-xs font-salsa dark:text-gray-100">{status}</p>
      )}
    </ItemLayout>
  );
}

Item.propTypes = {
  item: propTypes.objectOf(propTypes.any),
  dispatch: propTypes.func.isRequired,
  mode: propTypes.string.isRequired,
};
