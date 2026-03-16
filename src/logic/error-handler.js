import { showError } from "../index.js";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.error(error);
      showError(error);
    });

export { handleError };
