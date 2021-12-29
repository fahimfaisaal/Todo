/* eslint-disable no-restricted-globals */
import propTypes from 'prop-types';
import Button from '../atoms/Button';

const visibilityRecognizer = (visibilityStatus, status) => (visibilityStatus === status ? ' active-visibility' : '');
export default function ItemController({ dispatch, placeholder, state }) {
  const { items, visibility } = state;

  const clearItems = () => {
    let isClear = false;

    if (items.length) {
      // eslint-disable-next-line no-alert
      isClear = confirm(`Could you remove all ${placeholder}`);
    }

    if (isClear) {
      dispatch({ type: 'CLEAR' });

      const filterAction = {
        type: 'FILTER',
        payload: {
          visibility: 'all',
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
      },
    };

    dispatch(filterAction);
  };

  const isAll = visibilityRecognizer(visibility, 'all');
  const isDue = visibilityRecognizer(visibility, 'due');
  const isDone = visibilityRecognizer(visibility, 'done');

  return (
    <div className="view-layout flex justify-end items-center">
      <Button classes={`visibility-button${isAll}`} innerText="all" handler={visibilityHandler} />
      <Button classes={`visibility-button${isDue}`} innerText="due" handler={visibilityHandler} />
      <Button classes={`visibility-button${isDone}`} innerText="done" handler={visibilityHandler} />
      <Button classes="clear-button" innerText="clear" handler={clearItems} />
    </div>
  );
}

ItemController.propTypes = {
  dispatch: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  state: propTypes.objectOf(propTypes.any),
};
