'use strict';

(function () {
  var POSITION_X_PIN_MAIN = 31;
  var POSITION_Y_PIN_MAIN = 62;
  var inputForm = window.main.querySelector('.ad-form');
  var inputAddress = inputForm.querySelector('#address');
  var mapPinMain = window.map.querySelector('.map__pin--main');
  var fieldsetHeaderForm = inputForm.querySelectorAll('.ad-form-header');
  var mapForm = window.map.querySelectorAll('.map__filter');
  var elementsForm = inputForm.querySelectorAll('.ad-form__element');

  window.fieldsetHeaderForm = fieldsetHeaderForm;
  window.mapForm = mapForm;
  window.elementsForm = elementsForm;
  window.inputForm = inputForm;
  window.inputAddress = inputAddress;
  window.mapPinMain = mapPinMain;

  // функция отключение элементов формы в неактивном состоянии страницы
  var deactivateElementForm = function (element) {
    for (var z = 0; z < element.length; z++) {
      element[z].setAttribute('disabled', 'disabled');
    }
  };
  window.deactivateElementForm = deactivateElementForm;

  // функция включения элементов формы в активном состоянии страницы
  var activateElementForm = function (element) {
    for (var z = 0; z < element.length; z++) {
      element[z].removeAttribute('disabled', 'disabled');
    }
  };
  window.activateElementForm = activateElementForm;

  var getСoordinatesForInput = function () {
    var inputXY = window.mapPinMain.getBoundingClientRect();
    inputAddress.placeholder = (inputXY.left + POSITION_X_PIN_MAIN) + ', ' + (inputXY.top + POSITION_Y_PIN_MAIN);
  };

  window.getСoordinatesForInput = getСoordinatesForInput;

  getСoordinatesForInput();

  deactivateElementForm(fieldsetHeaderForm);

  deactivateElementForm(mapForm);

  deactivateElementForm(elementsForm);
})();
