'use strict';

(function () {
  var WIDTH_PIN_MAIN = 65;
  var removeClass = function (tag, classOut) {
    tag.classList.remove(classOut);
  };

  // функция с логикой активации страницы
  var activationPage = function () {
    removeClass(window.map, 'map--faded');
    removeClass(window.inputForm, 'ad-form--disabled');
    window.activateElementForm(window.mapForm);
    window.activateElementForm(window.elementsForm);
    window.activateElementForm(window.fieldsetHeaderForm);
  };

  window.mapPinMain.addEventListener('mouseup', window.getСoordinatesForInput);

  window.mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    window.mapPinMain.style.position = 'absolute';
    activationPage();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

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
        if (posTop < 130) {
          posTop = 130;
        }
        if (posTop > 630) {
          posTop = 630;
        }
        return posTop;
      };

      var posCoords = window.map.getBoundingClientRect();

      var coordLeft = function (posLeft) {
        posLeft = posLeft.offsetLeft;
        if (posLeft <= 0) {
          posLeft = 0;
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

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
