import {
  createCurrentForecastGridStats,
  createCurrentForecastStats,
} from "./main/CurrentForecastContainer.js";

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
export { renderCurrentWeatherStat, renderCurrentWeatherGrid };
