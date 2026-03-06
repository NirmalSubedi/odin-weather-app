const processHoursData = (hours) =>
  hours.map((hour) => {
    const {
      datetime,
      temp,
      precipprob,
      winddir,
      windspeed,
      visibility,
      conditions,
    } = hour;
    return {
      datetime,
      temp,
      precipprob,
      winddir,
      windspeed,
      visibility,
      conditions,
    };
  });

const processDaysData = (data) => {
  const { resolvedAddress, days, tzoffset, alerts } = data;

  const daysData = days.map((day) => {
    const { datetimeEpoch, tempmin, tempmax, hours } = day;
    const hoursData = processHoursData(hours);
    return { datetimeEpoch, tempmin, tempmax, hoursData };
  });

  return { resolvedAddress, tzoffset, alerts, daysData };
};

export { processDaysData };
