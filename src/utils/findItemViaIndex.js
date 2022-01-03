const findItemNIndex = (array, id) => {
  const index = array.findIndex((item) => item.id === id);

  return Object.freeze([
    index,
    array[index],
  ]);
};

export default findItemNIndex;
