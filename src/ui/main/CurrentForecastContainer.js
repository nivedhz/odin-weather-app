import locationImg from "../../assets/images/location-pin.svg";

function createSearchBar() {
  const container = document.createElement("div");
  container.classList.add("search-bar__container");
  const searchInput = document.createElement("input");
  searchInput.classList.add("search-bar__input");
  const locationImgEl = document.createElement("img");
  locationImgEl.src = locationImg;
  locationImgEl.classList.add("search-bar__location-img");

  searchInput.id = "search-input";

  container.append(locationImgEl, searchInput);
  return container;
}

export function createCurrentForecastContainer() {
  const container = document.createElement("div");
  container.classList.add("current-forecast__container");
  const searchContainer = createSearchBar();

  container.append(searchContainer);
  return container;
}
