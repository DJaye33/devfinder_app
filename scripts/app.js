const setDarkTheme = document.querySelector(".header__theme");
const headerHeading = document.querySelector(".header__heading");
const body = document.querySelector("body");
const setThemeLight = document.querySelector(".header__theme-light");
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");

setDarkTheme.addEventListener("click", (evt) => {
  evt.currentTarget.classList.add("header__theme--dark");
  headerHeading.classList.add("header__heading--dark");
  body.style.backgroundColor = "var(--very-dark-blue)";
  setThemeLight.classList.remove("header__theme-light--light");
  searchForm.classList.add("search--dark");
  searchInput.classList.add("search__input--dark");
});

setThemeLight.addEventListener("click", (evt) => {
  setDarkTheme.classList.remove("header__theme--dark");
  headerHeading.classList.remove("header__heading--dark");
  body.style.backgroundColor = "";
  setThemeLight.classList.add("header__theme-light--light");
  searchForm.classList.remove("search--dark");
  searchInput.classList.remove("search__input--dark");
});
