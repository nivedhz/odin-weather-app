import { initDefaultFunctions } from "./handlers/searchForm.js";
import "./styles/index.css";
import { createMainContainer } from "./ui/main/WeatherContainer.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
  },
};

DOM.container.main.append(createMainContainer());
initDefaultFunctions();
