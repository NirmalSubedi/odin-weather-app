import { handleError } from "./error-handler.js";

const unsafeFetchData = async (location) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=us&include=days,hours,alerts&key=YOUR_KEY_HERE&contentType=json`
  );
  if (!response.ok) throw new Error(await response.text());

  const data = await response.json();

  console.log(data);
  return data;
};

const fetchData = handleError(unsafeFetchData);

export { fetchData };
