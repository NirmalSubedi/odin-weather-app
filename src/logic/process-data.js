const processData = (data) => {
  const { resolvedAddress, days, tzoffset, alerts } = data;

  const daysData = days.map((day) => {
    const {
      datetimeEpoch,
      temp,
      feelslike,
      tempmin,
      tempmax,
      conditions,
      icon,
      visibility,
    } = day;
    return {
      datetimeEpoch,
      temp,
      feelslike,
      tempmin,
      tempmax,
      conditions,
      icon,
      visibility,
    };
  });

  return { resolvedAddress, tzoffset, alerts, daysData };
};

export { processData };
