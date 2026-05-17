import "../../styles/weather-container.css";
import { createCurrentForecastContainer } from "./CurrentForecastContainer.js";
import { createUpcomingForecastContainer } from "./UpcomingForecastContainer.js";

export function createMainContainer() {
  const mainContainer = document.createElement("div");
  const currentForecastContainer = createCurrentForecastContainer();
  const upcomingForecastContainer = createUpcomingForecastContainer();

  mainContainer.classList.add("main-container");

  mainContainer.append(currentForecastContainer, upcomingForecastContainer);
  return mainContainer;
}
