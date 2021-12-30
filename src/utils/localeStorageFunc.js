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
 * @callback dispatch
 */
export const dispatchFetchData = (key, dispatch) => {
  const fetchData = JSON.parse(localStorage.getItem(key));

  const fetchAction = {
    type: 'FETCH',
    payload: {
      fetchData,
    },
  };

  dispatch(fetchAction);
};
