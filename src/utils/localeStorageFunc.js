/**
 * @param {string} key
 * @param {any} data
 */
export const saveToLocaleStorage = (key, data) => {
  const convertTodo = JSON.stringify(data);

  localStorage.setItem(key, convertTodo);
};

/**
 * @param {string} key
 * @param {function} dispatch
 * @param {string} type
 * @param {object} others
 */
export const getDataFromLocaleStorage = (key, dispatch, type, others = {}) => {
  const localeItems = localStorage.getItem(key);

  if (localeItems.length) {
    const convertToJson = JSON.parse(localeItems);

    dispatch({
      type,
      fetchData: convertToJson,
      ...others,
    });
  }
};
