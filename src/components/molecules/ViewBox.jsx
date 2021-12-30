import propTypes from 'prop-types';
import filterItems from '../../utils/filterItems';
import generateStatus from '../../utils/generateStatus';
import {
  addNewItem, deleteItem, editItem, toggleItem
} from '../../utils/stateManager';
import ItemsViewer from '../atoms/ItemsViewer';
import AddItemInput from './AddItemInput';
import Item from './Item';
import ViewBoxHeader from './ViewBoxHeader';

export default function ViewBox({
  subHeading, state, setMyDay, createItem,
}) {
  const { items, visibility } = state;

  const status = generateStatus(items);

  const addItem = (text) => {
    const addAction = {
      text,
      createItemCallback: createItem,
    };

    const newItems = addNewItem(items, addAction);
    console.log(newItems);

    const newState = {
      ...state,
      items: newItems,
    };

    setMyDay(newState);
  };

  const deleteHandler = (id) => {
    const withoutDeletedItem = deleteItem(items, id);
    setMyDay({
      ...state,
      items: withoutDeletedItem,
    });
  };

  const editHandler = (editedAction) => {
    const withEditedValue = editItem(items, editedAction);

    setMyDay({
      ...state,
      items: withEditedValue,
    });
  };

  const toggleHandler = (id) => {
    const withToggleItem = toggleItem(items, id);

    setMyDay({
      ...state,
      items: withToggleItem,
    });
  };

  const filteredItems = filterItems(items, visibility);
  const itemsToJsx = filteredItems.map((item) => (
    <Item
      key={item.id}
      item={item}
      setMyDay={setMyDay}
      deleteHandler={deleteHandler}
      editHandler={editHandler}
      toggleHandler={toggleHandler}
    />
  ));

  return (
    <div className="view-layout">
      <ViewBoxHeader subHeading={subHeading} status={status} />
      <ItemsViewer>
        <>
          <AddItemInput
            addItem={addItem}
            state={state}
            setMyDay={setMyDay}
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
  setMyDay: propTypes.func.isRequired,
  createItem: propTypes.func.isRequired,
};
