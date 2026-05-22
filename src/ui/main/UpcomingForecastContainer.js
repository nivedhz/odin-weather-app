import {
  defaultHourlyData,
  defaultDailyData,
  defaultSunsetTime,
  defaultSunriseTime,
} from "../../data/state.js";

function createHourlyForecast() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__hourly-container-el");
  const containerName = document.createElement("h1");
  containerName.classList.add("upcoming-forecast__hourly-container-name");
  const containerWrapper = document.createElement("div");
  containerWrapper.classList.add("upcoming-forecast__hourly-container-wrapper");
  containerName.textContent = "HOURLY FORECAST";
  container.append(containerName);
  defaultHourlyData.forEach((hourStat) => {
    const hourlyContainer = document.createElement("div");
    hourlyContainer.classList.add("upcoming-forecast__hourly-el");
    const timeEl = document.createElement("h1");
    timeEl.classList.add("upcoming-forecast__hourly-time-el");
    const weatherImgEl = document.createElement("img");
    weatherImgEl.classList.add("upcoming-forecast__hourly-img-el");
    const temperatureEl = document.createElement("h1");
    temperatureEl.classList.add("upcoming-forecast__hourly-temperature-el");

    timeEl.textContent = hourStat.time;
    weatherImgEl.src = hourStat.img;
    temperatureEl.textContent = hourStat.temperature;

    hourlyContainer.append(timeEl, weatherImgEl, temperatureEl);
    containerWrapper.append(hourlyContainer);
  });

  container.append(containerWrapper);
  return container;
}
function createDailyForecast() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__daily-container-el");
  const containerName = document.createElement("h1");
  containerName.classList.add("upcoming-forecast__daily-container-name");
  const containerWrapper = document.createElement("div");
  containerWrapper.classList.add("upcoming-forecast__daily-container-wrapper");
  containerName.textContent = "10 DAY FORECAST";
  container.append(containerName);
  defaultDailyData.forEach((dailyStat) => {
    const dailyContainer = document.createElement("div");
    dailyContainer.classList.add("upcoming-forecast__daily-el");
    const dayEl = document.createElement("h1");
    dayEl.classList.add("upcoming-forecast__daily-day-el");
    const dateEl = document.createElement("h1");
    dateEl.classList.add("upcoming-forecast__daily-date-el");
    const weatherImgEl = document.createElement("img");
    weatherImgEl.classList.add("upcoming-forecast__daily-img-el");
    const temperatureEl = document.createElement("h1");
    temperatureEl.classList.add("upcoming-forecast__daily-temperature-el");

    dayEl.textContent = dailyStat.day;
    dateEl.textContent = dailyStat.date;
    weatherImgEl.src = dailyStat.img;
    temperatureEl.textContent = dailyStat.temperature;

    dailyContainer.append(dayEl, dateEl, weatherImgEl, temperatureEl);
    containerWrapper.append(dailyContainer);
  });
  container.append(containerWrapper);
  return container;
}
function createSunActivity() {
  const sunActivityContainer = document.createElement("div");
  sunActivityContainer.classList.add("upcoming-forecast__sun-container");

  const sunriseTimeContainer = document.createElement("div");
  sunriseTimeContainer.classList.add("upcoming-forecast__sunrise-container");
  const sunriseTimeContainerName = document.createElement("h1");
  sunriseTimeContainerName.classList.add(
    "upcoming-forecast__sunrise-container-name",
  );
  const sunriseTimeEl = document.createElement("h1");
  sunriseTimeEl.classList.add("upcoming-forecast__sunrise-time-el");
  sunriseTimeContainer.append(sunriseTimeContainerName, sunriseTimeEl);
  sunriseTimeContainerName.textContent = "SUN RISE";
  sunriseTimeEl.textContent = defaultSunriseTime;

  const sunsetTimeContainer = document.createElement("div");
  sunsetTimeContainer.classList.add("upcoming-forecast__sunset-container");
  const sunsetTimeContainerName = document.createElement("h1");
  sunsetTimeContainerName.classList.add(
    "upcoming-forecast__sunset-container-name",
  );
  const sunsetTimeEl = document.createElement("h1");
  sunsetTimeEl.classList.add("upcoming-forecast__sunset-time-el");
  sunsetTimeContainerName.textContent = "SUN SET";
  sunsetTimeEl.textContent = defaultSunsetTime;
  sunsetTimeContainer.append(sunsetTimeContainerName, sunsetTimeEl);

  sunActivityContainer.append(sunriseTimeContainer, sunsetTimeContainer);
  return sunActivityContainer;
}

export function createUpcomingForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__container");
  const hourlyForecastContainer = document.createElement("div");
  hourlyForecastContainer.classList.add("upcoming-forecast__hourly-container");
  const dailyForecastContainer = document.createElement("div");
  dailyForecastContainer.classList.add("upcoming-forecast__daily-container");
  const sunActivityContainer = createSunActivity();

  hourlyForecastContainer.append(createHourlyForecast());
  dailyForecastContainer.append(createDailyForecast());
  container.append(
    hourlyForecastContainer,
    dailyForecastContainer,
    sunActivityContainer,
  );
  return container;
}
