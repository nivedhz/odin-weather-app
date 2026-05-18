import locationImg from "../../assets/images/location-pin.svg";
import thermometerImg from "../../assets/images/thermometer-img.svg";
import airQualityImg from "../../assets/images/air-quality-img.svg";
import uvIndexImg from "../../assets/images/uv-index-img.svg";
import visibilityImg from "../../assets/images/visibility-img.svg";

function createSearchBar() {
  const container = document.createElement("div");
  container.classList.add("search-bar__container");
  const formContainer = document.createElement("form");
  formContainer.classList.add("search-bar__form-container");
  const searchInput = document.createElement("input");
  searchInput.classList.add("search-bar__input");
  const locationImgEl = document.createElement("img");
  locationImgEl.src = locationImg;
  locationImgEl.classList.add("search-bar__location-img");

  searchInput.id = "search-input";
  searchInput.type = "search";
  searchInput.autocorrect = "off";
  searchInput.spellcheck = false;
  searchInput.placeholder = "Search for a location";

  formContainer.append(searchInput);
  container.append(locationImgEl, formContainer);
  return container;
}
function createCurrentForecastStats() {
  const container = document.createElement("div");
  container.classList.add("current-forecast__stat-container");
  const currentTemperature = document.createElement("h1");
  currentTemperature.classList.add("current-forecast__temperature");
  const currentWeather = document.createElement("h1");
  currentWeather.classList.add("current-forecast__weather");
  const currentWeatherDescription = document.createElement("p");
  currentWeatherDescription.classList.add(
    "current-forecast__weather-description",
  );
  currentTemperature.textContent = "83\u00B0";
  currentWeather.textContent = "Rain, Partially cloudy";
  currentWeatherDescription.textContent =
    "Partly cloudy throughout the day with storms possible";

  container.append(
    currentTemperature,
    currentWeather,
    currentWeatherDescription,
  );
  return container;
}
function createCurrentForecastGridStats() {
  const container = document.createElement("div");
  container.classList.add("current-forecast__grid-container");
  const gridStats = [
    {
      img: thermometerImg,
      heading: "FEELS LIKE",
      mainContent: "80\u00B0",
      paraContent: "It feels colder than the actual temperature",
    },
    {
      img: airQualityImg,
      heading: "AIR QUALITY",
      mainContent: "36",
      paraContent:
        "Air quality index is similar to yesterday at about this time",
    },
    {
      img: uvIndexImg,
      heading: "UV INDEX",
      mainContent: "1",
      paraContent: "Low for the rest of the day",
    },
    {
      img: visibilityImg,
      heading: "VISIBILITY",
      mainContent: "12 km",
      paraContent: "Clear view",
    },
  ];
  gridStats.forEach((gridStat) => {
    const gridEl = document.createElement("div");
    gridEl.classList.add("current-forecast__grid-el");
    const headingContainer = document.createElement("div");
    headingContainer.classList.add("current-forecast__grid-heading-container");
    const headingImg = document.createElement("img");
    headingImg.classList.add("current-forecast__grid-img");
    const headingEl = document.createElement("h2");
    headingEl.classList.add("current-forecast__grid-heading");
    const mainContentEl = document.createElement("h1");
    mainContentEl.classList.add("current-forecast__grid-main-content");
    const paraContentEl = document.createElement("p");
    paraContentEl.classList.add("current-forecast__grid-para-content");

    headingImg.src = gridStat.img;
    headingEl.textContent = gridStat.heading;
    mainContentEl.textContent = gridStat.mainContent;
    paraContentEl.textContent = gridStat.paraContent;

    headingContainer.append(headingImg, headingEl);
    gridEl.append(headingContainer, mainContentEl, paraContentEl);
    container.append(gridEl);
  });

  return container;
}

export function createCurrentForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("current-forecast__container");
  const searchContainer = createSearchBar();
  const currentForecastStatContainer = createCurrentForecastStats();
  const currentForecastGridContainer = createCurrentForecastGridStats();

  container.append(
    searchContainer,
    currentForecastStatContainer,
    currentForecastGridContainer,
  );
  return container;
}
