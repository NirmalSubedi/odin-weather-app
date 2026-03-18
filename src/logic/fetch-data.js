import { handleError } from "./error-handler.js";

const unsafeFetchData = async (location) => {
  if (location === "")
    throw new Error("Search is empty! Enter a location to search.");

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=hours,alerts&key=C8VGL9XBQVYBGC24PHVR6NSSR&contentType=json`
  );
  if (!response.ok) throw new Error(await response.text());

  const data = await response.json();

  return data;
};

const fetchData = handleError(unsafeFetchData);

export { fetchData };
