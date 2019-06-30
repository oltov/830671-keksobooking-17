'use strict';

(function () {
  var body = document.querySelector('body');
  var main = document.querySelector('main');
  var map = main.querySelector('.map');

  window.body = body;
  window.main = main;
  window.map = map;

  var pinListElement = map.querySelector('.map__pins');
  var pinPointTemplate = body.querySelector('#pin').content.querySelector('.map__pin');
  var messageErrorTemplate = body.querySelector('#error').content.querySelector('.error');

  var elementError = messageErrorTemplate.cloneNode(true);

  var onError = function (message) {
    main.insertAdjacentElement('afterbegin', elementError);
    var errorMessage = main.querySelector('.error__message');
    var buttonError = main.querySelector('.error__button');
    errorMessage.textContent = message;
    // временное решение, эксперементировал, в задании написано просто показать шаблон
    buttonError.textContent = 'Перезагрузите страницу';
    buttonError.addEventListener('click', function () {
      window.location.reload();
    });
  };

  var renderMarker = function (pin) {
    var pinElement = pinPointTemplate.cloneNode(true);
    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.offer.type;
    pinElement.style = 'left: ' + pin.location.x + 'px;' + 'top: ' + pin.location.y + 'px';
    return pinElement;
  };

  var fragment = document.createDocumentFragment();

  var successPin = function (pin) {
    for (var i = 0; i < 8; i++) {
      fragment.appendChild(renderMarker(pin[i]));
    }
    pinListElement.appendChild(fragment);
  };
  window.successPin = successPin;

  window.load(successPin, onError);

})();
