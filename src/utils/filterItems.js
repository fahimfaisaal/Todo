/**
 * @param {array} items
 * @param {string} visibility
 * @returns array
 */
const filterItems = (items, visibility) => {
  switch (visibility) {
    case 'done':
      return items.filter((item) => item.isComplete);
    case 'due':
      return items.filter((item) => !item.isComplete);
    default:
      return items;
  }
};

export default filterItems;
