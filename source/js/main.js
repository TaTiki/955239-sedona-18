document.documentElement.classList.remove("no-js");
var navMain = document.querySelector(".main-menu");
var menuButton = document.querySelector(".burger-button");
var menuClose = document.querySelector(".main-menu__close-button");

menuButton.addEventListener("click", function () {
  navMain.classList.add("main-menu--opened");
  menuButton.classList.add("burger-button--opened");
});

menuClose.addEventListener("click", function () {
  navMain.classList.remove("main-menu--opened");
  menuButton.classList.remove("burger-button--opened");
});
