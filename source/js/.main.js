document.documentElement.classLIst.remove("no-js");
var navMain = document.querySelector(".main-menu");
var menuButton = document.querySelector(".burger-button");

navMain.classList.remove("main-menu--opened");

menuButton.addEventListener("click", function () {
navMain.classList.toggle("main-menu--opened");
menuButton.classLIst.toggle("main-menu--close-button");
});
