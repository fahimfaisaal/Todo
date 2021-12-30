import propTypes from 'prop-types';
import { useState } from 'react';
import circle from '../../assets/icon/circle';
import completeCircle from '../../assets/icon/circle-complete';
import deleteIcon from '../../assets/icon/delete';
import editIcon from '../../assets/icon/edit';
import ItemLayout from '../atoms/ItemLayout';
import ItemTitle from '../atoms/ItemTitle';
import EditInputBox from './EditInputBox';

export default function Item({
  item, deleteHandler, editHandler, toggleHandler,
}) {
  const [isEdit, setEdit] = useState(false);
  const {
    text, isComplete, id, editedAt,
  } = item;

  const editItemHandler = (editedValue) => {
    const editAction = {
      id,
      editedItemText: editedValue,
    };

    editHandler(editAction);
    setEdit(!isEdit);
  };

  const toggleEditIconHandler = () => {
    setEdit(!isEdit);
  };

  return (
    <ItemLayout>
      {!isEdit && (
        <i
          className="cursor-pointer"
          onClick={() => toggleHandler(id)}
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
        <i className="pr-4 cursor-pointer" onClick={toggleEditIconHandler}>
          {editIcon}
        </i>
      )}

      <i className="cursor-pointer" onClick={() => deleteHandler(id)}>{deleteIcon}</i>
    </ItemLayout>
  );
}

Item.propTypes = {
  item: propTypes.objectOf(propTypes.any),
  deleteHandler: propTypes.func.isRequired,
  editHandler: propTypes.func.isRequired,
  toggleHandler: propTypes.func.isRequired,
};
