import propTypes from 'prop-types';
import { useContext } from 'react';
import MyDayContext from '../../context/MyDayContext';
import ItemsViewer from '../atoms/ItemsViewer';
import ViewBoxHeader from './ViewBoxHeader';

export default function ViewBox({ subHeading }) {
  const { todos, dispatch } = useContext(MyDayContext);

  const completedItemsLength = todos.filter((Items) => Items.isComplete).length;
  const status = `${completedItemsLength}/${todos.length}`;

  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-3 md:px-0">
      <ViewBoxHeader subHeading={subHeading} status={status} />
      <ItemsViewer items={todos} dispatch={dispatch} />
    </div>
  );
}

ViewBox.propTypes = {
  subHeading: propTypes.string.isRequired,
};
