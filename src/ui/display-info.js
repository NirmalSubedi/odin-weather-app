import {
  requestWeatherInfo,
  getLatestHourData,
  getCardinalDirection,
} from "../index.js";

const [primaryInfoContainer, secondaryInfoContainer] =
  document.body.querySelectorAll(
    ".weather .primary-info, .weather .secondary-info"
  );
const [location, temperature, description, minimumTemp, maximumTemp] =
  primaryInfoContainer.querySelectorAll(
    ".location, .temperature, .description, .min-temp, .max-temp"
  );
const [windInfo, visibilityInfo, precipitationInfo] =
  secondaryInfoContainer.querySelectorAll(
    ".wind-section .info, .visibility-section .info, .precipitation-section .info"
  );

const displayInformation = async () => {
  const data = await requestWeatherInfo();
  if (!data) return;

  const currentHour = getLatestHourData(data);
  const { resolvedAddress, currentDay } = data;
  const { tempmin, tempmax } = currentDay;
  const { temp, conditions, windspeed, winddir, visibility, precipprob } =
    currentHour;

  location.textContent = resolvedAddress;
  temperature.textContent = `${Math.floor(temp)}°F`;
  description.textContent = conditions;
  minimumTemp.textContent = `Min: ${Math.floor(tempmin)}°F`;
  maximumTemp.textContent = `Max: ${Math.floor(tempmax)}°F`;
  windInfo.textContent = `${windspeed} mph ${getCardinalDirection(winddir)}`;
  visibilityInfo.textContent = `${visibility} mi`;
  precipitationInfo.textContent = `${precipprob}%`;
};

export { displayInformation };
