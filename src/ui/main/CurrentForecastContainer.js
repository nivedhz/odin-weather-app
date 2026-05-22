import locationImg from "../../assets/images/location-pin.svg";
import thermometerImg from "../../assets/images/thermometer-img.svg";
import humidityImg from "../../assets/images/humidity-img.svg";
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
  searchInput.name = "searchInput";
  searchInput.type = "search";
  searchInput.autocorrect = "off";
  searchInput.spellcheck = false;
  searchInput.placeholder = "Search for a location";

  formContainer.append(searchInput);
  container.append(locationImgEl, formContainer);
  return container;
}
function createCurrentForecastStats(
  location = "Kochi",
  temperature = "80",
  weather = "Rain, Partially cloudy",
  weatherDesc = "Partly cloudy throughout the day with storms possible",
) {
  const container = document.createElement("div");
  container.classList.add("current-forecast__stat-container");
  const currentLocation = document.createElement("h1");
  currentLocation.classList.add("current-forecast__location");
  const currentTemperature = document.createElement("h1");
  currentTemperature.classList.add("current-forecast__temperature");
  const currentWeather = document.createElement("h1");
  currentWeather.classList.add("current-forecast__weather");
  const currentWeatherDescription = document.createElement("p");
  currentWeatherDescription.classList.add(
    "current-forecast__weather-description",
  );
  currentLocation.textContent = location;
  currentTemperature.textContent = `${temperature}\u00B0`;
  currentWeather.textContent = weather;
  currentWeatherDescription.textContent = weatherDesc;

  container.append(
    currentLocation,
    currentTemperature,
    currentWeather,
    currentWeatherDescription,
  );
  return container;
}
function createCurrentForecastGridStats(
  feelsLikeTemp = "80",
  humidity = "84",
  uvIndex = 1,
  visibility = "12",
) {
  const container = document.createElement("div");
  container.classList.add("current-forecast__grid-container");
  const gridStats = [
    {
      img: thermometerImg,
      heading: "FEELS LIKE",
      mainContent: `${feelsLikeTemp}\u00B0`,
    },
    {
      img: humidityImg,
      heading: "HUMIDITY",
      mainContent: humidity,
    },
    {
      img: uvIndexImg,
      heading: "UV INDEX",
      mainContent: uvIndex,
    },
    {
      img: visibilityImg,
      heading: "VISIBILITY",
      mainContent: `${visibility}km`,
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

    headingImg.src = gridStat.img;
    headingEl.textContent = gridStat.heading;
    mainContentEl.textContent = gridStat.mainContent;

    headingContainer.append(headingImg, headingEl);
    gridEl.append(headingContainer, mainContentEl);
    container.append(gridEl);
  });

  return container;
}

function createCurrentForecastContainer() {
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
export {
  createCurrentForecastContainer,
  createCurrentForecastStats,
  createCurrentForecastGridStats,
};
