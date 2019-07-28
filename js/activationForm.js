'use strict';

(function () {
  var body = document.querySelector('body');
  var main = body.querySelector('main');
  var map = main.querySelector('.map');
  window.map = map;
  window.body = body;
  window.main = main;

  var PIN_MAIN_X = 570;
  var PIN_MAIN_Y = 375;

  var POSITION_X_PIN_MAIN = 31;
  var POSITION_Y_PIN_MAIN = 84;
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

  var resetMapPinMain = function () {
    mapPinMain.style = 'left: ' + PIN_MAIN_X + 'px;' + 'top: ' + PIN_MAIN_Y + 'px';
  };
  window.resetMapPinMain = resetMapPinMain;

  // функция отключение элементов формы в неактивном состоянии страницы
  var deactivateElementForm = function (element) {
    for (var z = 0; z < element.length; z++) {
      element[z].setAttribute('disabled', 'disabled');
    }
  };
  window.deactivateElementForm = deactivateElementForm;

  // работа с фильтрами
  var resetFormAll = function () {
    window.form.reset();
    window.formMapFilters.reset();
  };
  window.resetFormAll = resetFormAll;

  // функция включения элементов формы в активном состоянии страницы
  var activateElementForm = function (element) {
    for (var z = 0; z < element.length; z++) {
      element[z].removeAttribute('disabled', 'disabled');
    }
  };
  window.activateElementForm = activateElementForm;

  var getСoordinatesForInput = function () {
    var x = window.mapPinMain.offsetLeft;
    var y = window.mapPinMain.offsetTop;

    inputAddress.value = (x + POSITION_X_PIN_MAIN) + ', ' + (y + POSITION_Y_PIN_MAIN);
  };

  window.getСoordinatesForInput = getСoordinatesForInput;

  getСoordinatesForInput();

  deactivateElementForm(fieldsetHeaderForm);

  deactivateElementForm(mapForm);

  deactivateElementForm(elementsForm);
})();
