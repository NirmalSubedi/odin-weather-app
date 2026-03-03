// Formula: C = (F - 32) x 5/9
const convertToCelsius = (fahrenheit) => {
  const result = Math.round(((fahrenheit - 32) * 5) / 9);
  return result;
};
export { convertToCelsius };
