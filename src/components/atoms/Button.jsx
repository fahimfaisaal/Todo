/* eslint-disable react/button-has-type */
import propTypes from 'prop-types';
import { forwardRef } from 'react/cjs/react.production.min';

function Button({
  innerText, type, classes, handler,
}, buttonRef) {
  const buttonType = (
    type === 'button'
        || type === 'submit'
        || type === 'reset'
  );

  return <button ref={buttonRef} type={buttonType ? type : 'button'} className={classes || ''} onClick={handler}>{ innerText}</button>;
}

export default forwardRef(Button);

Button.propTypes = {
  innerText: propTypes.string.isRequired,
  type: propTypes.string,
  classes: propTypes.string,
  handler: propTypes.func.isRequired,
};
