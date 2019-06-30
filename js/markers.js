'use strict';

(function () {
  var body = document.querySelector('body');
  var main = document.querySelector('main');
  var map = main.querySelector('.map');

  window.body = body;
  window.main = main;
  window.map = map;

  var housingTypes = ['palace', 'flat', 'house', 'bungalo'];

  var pinListElement = map.querySelector('.map__pins');
  var pinPointTemplate = body.querySelector('#pin').content.querySelector('.map__pin');

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

  window.load(successPin);
})();
