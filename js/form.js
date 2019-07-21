'use strict';

(function () {
  var form = window.main.querySelector('.ad-form');
  var roomNumber = form.querySelector('#room_number');
  var roomCapacity = form.querySelector('#capacity');
  var buttonSubmit = form.querySelector('.ad-form__submit');

  var checkCapacity = function () {
    window.console.log(roomNumber.value);
    window.console.log(roomCapacity.value);

    if (roomNumber.value === '1') {
      if (roomCapacity.value !== '1') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1');
        window.console.log(roomNumber.value);
      } else {
        roomCapacity.setCustomValidity('');
      }
    }

    if (roomNumber.value === '2') {
      if (roomCapacity.value !== '2' && roomCapacity.value !== '1') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1 или 2');
      } else {
        roomCapacity.setCustomValidity('');
      }
    }

    if (roomNumber.value === '3') {
      if (roomCapacity.value !== '3' && roomCapacity.value !== '2' && roomCapacity.value !== '1') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1, 2 или 3');
      } else {
        roomCapacity.setCustomValidity('');
      }
    }

    if (roomNumber.value === '100') {
      if (roomCapacity.value !== '0') {
        roomCapacity.setCustomValidity('В 100 комнатах живут только призраки');
      } else {
        roomCapacity.setCustomValidity('');
      }
    }

  };

  buttonSubmit.addEventListener('click', function () {

    checkCapacity();
  });

})();
