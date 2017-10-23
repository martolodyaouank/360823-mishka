//меню
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

//поп-ап
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".goods-popup");
var goodsPopularButton = document.querySelector(".goods-popular__button");
var productsButton = document.querySelectorAll(".products__button");


if (overlay) {
  for (var i = 0; i < productsButton.length; i++) productsButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay--show");
    modal.classList.add("goods-popup--show");

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {

        if (overlay.classList.contains("overlay--show")) {
          overlay.classList.remove("overlay--show");
        }

        if (modal.classList.contains("goods-popup--show")) {
          modal.classList.remove("goods-popup--show");
        }
      }
    });
  });

  overlay.addEventListener("click", function() {
    overlay.classList.remove("overlay--show");
    modal.classList.remove("goods-popup--show");
  });

  goodsPopularButton.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay--show");
    modal.classList.add("goods-popup--show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {

    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
    }

    if (modal.classList.contains("goods-popup--show")) {
      modal.classList.remove("goods-popup--show");
    }
  }
});
