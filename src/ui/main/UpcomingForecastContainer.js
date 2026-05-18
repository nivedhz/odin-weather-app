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

export function createUpcomingForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("upcoming-forecast__container");
  const hourlyForecastContainer = createHourlyForecast();

  container.append(hourlyForecastContainer);
  return container;
}
