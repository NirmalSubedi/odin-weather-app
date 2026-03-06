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
      icon,
    } = hour;
    return {
      datetime,
      temp,
      precipprob,
      winddir,
      windspeed,
      visibility,
      conditions,
      icon,
    };
  });

const processDaysData = (data) => {
  const { resolvedAddress, days, tzoffset, alerts } = data;

  const daysData = days.map((day) => {
    const { datetimeEpoch, tempmin, tempmax, conditions, icon, hours } = day;
    const hoursData = processHoursData(hours);
    return { datetimeEpoch, tempmin, tempmax, conditions, icon, hoursData };
  });

  return { resolvedAddress, tzoffset, alerts, daysData };
};

export { processDaysData };
