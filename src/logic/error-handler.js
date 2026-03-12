import { showError } from "../index.js";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.error(error);
      if (error.message === "Request did not match an endpoint.") {
        error.name = "Location not found";
        error.message = `Location not found. Try searching for: London, New York, Tokyo, Miami, or Paris.`;
      }
      showError(error);
    });

export { handleError };
