'use strict';

var housingTypes = ['palace', 'flat', 'house', 'bungalo'];
var locationPoints = function (min, max) {
  var point = Math.floor(min + Math.random() * (max + 1 - min));
  return point;
};

var makeAdvert = function () {
  var adverts = [];
  for (var i = 1; i < 9; i++) {
    adverts[i - 1] = {
      'autor': {
        'avatar': 'img/avatars/user0' + i + '.png'
      },
      'offer': {
        'type': housingTypes[Math.floor(Math.random() * housingTypes.length)]
      },
      'location': {
        'x': locationPoints(40, 1160),
        'y': locationPoints(130, 630)
      }
    };
  }
  return adverts;
};

var markers = makeAdvert();

document.querySelector('.map').classList.remove('map--faded');

var pinListElement = document.querySelector('.map__pins');
var pinPointTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var renderMarker = function (pin) {
  var pinElement = pinPointTemplate.cloneNode(true);
  pinElement.querySelector('img').src = pin.autor.avatar;
  pinElement.querySelector('img').alt = pin.offer.type;
  pinElement.style = 'left: ' + pin.location.x + 'px;' + 'top: ' + pin.location.y + 'px';
  return pinElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < markers.length; i++) {
  fragment.appendChild(renderMarker(markers[i]));
}
pinListElement.appendChild(fragment);
