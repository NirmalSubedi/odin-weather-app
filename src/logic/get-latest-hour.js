const MILLISECONDS_IN_HOUR = 1000 * 60 * 60;

// Returns recent hour data
const getLatestHourData = (data) => {
  const now = new Date();
  now.setUTCMilliseconds(
    now.getUTCMilliseconds() + data.tzoffset * MILLISECONDS_IN_HOUR
  );
  const latestHour = data.currentDay.hoursData.find((hour) => {
    const [hourString] = hour.datetime.split(":");
    return Number(hourString) === now.getUTCHours();
  });
  return latestHour;
};

export { getLatestHourData };
