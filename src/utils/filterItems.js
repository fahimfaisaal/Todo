/**
 * @param {array} items
 * @param {string} visibility
 * @returns array
 */
const filterItems = (items, visibility) => {
  if (visibility === 'done') {
    return items.filter((item) => item.isComplete);
  }

  if (visibility === 'due') {
    return items.filter((item) => !item.isComplete);
  }

  return items;
};

export default filterItems;
