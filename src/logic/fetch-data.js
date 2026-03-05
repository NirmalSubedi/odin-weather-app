import { handleError } from "./error-handler.js";

const unsafeFetchData = async (location) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=us&include=days,hours,current,alerts&key=YOUR_KEY_HERE&contentType=json`
  );

  const data = await response.json();

  // TODO: remove console statement
  // eslint-disable-next-line no-console
  console.log(data);
  return data;
};

const fetchData = handleError(unsafeFetchData);

export { fetchData };
