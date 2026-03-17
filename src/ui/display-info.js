import {
  requestWeatherInfo,
  getLatestHourData,
  getCardinalDirection,
  displayTemp,
  displayAlert,
  updateQueryData,
  formatAddress,
} from "../index.js";

const [introduction, weather] = document.body.querySelectorAll(
  ".introduction, .weather"
);
const [primaryInfoContainer, secondaryInfoContainer] = weather.querySelectorAll(
  ".primary-info, .secondary-info"
);
const [location, description] = primaryInfoContainer.querySelectorAll(
  ".location, .description"
);
const [windInfo, visibilityInfo, precipitationInfo] =
  secondaryInfoContainer.querySelectorAll(
    ".wind-section .info, .visibility-section .info, .precipitation-section .info"
  );

const displayInformation = async () => {
  const data = await requestWeatherInfo();
  if (!data) return;
  updateQueryData(data);

  const currentHour = getLatestHourData(data);
  const { resolvedAddress } = data;
  const { conditions, windspeed, winddir, visibility, precipprob } =
    currentHour;

  introduction.classList.add("hidden");
  weather.classList.remove("hidden");
  displayAlert();
  displayTemp();
  location.textContent = formatAddress(resolvedAddress);
  description.textContent = conditions;
  windInfo.textContent = `${windspeed} mph ${getCardinalDirection(winddir)}`;
  visibilityInfo.textContent = `${visibility} mi`;
  precipitationInfo.textContent = `${precipprob}%`;
};

export { displayInformation };
