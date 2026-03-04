const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch(console.error); // eslint-disable-line no-console

export { handleError };
