import propTypes from 'prop-types';
import createTodo from '../../utils/createTodo';
import Item from '../molecules/Item';
import AddTodoInput from '../molecules/AddTodoInput';

export default function ItemsViewer({ items, dispatch }) {
  const pushTodo = (text) => {
    const newTodo = createTodo(text);

    dispatch({
      type: 'ADD_TODO',
      newTodo,
    });
  };

  const todos = items.map((todoObject) => (
    <Item
      todo={todoObject}
      key={todoObject.id}
    />
  ));

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
};
