import {
  createCurrentForecastGridStats,
  createCurrentForecastStats,
} from "./main/CurrentForecastContainer.js";
import {
  createDailyForecastEl,
  createHourlyForecastEl,
} from "./main/UpcomingForecastContainer.js";

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
  containerWrapper.replaceChildren();
  createHourlyForecastEl(hourlyData, containerWrapper);
}
function renderDailyForecast(dailyData) {
  const containerWrapper = document.querySelector(
    ".upcoming-forecast__daily-container-wrapper",
  );
  containerWrapper.replaceChildren();
  createDailyForecastEl(dailyData, containerWrapper);
}
function renderSunActivity(currentDay) {
  document.querySelector(".upcoming-forecast__sunrise-time-el").textContent =
    currentDay.sunrise.slice(0, 5) + " AM";
  document.querySelector(".upcoming-forecast__sunset-time-el").textContent =
    currentDay.sunset.slice(0, 5) + " PM";
}
export {
  renderCurrentWeatherStat,
  renderCurrentWeatherGrid,
  renderHourlyForecast,
  renderDailyForecast,
  renderSunActivity,
};
