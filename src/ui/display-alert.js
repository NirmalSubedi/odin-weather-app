import { queryData } from "../index.js";

const warnings = document.body.querySelector(".warnings");
const alertContainer = warnings.querySelector(".alerts");
const [headline, description] = alertContainer.querySelectorAll(
  ".headline, .description"
);

const displayAlert = () => {
  const { alerts } = queryData;
  if (alerts.length === 0) return;
  const recentAlert = alerts[0];

  warnings.classList.remove("hidden");
  alertContainer.classList.remove("hidden");
  const { event, headline: subject } = recentAlert;

  headline.textContent = event;
  description.textContent = `${subject}.`;
};

export { displayAlert };
