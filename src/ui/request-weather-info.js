import {
  getInput,
  fetchData,
  hideError,
  processDaysData,
  displayLoading,
} from "../index.js";

const [searchElement, searchButton] = document.body.querySelectorAll(
  ".location-search, .search-button"
);
const requestWeatherInfo = async () => {
  hideError();
  searchElement.setAttribute("disabled", "");
  searchButton.setAttribute("disabled", "");
  searchButton.textContent = "Searching.  ";
  const loadState = setInterval(displayLoading, 1000);

  const value = getInput();
  let data = await fetchData(value);
  data = processDaysData(data);

  clearInterval(loadState);
  searchElement.removeAttribute("disabled");
  searchButton.removeAttribute("disabled");
  searchButton.textContent = "Search";

  return data;
};

export { requestWeatherInfo };
