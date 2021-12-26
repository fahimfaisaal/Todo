import propTypes from 'prop-types';
import createTodo from '../../utils/createTodo';
import AddTodoInput from '../molecules/AddTodoInput';
import Item from '../molecules/Item';

export default function ItemsViewer({ items, dispatch, filter }) {
  const pushTodo = (text) => {
    const newTodo = createTodo(text);

    dispatch({
      type: 'ADD_TODO',
      newTodo,
    });
  };

  const todos = items.reduce((displayItems, itemObject) => {
    const { isComplete, id } = itemObject;
    const itemJsx = (
      <Item
        todo={itemObject}
        key={id}
      />
    );

    switch (filter) {
      case 'done': {
        isComplete && displayItems.push(itemJsx);
        return displayItems;
      }
      case 'due': {
        !isComplete && displayItems.push(itemJsx);
        return displayItems;
      }
      default:
        displayItems.push(itemJsx);
        return displayItems;
    }
  }, []);

  return (
    <div className="view-box overflow-y-scroll">
      <AddTodoInput pushTodo={pushTodo} />
      {todos}
    </div>
  );
}

ItemsViewer.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  dispatch: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
};
