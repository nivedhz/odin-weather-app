import { createCurrentForecastStats } from "./main/CurrentForecastContainer.js";

function renderCurrentWeatherStat(location, temperature, weather, weatherDesc) {
  document.querySelector(".current-forecast__stat-container").replaceChildren();
  document
    .querySelector(".current-forecast__stat-container")
    .append(
      createCurrentForecastStats(location, temperature, weather, weatherDesc),
    );
}
export { renderCurrentWeatherStat };
