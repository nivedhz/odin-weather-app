import cloudImg from "../../assets/images/cloud-img.svg";
import rainImg from "../../assets/images/cloud-rain-img.svg";
import stormImg from "../../assets/images/cloud-storm-img.svg";
import snowImg from "../../assets/images/snow-img.svg";
import sunImg from "../../assets/images/sun-img.svg";

function createHourlyForecast() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__hourly-container");
  const containerName = document.createElement("h1");
  containerName.classList.add("upcoming-forecast__hourly-container-name");
  const containerWrapper = document.createElement("div");
  containerWrapper.classList.add("upcoming-forecast__hourly-container-wrapper");
  const imgConfig = {
    cloudy: cloudImg,
    rainy: rainImg,
    storm: stormImg,
    snow: snowImg,
    sun: sunImg,
  };
  const hourlyForecast = [
    {
      time: "Now",
      img: imgConfig.cloudy,
      temperature: "81\u00B0",
    },
    {
      time: "1 AM",
      img: imgConfig.rainy,
      temperature: "79\u00B0",
    },
    {
      time: "2 AM",
      img: imgConfig.rainy,
      temperature: "78\u00B0",
    },
    {
      time: "3 AM",
      img: imgConfig.storm,
      temperature: "77\u00B0",
    },
    {
      time: "4 AM",
      img: imgConfig.storm,
      temperature: "76\u00B0",
    },
    {
      time: "5 AM",
      img: imgConfig.cloudy,
      temperature: "75\u00B0",
    },
    {
      time: "6 AM",
      img: imgConfig.sun,
      temperature: "76\u00B0",
    },
    {
      time: "7 AM",
      img: imgConfig.sun,
      temperature: "78\u00B0",
    },
    {
      time: "8 AM",
      img: imgConfig.sun,
      temperature: "80\u00B0",
    },
    {
      time: "9 AM",
      img: imgConfig.cloudy,
      temperature: "82\u00B0",
    },
    {
      time: "10 AM",
      img: imgConfig.cloudy,
      temperature: "84\u00B0",
    },
    {
      time: "11 AM",
      img: imgConfig.sun,
      temperature: "86\u00B0",
    },
    {
      time: "12 PM",
      img: imgConfig.sun,
      temperature: "88\u00B0",
    },
    {
      time: "1 PM",
      img: imgConfig.sun,
      temperature: "89\u00B0",
    },
    {
      time: "2 PM",
      img: imgConfig.cloudy,
      temperature: "90\u00B0",
    },
    {
      time: "3 PM",
      img: imgConfig.rainy,
      temperature: "87\u00B0",
    },
    {
      time: "4 PM",
      img: imgConfig.rainy,
      temperature: "85\u00B0",
    },
    {
      time: "5 PM",
      img: imgConfig.cloudy,
      temperature: "83\u00B0",
    },
    {
      time: "6 PM",
      img: imgConfig.cloudy,
      temperature: "81\u00B0",
    },
    {
      time: "7 PM",
      img: imgConfig.storm,
      temperature: "79\u00B0",
    },
    {
      time: "8 PM",
      img: imgConfig.rainy,
      temperature: "78\u00B0",
    },
    {
      time: "9 PM",
      img: imgConfig.cloudy,
      temperature: "77\u00B0",
    },
    {
      time: "10 PM",
      img: imgConfig.snow,
      temperature: "74\u00B0",
    },
    {
      time: "11 PM",
      img: imgConfig.cloudy,
      temperature: "73\u00B0",
    },
  ];
  containerName.textContent = "HOURLY FORECAST";
  container.append(containerName);
  hourlyForecast.forEach((hourStat) => {
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
  container.classList.add("upcoming-forecast__daily-container");
  const containerName = document.createElement("h1");
  containerName.classList.add("upcoming-forecast__daily-container-name");
  const containerWrapper = document.createElement("div");
  containerWrapper.classList.add("upcoming-forecast__daily-container-wrapper");
  const imgConfig = {
    cloudy: cloudImg,
    rainy: rainImg,
    storm: stormImg,
    snow: snowImg,
    sun: sunImg,
  };
  const dailyForecast = [
    {
      day: "Today",
      date: "19/5",
      img: imgConfig.rainy,
      temperature: "81\u00B0",
    },
    {
      day: "Tuesday",
      date: "20/5",
      img: imgConfig.cloudy,
      temperature: "79\u00B0",
    },
    {
      day: "Wednesday",
      date: "21/5",
      img: imgConfig.storm,
      temperature: "77\u00B0",
    },
    {
      day: "Thursday",
      date: "22/5",
      img: imgConfig.sun,
      temperature: "84\u00B0",
    },
    {
      day: "Friday",
      date: "23/5",
      img: imgConfig.cloudy,
      temperature: "82\u00B0",
    },
    {
      day: "Saturday",
      date: "24/5",
      img: imgConfig.rainy,
      temperature: "80\u00B0",
    },
    {
      day: "Sunday",
      date: "25/5",
      img: imgConfig.snow,
      temperature: "74\u00B0",
    },
    {
      day: "Monday",
      date: "26/5",
      img: imgConfig.sun,
      temperature: "85\u00B0",
    },
    {
      day: "Tuesday",
      date: "27/5",
      img: imgConfig.storm,
      temperature: "78\u00B0",
    },
    {
      day: "Wednesday",
      date: "28/5",
      img: imgConfig.cloudy,
      temperature: "80\u00B0",
    },
  ];
  containerName.textContent = "10 DAY FORECAST";
  container.append(containerName);
  dailyForecast.forEach((dailyStat) => {
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
  sunriseTimeEl.textContent = "6:42 AM";

  const sunsetTimeContainer = document.createElement("div");
  sunsetTimeContainer.classList.add("upcoming-forecast__sunset-container");
  const sunsetTimeContainerName = document.createElement("h1");
  sunsetTimeContainerName.classList.add(
    "upcoming-forecast__sunset-container-name",
  );
  const sunsetTimeEl = document.createElement("h1");
  sunsetTimeEl.classList.add("upcoming-forecast__sunset-time-el");
  sunsetTimeContainerName.textContent = "SUN SET";
  sunsetTimeEl.textContent = "6:42 PM";
  sunsetTimeContainer.append(sunsetTimeContainerName, sunsetTimeEl);

  sunActivityContainer.append(sunriseTimeContainer, sunsetTimeContainer);
  return sunActivityContainer;
}

export function createUpcomingForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__container");
  const hourlyForecastContainer = createHourlyForecast();
  const dailyForecastContainer = createDailyForecast();
  const sunActivityContainer = createSunActivity();

  container.append(
    hourlyForecastContainer,
    dailyForecastContainer,
    sunActivityContainer,
  );
  return container;
}
