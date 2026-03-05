// Returns day of the week in selected timezone
const getDay = (dayData, data) => {
  const date = new Date(dayData.datetime);
  return date.toLocaleString("en-US", {
    weekday: "long",
    timeZone: `${data.timezone ?? "UTC"}`,
  });
};

// Returns 7 days starting from current day
const getDays = (data) => data.days.map((day) => getDay(day, data));

export { getDays };
