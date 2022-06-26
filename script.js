const showMenu = document.querySelector("#menu-svg-icon");
const menuPage = document.querySelector("#menu-page");
const hideMenu = document.querySelector("#exit-icon-svg");
const makeTransparent = document.querySelector("#menu-svg-icon");
const showHeader = document.querySelector('#menu-header');

showMenu.addEventListener("click", function () {
        menuPage.classList.add("active");
        makeTransparent.classList.add("active");
      });      
      
hideMenu.addEventListener("click", function () {
        menuPage.classList.remove("active");
        makeTransparent.classList.remove("active");
      });