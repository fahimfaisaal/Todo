import propTypes from 'prop-types';
import ItemsViewer from '../atoms/ItemsViewer';
import AddItemInput from './AddItemInput';
import Item from './Item';
import ViewBoxHeader from './ViewBoxHeader';

export default function ViewBox({
  subHeading, status, items, dispatch,
  visibility, setVisibility, createItem,
}) {
  const addItem = (text) => {
    const action = {
      type: 'ADD',
      text,
      createItemCallback: createItem,
    };

    dispatch(action);
  };

  const itemsToJsx = items.map((item) => (
    <Item
      key={item.id}
      item={item}
      dispatch={dispatch}
    />
  ));

  return (
    <div className="view-layout">
      <ViewBoxHeader subHeading={subHeading} status={status} />
      <ItemsViewer>
        <AddItemInput
          addItem={addItem}
          visibility={visibility}
          setVisibility={setVisibility}
        />
        {itemsToJsx}
      </ItemsViewer>
    </div>
  );
}

ViewBox.propTypes = {
  subHeading: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.object),
  visibility: propTypes.string.isRequired,
  setVisibility: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
  createItem: propTypes.func.isRequired,
};
