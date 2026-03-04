import { handleError } from "./error-handler";

const unsafeFetchData = async (location) => {
  const data =
    await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?
  unitGroup=us
  &include=hours,days,current,alerts
  &key=YOUR_API_KEY
  &contentType=json`);

  // TODO: remove console statement
  // eslint-disable-next-line no-console
  console.log(data);
  return data;
};

const fetchData = handleError(unsafeFetchData);

export { fetchData };
