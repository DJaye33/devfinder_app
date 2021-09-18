const setDarkTheme = document.querySelector(".header__theme");
const headerHeading = document.querySelector(".header__heading");
const body = document.querySelector("body");
const setThemeLight = document.querySelector(".header__theme-light");
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");
const sectionInfo = document.querySelector(".info");
const infoUsername = document.querySelector(".info__username");
const infoJoined = document.querySelector(".info__joined");
const infoText = document.querySelector(".info__text");
const infoStats = document.querySelector(".info__stats");
const infoTitles = document.querySelectorAll(".info__titles");
const infoResults = document.querySelectorAll(".info__results");
const infoIcons = document.querySelectorAll(".info__icon");
const infoLinks = document.querySelectorAll(".info__links");
const avatar = document.querySelector(".info__avatar");
const userHandle = document.querySelector(".info__user-handle");

let isDarkTheme = false;
console.log(avatar);

console.log(new Date("2011-01-25T18:44:36Z").toDateString());

// add/remove dark theme user stats section
const statsDarkTheme = (elements, infoClass) => {
  if (isDarkTheme) {
    elements.forEach((element) => {
      element.classList.add(`info__${infoClass}--dark`);
    });
  } else {
    elements.forEach((element) => {
      element.classList.remove(`info__${infoClass}--dark`);
    });
  }
};

// Returns fetch results for header of summary section
const retrieveUserInfo = (info) => {
  avatar.setAttribute(`src`, `${info.avatar_url}`);
  infoUsername.textContent = `${info.name}`;
  userHandle.setAttribute(`href`, `${info.html_url}`);
  userHandle.textContent = `@${info.login}`;

  infoJoined.textContent = `Joined ${new Date(
    `${info.created_at}`
  ).toDateString()}`;
};

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const API = `https://api.github.com/users/${searchInput.value}`;

  fetch(API, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      retrieveUserInfo(data);
    });
});

setDarkTheme.addEventListener("click", (evt) => {
  isDarkTheme = !isDarkTheme;
  evt.currentTarget.classList.add("header__theme--dark");
  headerHeading.classList.add("header__heading--dark");
  body.style.backgroundColor = "var(--very-dark-blue)";
  setThemeLight.classList.remove("header__theme-light--light");
  searchForm.classList.add("search--dark");
  searchInput.classList.add("search__input--dark");
  sectionInfo.classList.add("info--dark");
  infoUsername.classList.add("info__username--dark");
  infoJoined.classList.add("info__joined--dark");
  infoText.classList.add("info__text--dark");
  infoStats.classList.add("info__stats--dark");

  statsDarkTheme(infoTitles, "titles");
  statsDarkTheme(infoResults, "results");
  statsDarkTheme(infoLinks, "links");
  statsDarkTheme(infoIcons, "icon");
});

setThemeLight.addEventListener("click", (evt) => {
  isDarkTheme = !isDarkTheme;
  setDarkTheme.classList.remove("header__theme--dark");
  headerHeading.classList.remove("header__heading--dark");
  body.style.backgroundColor = "";
  setThemeLight.classList.add("header__theme-light--light");
  searchForm.classList.remove("search--dark");
  searchInput.classList.remove("search__input--dark");
  sectionInfo.classList.remove("info--dark");
  infoUsername.classList.remove("info__username--dark");
  infoJoined.classList.remove("info__joined--dark");
  infoText.classList.remove("info__text--dark");
  infoStats.classList.remove("info__stats--dark");

  statsDarkTheme(infoTitles, "titles");
  statsDarkTheme(infoResults, "results");
  statsDarkTheme(infoLinks, "links");
  statsDarkTheme(infoIcons, "icon");
});
