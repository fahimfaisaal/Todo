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
 * @returns {any}
 */
export const getDataFromLocaleStorage = (key) => {
  const localeItems = localStorage.getItem(key);

  if (Array.isArray(localeItems)) {
    const parsedData = JSON.parse(localeItems);

    return parsedData;
  }

  return localeItems;
};

/**
 * @param {string} key
 * @callback dispatch
 */
export const dispatchFetchData = (key, dispatch) => {
  const fetchData = JSON.parse(getDataFromLocaleStorage(key));

  const fetchAction = {
    type: 'FETCH',
    fetchData,
  };

  dispatch(fetchAction);
};
