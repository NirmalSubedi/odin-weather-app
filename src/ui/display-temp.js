import { getLatestHourData, queryData, convertToCelsius } from "../index.js";

const temperatureToggle = document.body.querySelector(".temperature-toggle");
const primaryInfoContainer = document.body.querySelector(
  ".weather .primary-info"
);
const [temperature, minimumTemp, maximumTemp] =
  primaryInfoContainer.querySelectorAll(".temperature, .min-temp, .max-temp");

const displayTemp = () => {
  const element = temperatureToggle.querySelector("input[type=radio]:checked");
  const { value: unit } = element;
  if (!unit || !element) return;

  const { currentDay } = queryData;
  const { tempmin, tempmax } = currentDay;
  const currentHour = getLatestHourData(queryData);
  const { temp } = currentHour;

  if (unit === "fahrenheit") {
    temperature.textContent = `${Math.floor(temp)}°F`;
    minimumTemp.textContent = `Min: ${Math.floor(tempmin)}°F`;
    maximumTemp.textContent = `Max: ${Math.floor(tempmax)}°F`;
  } else {
    temperature.textContent = `${Math.floor(convertToCelsius(temp))}°C`;
    minimumTemp.textContent = `Min: ${Math.floor(convertToCelsius(tempmin))}°C`;
    maximumTemp.textContent = `Max: ${Math.floor(convertToCelsius(tempmax))}°C`;
  }
};

temperatureToggle.addEventListener("change", displayTemp);

export { displayTemp };
