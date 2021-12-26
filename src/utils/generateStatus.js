/**
 * @param {array of object} array
 * @param {string} condition
 * @returns {number}
 */
const generateStatus = (array, condition) => {
  const status = array.filter((item) => item[condition]);
  return status.length;
};

export default generateStatus;
