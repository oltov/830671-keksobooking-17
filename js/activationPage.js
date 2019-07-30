'use strict';

(function () {
  var WIDTH_PIN_MAIN = 65;
  var startCoords = {
    x: 0,
    y: 0
  };

  var Pos = {
    ZERO: 0,
    MIN: 130,
    MAX: 630
  };
  var removeClass = function (tag, classOut) {
    tag.classList.remove(classOut);
  };

  var addClass = function (tag, classOut) {
    tag.classList.add(classOut);
  };

  // функция с логикой активации страницы
  var activationPage = function () {
    if (window.map.classList.contains('map--faded')) {
      window.render(window.markers);
    }
    removeClass(window.map, 'map--faded');
    removeClass(window.inputForm, 'ad-form--disabled');
    window.activateElementForm(window.mapForm);
    window.activateElementForm(window.elementsForm);
    window.activateElementForm(window.fieldsetHeaderForm);
  };

  var deactivationPage = function () {
    window.resetFormAll();
    window.deletePins();
    window.resetMapPinMain();
    window.getСoordinatesForInput();
    addClass(window.map, 'map--faded');
    addClass(window.inputForm, 'ad-form--disabled');
    window.deactivateElementForm(window.fieldsetHeaderForm);
    window.deactivateElementForm(window.mapForm);
    window.deactivateElementForm(window.elementsForm);
    window.resetImg();
    if (window.popup) {
      window.closePopup();
    }
  };

  window.deactivationPage = deactivationPage;

  window.mapPinMain.addEventListener('mouseup', window.getСoordinatesForInput);

  window.mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    window.mapPinMain.style.position = 'absolute';
    activationPage();
    startCoords.x = evt.clientX;
    startCoords.y = evt.clientY;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    window.getСoordinatesForInput();

    var coordTop = function (posTop) {
      posTop = posTop.offsetTop;
      if (posTop < Pos.MIN) {
        posTop = Pos.MIN;
      }
      if (posTop > Pos.MAX) {
        posTop = Pos.MAX;
      }
      return posTop;
    };

    var posCoords = window.map.getBoundingClientRect();

    var coordLeft = function (posLeft) {
      posLeft = posLeft.offsetLeft;
      if (posLeft <= Pos.ZERO) {
        posLeft = Pos.ZERO;
      }
      if (posLeft > posCoords.width - WIDTH_PIN_MAIN) {
        posLeft = posCoords.width - WIDTH_PIN_MAIN;
      }
      return posLeft;
    };

    window.mapPinMain.style.top = (coordTop(window.mapPinMain) - shift.y) + 'px';
    window.mapPinMain.style.left = (coordLeft(window.mapPinMain) - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

})();
