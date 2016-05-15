var search_button = document.querySelector(".button-search");
var search = document.querySelector(".search");
var search_form = document.querySelector(".search-form");

var cart_page = document.querySelector(".cart-button");
var cart_button = document.querySelector(".cart-with-item");
var cart_block = document.querySelector(".cart-block");

var login_button = document.querySelector(".login-button");
var link = document.querySelector(".login");
var popup = document.querySelector(".login-form");
var authorization = document.querySelector(".authorization-form");

var feedback_btn = document.querySelector(".feedback-button");
var feedback = document.querySelector(".popup-feedback");

if (feedback_name) {
  var feedback_name = feedback.querySelector("[name=feedback-name]");
}

var close = document.querySelector(".popup-close");
var overlay = document.querySelector(".popup-overlay");

var search_field = search_form.querySelector("[name=search]");

var login_field = authorization.querySelector("[name=email]");
var pass = authorization.querySelector("[name=password]");

// var storage = localStorage.getItem("login_field");

link.addEventListener("mouseover", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

//   if (storage) {
//     login_field.value = storage;
//     pass.focus();
//   } else {
//     login_field.focus();
//   }
//
});

login_button.addEventListener("click", function(event) {
    event.preventDefault();
});

cart_page.addEventListener("click", function(event) {
    event.preventDefault();
});

search_button.addEventListener("click", function(event) {
    event.preventDefault();
});

if (cart_button) {
  cart_button.addEventListener("mouseover", function(event) {
    event.preventDefault();
    cart_block.classList.add("modal-content-show");
  })
};

if (cart_button) {
  cart_button.addEventListener("mouseout", function(event) {
    popup.classList.remove("modal-content-show");
    cart_block.classList.remove("modal-content-show");
  })
};


link.addEventListener("mouseout", function(event) {
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

search.addEventListener("mouseover", function(event) {
  event.preventDefault();
  search_form.classList.add("modal-content-show");
  search_field.focus();
});

search.addEventListener("mouseout", function(event) {
  search_form.classList.remove("modal-content-show");
});

if (feedback_btn) {
  feedback_btn.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-content-show");
    feedback.classList.add("feedback-content-show");
    if (feedback_name) {
      feedback_name.focus();
    }
  })
};

if (feedback) {
  close.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("feedback-content-show");
    overlay.classList.remove("modal-content-show");
  })
};

if (feedback) {
  close.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("feedback-content-show");
    overlay.classList.remove("modal-content-show");
  });
}

if (feedback) {
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("feedback-content-show");
    overlay.classList.remove("modal-content-show");
  })
};

if (feedback) {
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (feedback.classList.contains("feedback-content-show")) {
        feedback.classList.remove("feedback-content-show");
        overlay.classList.remove("modal-content-show");
      }
    }
  })
};

authorization.addEventListener("submit", function(event) {
  if (!login_field.value || !pass.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
   else {
    localStorage.setItem("login", login_field.value);
  }
});

if (feedback) {
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
}
