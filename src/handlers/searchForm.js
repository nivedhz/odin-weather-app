import { getData } from "../data/weatherAPI.js";
import _ from "lodash";
import {
  renderCurrentWeatherGrid,
  renderCurrentWeatherStat,
} from "../ui/render.js";

async function initDefaultFunctions() {
  const weatherData = await getData("Kochi");
  renderCurrentWeatherStat(
    weatherData.address,
    weatherData.days[0].temp,
    weatherData.days[0].conditions,
    weatherData.days[0].description,
  );
  renderCurrentWeatherGrid(
    weatherData.days[0].feelslike,
    weatherData.days[0].humidity,
    weatherData.days[0].uvindex,
    weatherData.days[0].visibility,
  );
  document
    .querySelector(".search-bar__form-container")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(
        document.querySelector(".search-bar__form-container"),
      );
      const data = Object.fromEntries(formData.entries());
      const weatherData = await getData(_.capitalize(data.searchInput));
      renderCurrentWeatherStat(
        weatherData.address,
        weatherData.days[0].temp,
        weatherData.days[0].conditions,
        weatherData.days[0].description,
      );
      renderCurrentWeatherGrid(
        weatherData.days[0].feelslike,
        weatherData.days[0].humidity,
        weatherData.days[0].uvindex,
        weatherData.days[0].visibility,
      );
      document.querySelector(".search-bar__input").value = "";
    });
}

export { initDefaultFunctions };
