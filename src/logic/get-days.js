import { data } from "../index.js";

const MILLISECONDS_IN_SECOND = 1000;
const MILLISECONDS_IN_HOUR = 1000 * 60 * 60;

// Returns day of the week in selected timezone
const getDay = (datetimeEpoch) => {
  const adjustedTime =
    datetimeEpoch * MILLISECONDS_IN_SECOND +
    data.tzoffset * MILLISECONDS_IN_HOUR;
  const date = new Date(adjustedTime);
  return date.toLocaleString("en-US", { weekday: "long", timeZone: "UTC" });
};

// Returns 7 days starting from current day
const getDays = () => data.days.map((day) => getDay(day.datetimeEpoch));

export { getDays };
