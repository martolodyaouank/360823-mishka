
var button = document.querySelector(".page-header__button");
var menu = document.querySelector(".page-header__navigation");

menu.classList.remove("page-header__navigation--no-js");

button.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("page-header__navigation--closed")) {
    menu.classList.add("page-header__navigation--opened");
    menu.classList.remove("page-header__navigation--closed");
  }
  else {
    menu.classList.add("page-header__navigation--closed");
    menu.classList.remove("page-header__navigation--opened");
  }
});
