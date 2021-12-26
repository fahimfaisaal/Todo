/* eslint-disable react/button-has-type */
import propTypes from 'prop-types';

export default function Button({
  innerText, type, classes, handler,
}) {
  const buttonType = (
    type === 'button'
        || type === 'submit'
        || type === 'reset'
  );

  return <button type={buttonType ? type : 'button'} className={classes || ''} onClick={handler}>{ innerText}</button>;
}

Button.propTypes = {
  innerText: propTypes.string.isRequired,
  type: propTypes.string,
  classes: propTypes.string,
  handler: propTypes.func.isRequired,
};
