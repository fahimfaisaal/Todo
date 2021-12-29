/* eslint-disable no-restricted-globals */
import propTypes from 'prop-types';
import Button from '../atoms/Button';

const visibilityRecognizer = (visibilityStatus, status) => (visibilityStatus === status ? ' active-visibility' : '');
export default function ItemController({
  dispatch, placeholder, setVisibility, visibility, lengthOfItems,
}) {
  const clearItems = () => {
    let isClear = false;

    if (lengthOfItems) {
      // eslint-disable-next-line no-alert
      isClear = confirm(`Could you remove all ${placeholder}`);
    }

    if (isClear) {
      setVisibility('all');
      dispatch({ type: 'CLEAR' });
    }
  };

  const visibilityHandler = (e) => {
    const { innerText } = e.target;

    setVisibility(innerText);
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
  lengthOfItems: propTypes.number.isRequired,
  visibility: propTypes.string.isRequired,
  setVisibility: propTypes.func.isRequired,
};
