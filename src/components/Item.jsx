import propTypes from 'prop-types';
import circle from '../assets/icon/circle';
import completeCircle from '../assets/icon/circle-complete';
import deleteIcon from '../assets/icon/delete';
import editIcon from '../assets/icon/edit';
import Input from './atoms/Input';
import ItemLayout from './atoms/ItemLayout';
import ItemTitle from './atoms/ItemTitle';

const isRenderEditIcon = (completed, isEdit) => {
  if (!completed && !isEdit) {
    return (
      <i className="px-4 cursor-pointer">
        {editIcon}
      </i>
    );
  }

  return null;
};

export default function Item({ isComplete, isEdit }) {
  const pointerEvent = isEdit ? 'pointer-events-none' : 'cursor-pointer';

  return (
    <ItemLayout>
      <i className={pointerEvent}>{isComplete ? completeCircle : circle}</i>

      {(isEdit && !isComplete) ? (
        <Input
          classes="item-input"
          strings={{
            placeholder: 'type your day',
          }}
        />
      ) : (
        <ItemTitle
          text="Todo 1"
          isComplete={isComplete}
        />
      )}

      {isRenderEditIcon(isComplete, isEdit)}

      <i className="cursor-pointer">{deleteIcon}</i>
    </ItemLayout>
  );
}

Item.propTypes = {
  isComplete: propTypes.bool.isRequired,
  isEdit: propTypes.bool.isRequired,
};
