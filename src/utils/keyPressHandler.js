/**
 * @param {Event} e
 * @callback callback
 * @param {number} key
 */
export default function keyPressHandler(e, callback, key = 13) {
  const keyCode = e.keyCode || e.which;

  if (keyCode === key) {
    callback();
  }
}
