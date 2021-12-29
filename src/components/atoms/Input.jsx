import propTypes from 'prop-types';
import { forwardRef } from 'react';

function Input({
  classes, type = 'text', placeholder = null, value = null, handler = null, keyPressHandler = null,
}, inputRef) {
  return (
    <input
      ref={inputRef}
      className={(classes || '').trim()}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
      onKeyPress={keyPressHandler}
    />
  );
}

export default forwardRef(Input);
Input.propTypes = {
  classes: propTypes.string.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
  keyPressHandler: propTypes.func,
};
