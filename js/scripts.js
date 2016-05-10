var search = document.querySelector(".search");
var search_form = document.querySelector(".search-form");
var link = document.querySelector(".login");
var popup = document.querySelector(".login-form");
var feedback_btn = document.querySelector(".feedback-button");
var feedback = document.querySelector(".popup-feedback");
var close = document.querySelector(".popup-close");
var overlay = document.querySelector(".popup-overlay");

link.addEventListener("mouseover", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

link.addEventListener("mouseout", function(event) {
  popup.classList.remove("modal-content-show");
});

search.addEventListener("mouseover", function(event) {
  event.preventDefault();
  search_form.classList.add("modal-content-show");
});

search.addEventListener("mouseout", function(event) {
  search_form.classList.remove("modal-content-show");
});

feedback_btn.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-content-show");
  feedback.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback.classList.contains("modal-content-show")) {
      feedback.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
    }
  }
});


ymaps.ready(init);

function init() {

  var myMap;

  myMap = new ymaps.Map("map", {
    center: [59.93938527151221, 30.329293370361276],
    zoom: 16,
    controls: []
  });

  myMap.behaviors.disable("scrollZoom");

  myMap.controls.add("zoomControl", {
    position: {
      top: 15,
      left: 15
    }
  });

  var myPlacemark = new ymaps.Placemark([59.93870117473946, 30.322978522415095], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/map-pin.svg",
    iconImageSize: [79, 139],
    iconImageOffset: [-40, -139]
  });

  myMap.geoObjects.add(myPlacemark);

}
