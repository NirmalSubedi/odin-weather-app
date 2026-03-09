import { showError } from "../index.js";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.error(error);
      if (error.message === "Request did not match an endpoint.") {
        error.name = "Location not found";
        error.message = "Please enter a valid location.";
      }
      showError(error);
    });

export { handleError };
