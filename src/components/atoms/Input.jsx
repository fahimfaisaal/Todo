import propTypes from 'prop-types';

export default function Input({
  classes, id, type = 'text', placeholder = null, value = null, handler = null, keyPressHandler = null,
}) {
  return (
    <input
      id={id}
      className={classes}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
      onKeyPress={keyPressHandler}
    />
  );
}

Input.propTypes = {
  id: propTypes.string,
  classes: propTypes.string.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  handler: propTypes.func,
  keyPressHandler: propTypes.func,
};
