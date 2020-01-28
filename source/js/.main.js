document.documentElement.classLIst.remove("no-js");
var navMain = document.querySelector(".main-menu");
var menuButton = document.querySelector(".burger-button");


      menuButton.addEventListener("click", function () {
      navMain.toggle("main-menu--opened");
       menuButton.toggle("main-menu--close-button");
      });
