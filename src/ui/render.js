import {
  createCurrentForecastGridStats,
  createCurrentForecastStats,
} from "./main/CurrentForecastContainer.js";
import { createHourlyForecastEl } from "./main/UpcomingForecastContainer.js";

function renderCurrentWeatherStat(location, temperature, weather, weatherDesc) {
  document.querySelector(".current-forecast__stat-container").replaceChildren();
  document
    .querySelector(".current-forecast__stat-container")
    .replaceWith(
      createCurrentForecastStats(location, temperature, weather, weatherDesc),
    );
}
function renderCurrentWeatherGrid(
  feelsLikeTemp,
  humidity,
  uvIndex,
  visibility,
) {
  document.querySelector(".current-forecast__grid-container").replaceChildren();
  document
    .querySelector(".current-forecast__grid-container")
    .replaceWith(
      createCurrentForecastGridStats(
        feelsLikeTemp,
        humidity,
        uvIndex,
        visibility,
      ),
    );
}
function renderHourlyForecast(hourlyData) {
  const containerWrapper = document.querySelector(
    ".upcoming-forecast__hourly-container-wrapper",
  );
  containerWrapper.replaceChildren(
    createHourlyForecastEl(hourlyData, containerWrapper),
  );
}
export {
  renderCurrentWeatherStat,
  renderCurrentWeatherGrid,
  renderHourlyForecast,
};
