const searchElement = document.body.querySelector(".location-search");
const getInput = () => {
  const value = searchElement.value.trim();
  return value;
};

export { getInput };
