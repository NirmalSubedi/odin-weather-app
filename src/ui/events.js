import { displayTemp, displayInformation } from "../index.js";

const searchButton = document.body.querySelector(".search-button");
searchButton.addEventListener("click", displayInformation);

const selectTempUnit = (event) => {
  const { code } = event;
  const { target: labelElement } = event;
  const { previousElementSibling: radioElement } = labelElement;
  if (code !== "Space") return;
  if (radioElement.checked) return;
  radioElement.checked = true;
  radioElement.dispatchEvent(new Event("change", { bubbles: true }));
};

const temperatureToggle = document.body.querySelector(".temperature-toggle");
temperatureToggle.addEventListener("keyup", selectTempUnit);
temperatureToggle.addEventListener("change", displayTemp);
