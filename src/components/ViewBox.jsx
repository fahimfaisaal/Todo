import propTypes from 'prop-types';
import ItemsViewer from './atoms/ItemsViewer';
import Item from './Item';
import AddTodoInput from './molecules/AddTodoInput';
import ViewBoxHeader from './molecules/ViewBoxHeader';

export default function ViewBox({ subHeading, items = null }) {
  // Todo: state will be stay on this component parent
  // Todo: add valid Items object
  const allItems = items ? items.map((Items) => Items) : [];
  const completedItemsLength = items ? items.filter((Items) => Items.isComplete).length : 0;
  const status = `${completedItemsLength}/${allItems.length}`;

  return (
    <div className="max-w-2xl mx-auto">
      <ViewBoxHeader subHeading={subHeading} status={status} />
      <ItemsViewer items={allItems}>
        <AddTodoInput />
        <Item
          isComplete={false}
          isEdit={false}
        />
      </ItemsViewer>
    </div>
  );
}

ViewBox.propTypes = {
  subHeading: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.object),
};
