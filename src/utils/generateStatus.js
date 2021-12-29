/**
 * @param {array of object} array
 * @param {string} condition
 * @returns {number}
 */
const completedItemsLength = (array, condition) => {
  const status = array.filter((item) => item[condition]);
  return status.length;
};

const generateStatus = (items) => (
  `${completedItemsLength(items, 'isComplete')}/${items.length}`
);

export default generateStatus;
