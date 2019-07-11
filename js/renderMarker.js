'use strict';

(function () {
  var body = document.querySelector('body');
  var main = document.querySelector('main');
  var map = main.querySelector('.map');

  window.body = body;
  window.main = main;
  window.map = map;

  var pinListElement = window.map.querySelector('.map__pins');
  var fragment = document.createDocumentFragment();
  var pinPointTemplate = window.body.querySelector('#pin').content.querySelector('.map__pin');
  window.pinListElement = pinListElement;
  window.fragment = fragment;


  var renderMarker = function (pin) {
    var pinElement = pinPointTemplate.cloneNode(true);
    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.offer.type;
    pinElement.style = 'left: ' + pin.location.x + 'px;' + 'top: ' + pin.location.y + 'px';
    return pinElement;
  };

  var render = function (pin) {
    var takeNumber = pin.length > 5 ? 5 : pin.length;

    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderMarker(pin[i]));
    }
    pinListElement.appendChild(fragment);
  };
  window.render = render;

})();
