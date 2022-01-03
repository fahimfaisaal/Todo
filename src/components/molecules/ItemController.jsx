/* eslint-disable no-restricted-globals */
import propTypes from 'prop-types';
import Button from '../atoms/Button';

const visibilityRecognizer = (visibilityStatus, status) => (visibilityStatus === status ? ' active-visibility' : '');
export default function ItemController({ dispatch, clearPlaceholder, state }) {
  const { items, visibility, mode } = state;
  const listName = null;
  const clearItems = () => {
    let isClear = false;

    if (items[mode].length) {
      // eslint-disable-next-line no-alert
      isClear = confirm(`Could you remove all ${clearPlaceholder}`);
    }

    if (isClear) {
      dispatch({
        type: 'CLEAR',
        payload: {
          mode,
        },
      });

      const filterAction = {
        type: 'FILTER',
        payload: {
          visibility: 'all',
          mode,
        },
      };

      dispatch(filterAction);
    }
  };

  const visibilityHandler = (e) => {
    const { innerText: filter } = e.target;

    const filterAction = {
      type: 'FILTER',
      payload: {
        visibility: filter,
        mode,
      },
    };

    dispatch(filterAction);
  };

  const isAll = visibilityRecognizer(visibility, 'all');
  const isDue = visibilityRecognizer(visibility, 'due');
  const isDone = visibilityRecognizer(visibility, 'done');

  return (
    <div className="view-layout flex justify-end items-center">
      {listName && <Button classes="visibility-button mr-auto" innerText={`← back to ${listName}`} />}
      <Button classes={`visibility-button${isAll}`} innerText="all" handler={visibilityHandler} />
      <Button classes={`visibility-button${isDue}`} innerText="due" handler={visibilityHandler} />
      <Button classes={`visibility-button${isDone}`} innerText="done" handler={visibilityHandler} />
      <Button classes="clear-button" innerText="clear" handler={clearItems} />
    </div>
  );
}

ItemController.propTypes = {
  dispatch: propTypes.func.isRequired,
  clearPlaceholder: propTypes.string.isRequired,
  state: propTypes.objectOf(propTypes.any),
};
