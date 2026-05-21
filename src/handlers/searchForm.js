import { getData } from "../data/weatherAPI.js";
import _ from "lodash";
import { renderCurrentWeatherStat } from "../ui/render.js";

async function initSearchForm() {
  const weatherData = await getData("Kochi");
  renderCurrentWeatherStat(
    weatherData.address,
    weatherData.days[0].temp,
    weatherData.days[0].conditions,
    weatherData.days[0].description,
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
        weatherData.days[0].description,
        weatherData.description,
      );
      document.querySelector(".search-bar__input").value = "";
    });
}

export { initSearchForm };
