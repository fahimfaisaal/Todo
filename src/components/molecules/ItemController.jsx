/* eslint-disable no-restricted-globals */
import propTypes from 'prop-types';
import Button from '../atoms/Button';

const filterRecognizer = (filterStatus, status) => (filterStatus === status ? ' active-filter' : '');
export default function ItemController({
  dispatch, placeholder, lengthOfItems, filter, setFilter,
}) {
  const clearItems = () => {
    let isClear = false;

    if (lengthOfItems) {
      // eslint-disable-next-line no-alert
      isClear = confirm(`Could you remove all ${placeholder}`);
    }

    if (isClear) {
      setFilter('all');

      dispatch({
        type: 'CLEAR_TODOS',
      });
    }
  };
  const filterHandler = (e) => {
    const { innerText } = e.target;

    setFilter(innerText);
  };

  const isAll = filterRecognizer(filter, 'all');
  const isDue = filterRecognizer(filter, 'due');
  const isDone = filterRecognizer(filter, 'done');

  return (
    <div className="view-layout flex justify-end items-center">
      <Button classes={`filter-button${isAll}`} innerText="all" handler={filterHandler} />
      <Button classes={`filter-button${isDue}`} innerText="due" handler={filterHandler} />
      <Button classes={`filter-button${isDone}`} innerText="done" handler={filterHandler} />
      <Button classes="clear-button" innerText="clear" handler={clearItems} />
    </div>
  );
}

ItemController.propTypes = {
  dispatch: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  lengthOfItems: propTypes.number.isRequired,
  filter: propTypes.string.isRequired,
  setFilter: propTypes.func.isRequired,
};
