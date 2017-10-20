var modal = document.querySelector(".goods-popup");
var button = document.querySelector(".popup-button");
var overlay = document.querySelector(".goods-popup__overlay");


button.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("goods-popup__overlay--show");
  modal.classList.add("goods-popup--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();

  if (overlay.classList.contains("goods-popup__overlay--show")) {
    overlay.classList.remove("goods-popup__overlay--show");
  }

  if (modal.classList.contains("goods-popup--show")) {
    modal.classList.remove("goods-popup--show");
  }
});

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
