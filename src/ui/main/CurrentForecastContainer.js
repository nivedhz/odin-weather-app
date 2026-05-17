import locationImg from "../../assets/images/location-pin.svg";

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

export function createCurrentForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("current-forecast__container");
  const searchContainer = createSearchBar();

  container.append(searchContainer);
  return container;
}
