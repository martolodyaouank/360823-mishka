var overlay = document.querySelector(".goods-popup__overlay");
var modal = document.querySelector(".goods-popup");
var goodsPopularButton = document.querySelector(".goods-popular__button");
var productsButton = document.querySelectorAll(".products__button");


if (overlay) {
  for (var i = 0; i < productsButton.length; i++) productsButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("goods-popup__overlay--show");
    modal.classList.add("goods-popup--show");

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {

        if (overlay.classList.contains("goods-popup__overlay--show")) {
          overlay.classList.remove("goods-popup__overlay--show");
        }

        if (modal.classList.contains("goods-popup--show")) {
          modal.classList.remove("goods-popup--show");
        }
      }
    });
  });

  overlay.addEventListener("click", function() {
    overlay.classList.remove("goods-popup__overlay--show");
    modal.classList.remove("goods-popup--show");
  });

  goodsPopularButton.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("goods-popup__overlay--show");
    modal.classList.add("goods-popup--show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {

    if (overlay.classList.contains("goods-popup__overlay--show")) {
      overlay.classList.remove("goods-popup__overlay--show");
    }

    if (modal.classList.contains("goods-popup--show")) {
      modal.classList.remove("goods-popup--show");
    }
  }
});
