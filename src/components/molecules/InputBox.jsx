import propTypes from 'prop-types';
import enterKey from '../../assets/icon/enter-key';
import Input from '../atoms/Input';

export default function InputBox({
  inputRef, classes, placeholder, value,
  changeHandler, keyPressHandler, clickHandler,
}) {
  return (
    <>
      <Input
        ref={inputRef}
        classes={`item-input ${classes || ''}`}
        placeholder={placeholder}
        value={value}
        handler={changeHandler}
        keyPressHandler={keyPressHandler}
      />

      {clickHandler && (
      <i className="cursor-pointer" onClick={clickHandler}>{enterKey}</i>
      )}
    </>
  );
}

InputBox.propTypes = {
  inputRef: propTypes.objectOf(propTypes.any),
  classes: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  changeHandler: propTypes.func.isRequired,
  keyPressHandler: propTypes.func,
  clickHandler: propTypes.func,
};
