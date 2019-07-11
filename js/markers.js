'use strict';

(function () {
  var markers = [];
  var messageErrorTemplate = window.body.querySelector('#error').content.querySelector('.error');
  var selectHousingType = window.main.querySelector('#housing-type');
  var typeHousing;
  var elementError = messageErrorTemplate.cloneNode(true);

  var makeFilter = function () {
    var filterHousingType = markers.filter(function (it) {
      return it.offer.type === typeHousing;
    });

    var qwe = window.pinListElement.querySelectorAll('.map__pin');
    for (var z = 1; z < qwe.length; z++) {
      window.pinListElement.removeChild(qwe[z]);
      console.log(qwe);
    };

    window.render(filterHousingType);
  };

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

  selectHousingType.addEventListener('change', function () {

    for (var i = 0; i < selectHousingType.options.length; i++) {
      var option = selectHousingType[i];
      if (option.selected) {
        typeHousing = option.value;
        makeFilter();
      }
    }
  });

  var successPin = function (pin) {
    markers = pin;
    window.render(pin);
  };

  window.load(successPin, onError);

})();
