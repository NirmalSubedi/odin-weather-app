import { showError } from "../index.js";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      showError(error);
      console.error(error);
    });

export { handleError };
