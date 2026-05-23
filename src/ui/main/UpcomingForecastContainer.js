import {
  defaultHourlyData,
  defaultDailyData,
  defaultSunsetTime,
  defaultSunriseTime,
  imgConfig,
} from "../../data/defaultData.js";

function createHourlyForecastEl(hourlyData, containerWrapper) {
  hourlyData.forEach((hourStat) => {
    const hourlyContainer = document.createElement("div");
    hourlyContainer.classList.add("upcoming-forecast__hourly-el");
    const timeEl = document.createElement("h1");
    timeEl.classList.add("upcoming-forecast__hourly-time-el");
    const weatherImgEl = document.createElement("img");
    weatherImgEl.classList.add("upcoming-forecast__hourly-img-el");
    const temperatureEl = document.createElement("h1");
    temperatureEl.classList.add("upcoming-forecast__hourly-temperature-el");

    timeEl.textContent = hourStat.datetime.slice(0, 5);
    weatherImgEl.src = imgConfig[hourStat.icon];
    temperatureEl.textContent = `${hourStat.temp}\u00B0`;

    hourlyContainer.append(timeEl, weatherImgEl, temperatureEl);
    containerWrapper.append(hourlyContainer);
  });
  return containerWrapper;
}
function createHourlyForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__hourly-container-el");
  const containerName = document.createElement("h1");
  containerName.classList.add("upcoming-forecast__hourly-container-name");
  const containerWrapper = document.createElement("div");
  containerWrapper.classList.add("upcoming-forecast__hourly-container-wrapper");
  containerName.textContent = "HOURLY FORECAST";
  container.append(containerName);
  createHourlyForecastEl(defaultHourlyData, containerWrapper);

  container.append(containerWrapper);
  return container;
}

function createDailyForecastEl(dailyData, containerWrapper) {
  dailyData.forEach((dailyStat) => {
    const dailyContainer = document.createElement("div");
    dailyContainer.classList.add("upcoming-forecast__daily-el");
    const dateEl = document.createElement("h1");
    dateEl.classList.add("upcoming-forecast__daily-date-el");
    const weatherImgEl = document.createElement("img");
    weatherImgEl.classList.add("upcoming-forecast__daily-img-el");
    const temperatureEl = document.createElement("h1");
    temperatureEl.classList.add("upcoming-forecast__daily-temperature-el");

    dateEl.textContent = dailyStat.datetime.slice(5, 10);
    weatherImgEl.src = imgConfig[dailyStat.icon];
    temperatureEl.textContent = `${dailyStat.temp}\u00B0`;

    dailyContainer.append(dateEl, weatherImgEl, temperatureEl);
    containerWrapper.append(dailyContainer);
  });
  return containerWrapper;
}
function createDailyForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__daily-container-el");
  const containerName = document.createElement("h1");
  containerName.classList.add("upcoming-forecast__daily-container-name");
  const containerWrapper = document.createElement("div");
  containerWrapper.classList.add("upcoming-forecast__daily-container-wrapper");
  containerName.textContent = "15 DAY FORECAST";
  container.append(containerName);

  createDailyForecastEl(defaultDailyData, containerWrapper);

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
  sunriseTimeEl.textContent = `${defaultSunriseTime} AM`;

  const sunsetTimeContainer = document.createElement("div");
  sunsetTimeContainer.classList.add("upcoming-forecast__sunset-container");
  const sunsetTimeContainerName = document.createElement("h1");
  sunsetTimeContainerName.classList.add(
    "upcoming-forecast__sunset-container-name",
  );
  const sunsetTimeEl = document.createElement("h1");
  sunsetTimeEl.classList.add("upcoming-forecast__sunset-time-el");
  sunsetTimeContainerName.textContent = "SUN SET";
  sunsetTimeEl.textContent = `${defaultSunsetTime} PM`;
  sunsetTimeContainer.append(sunsetTimeContainerName, sunsetTimeEl);

  sunActivityContainer.append(sunriseTimeContainer, sunsetTimeContainer);
  return sunActivityContainer;
}

function createUpcomingForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__container");
  const hourlyForecastContainer = document.createElement("div");
  hourlyForecastContainer.classList.add("upcoming-forecast__hourly-container");
  const dailyForecastContainer = document.createElement("div");
  dailyForecastContainer.classList.add("upcoming-forecast__daily-container");
  const sunActivityContainer = createSunActivity();

  hourlyForecastContainer.append(createHourlyForecastContainer());
  dailyForecastContainer.append(createDailyForecastContainer());
  container.append(
    hourlyForecastContainer,
    dailyForecastContainer,
    sunActivityContainer,
  );
  return container;
}

export {
  createDailyForecastEl,
  createHourlyForecastEl,
  createUpcomingForecastContainer,
};
