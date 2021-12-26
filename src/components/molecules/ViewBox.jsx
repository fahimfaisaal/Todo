import propTypes from 'prop-types';
import { useContext } from 'react';
import MyDayContext from '../../context/MyDayContext';
import generateStatus from '../../utils/generateStatus';
import ItemsViewer from '../atoms/ItemsViewer';
import ViewBoxHeader from './ViewBoxHeader';

export default function ViewBox({ subHeading, filter }) {
  const { todos, dispatch } = useContext(MyDayContext);

  const completedItemsLength = generateStatus(todos, 'isComplete');
  const status = `${completedItemsLength}/${todos.length}`;

  return (
    <div className="view-layout">
      <ViewBoxHeader subHeading={subHeading} status={status} />
      <ItemsViewer
        items={todos}
        dispatch={dispatch}
        filter={filter}
      />
    </div>
  );
}

ViewBox.propTypes = {
  subHeading: propTypes.string.isRequired,
  filter: propTypes.string.isRequired,
};
