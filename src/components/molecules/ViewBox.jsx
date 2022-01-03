import propTypes from 'prop-types';
import filterItems from '../../utils/filterItems';
import generateStatus from '../../utils/generateStatus';
import ItemsViewer from '../atoms/ItemsViewer';
import AddItemInput from './AddItemInput';
import Item from './Item';
import ItemController from './ItemController';
import ViewBoxHeader from './ViewBoxHeader';

export default function ViewBox({
  subHeading,
  state,
  dispatch,
  createItem,
  clearPlaceholder,
}) {
  const { items, visibility, mode } = state;

  const status = generateStatus(items[mode]);

  const addItem = (text) => {
    const addAction = {
      type: 'ADD',
      payload: {
        text,
        createItemCallback: createItem,
        mode,
      },
    };

    // if text are not empty
    text && dispatch(addAction);
  };

  const filteredItems = filterItems(items[mode], visibility);
  const itemsToJsx = filteredItems.map((item) => (
    <Item
      key={item.id}
      item={item}
      dispatch={dispatch}
      mode={mode}
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
            placeholder={mode === 'list' ? 'list' : 'todo'}
          />
          {itemsToJsx}
        </>
      </ItemsViewer>
      <ItemController
        state={state}
        dispatch={dispatch}
        clearPlaceholder={clearPlaceholder}
      />
    </div>
  );
}

ViewBox.propTypes = {
  subHeading: propTypes.string.isRequired,
  clearPlaceholder: propTypes.string.isRequired,
  state: propTypes.objectOf(propTypes.any),
  dispatch: propTypes.func.isRequired,
  createItem: propTypes.func.isRequired,
};
