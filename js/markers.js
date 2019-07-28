'use strict';

(function () {

  var markers = [];
  var messageErrorTemplate = window.body.querySelector('#error').content.querySelector('.error');
  var elementError = messageErrorTemplate.cloneNode(true);
  var popup;
  var BUTTON = 'button';
  var buttonCloseMap;
  var ESC_KEYCODE = 27;
  window.ESC_KEYCODE = ESC_KEYCODE;
  window.popup = popup;

  var deletePins = function () {
    var pinsInHtml = window.pinListElement.querySelectorAll('.map__pin');
    for (var z = 0; z < pinsInHtml.length; z++) {
      if (pinsInHtml[z].type === 'button') {
        window.pinListElement.removeChild(pinsInHtml[z]);
      }
    }
  };
  window.deletePins = deletePins;

  var onError = function (message) {
    window.main.insertAdjacentElement('afterbegin', elementError);
    var errorMessage = window.main.querySelector('.error__message');
    var buttonError = window.main.querySelector('.error__button');
    errorMessage.textContent = message;

    // временное решение, эксперементировал, в задании написано просто показать шаблон

    buttonError.textContent = 'Перезагрузите страницу';
    buttonError.addEventListener('click', function () {
      window.location.reload();
    });
  };

  window.onError = onError;

  var successPin = function (pin) {
    markers = pin;
    window.markers = pin;
  };
  window.successPin = successPin;

  window.requestMethod.load(successPin, onError);

  var closePopup = function () {
    window.map.removeChild(window.popup);
    window.popup = null;
  };
  window.closePopup = closePopup;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function (evt) {
    for (var i = 0; i < markers.length; i++) {
      if (evt.target.attributes[0].value === markers[i].author.avatar && evt.target.alt === markers[i].offer.type) {
        window.fragmentPopup.appendChild(window.renderPopup(markers[i]));
        window.map.insertBefore(window.fragmentPopup, window.filterElement);
        window.popup = window.map.querySelector('.map__card');
        buttonCloseMap = window.map.querySelector('.popup__close');
      }
    }
  };

  window.map.addEventListener('click', function (evt) {
    if (evt.target.parentElement.type === BUTTON) {
      if (window.popup) {
        closePopup();
      }
      openPopup(evt);
      buttonCloseMap.addEventListener('click', closePopup);
      document.addEventListener('keydown', onPopupEscPress);
    }
  });

})();
