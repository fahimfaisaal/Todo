import propTypes from 'prop-types';
import filterItems from '../../utils/filterItems';
import generateStatus from '../../utils/generateStatus';
import ItemsViewer from '../atoms/ItemsViewer';
import AddItemInput from './AddItemInput';
import Item from './Item';
import ViewBoxHeader from './ViewBoxHeader';

export default function ViewBox({
  subHeading, state, dispatch, createItem,
}) {
  const { items, visibility } = state;

  const status = generateStatus(items);

  const addItem = (text) => {
    const addAction = {
      type: 'ADD',
      payload: {
        text,
        createItemCallback: createItem,
      },
    };

    dispatch(addAction);
  };

  const filteredItems = filterItems(items, visibility);
  const itemsToJsx = filteredItems.map((item) => (
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
        <>
          <AddItemInput
            addItem={addItem}
            visibility={visibility}
            dispatch={dispatch}
          />
          {itemsToJsx}
        </>
      </ItemsViewer>
    </div>
  );
}

ViewBox.propTypes = {
  subHeading: propTypes.string.isRequired,
  state: propTypes.objectOf(propTypes.any),
  dispatch: propTypes.func.isRequired,
  createItem: propTypes.func.isRequired,
};
