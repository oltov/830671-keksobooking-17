'use strict';

var housingTypes = ['palace', 'flat', 'house', 'bungalo'];
var locationPoints = function (min, max) {
  var point = Math.floor(min + Math.random() * (max + 1 - min));
  return point;
};

var makeAdvert = function() {
  var adverts = [];
  for (var i = 1; i < 9; i++) {
    adverts.push({
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
    });
  }
  return adverts;
};

var markers = makeAdvert();

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

// отключение элементов формы в неактивном состоянии страницы
var deactivateElementForm = function (element) {
  if (element.length > 1) {
    for (var i = 0; i < element.length; i++) {
      element[i].setAttribute('disabled', 'disabled');
    };
  } else {
    element[0].setAttribute('disabled', 'disabled');
  }
};

var activateElementForm = function (element) {
  if (element.length > 1) {
    for (var i = 0; i < element.length; i++) {
      element[i].removeAttribute('disabled', 'disabled');
    };
  } else {
    element[0].removeAttribute('disabled', 'disabled');
  }
};

var fieldsetHeaderForm = document.querySelectorAll('.ad-form-header');
var mapForm = document.querySelectorAll('.map__filter');
var elementsForm = document.querySelectorAll('.ad-form__element');
var mapPinMain = document.querySelector('.map__pin--main');
var inputForm = document.querySelector('.ad-form');
var map = document.querySelector('.map');

var removeClass = function (tag, classOut) {
  tag.classList.remove(classOut);
};
// функция с логикой активации страницы
var activationPage = function () {
  removeClass(map, 'map--faded');
  removeClass(inputForm, 'ad-form--disabled');
  activateElementForm(mapForm);
  activateElementForm(elementsForm);
};

deactivateElementForm(fieldsetHeaderForm);

deactivateElementForm(mapForm);

deactivateElementForm(elementsForm);

mapPinMain.addEventListener('click', function () {
  activationPage();
});
