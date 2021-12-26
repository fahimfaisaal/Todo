/* eslint-disable no-restricted-globals */
import propTypes from 'prop-types';
import Button from '../atoms/Button';

export default function ItemController({ dispatch, placeholder, lengthOfItems }) {
  const clearItems = () => {
    let isClear = false;

    if (lengthOfItems) {
    // eslint-disable-next-line no-alert
      isClear = confirm(`Could you remove all ${placeholder}`);
    }

    isClear && dispatch({
      type: 'CLEAR_TODOS',
    });
  };

  return (
    <div className="view-layout flex justify-end">
      <Button classes="clear-button" innerText="clear" handler={clearItems} />
    </div>
  );
}

ItemController.propTypes = {
  dispatch: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  lengthOfItems: propTypes.number.isRequired,
};
