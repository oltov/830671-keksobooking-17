'use strict';

(function () {
  var form = window.main.querySelector('.ad-form');
  var roomNumber = form.querySelector('#room_number');
  var roomCapacity = form.querySelector('#capacity');
  var buttonSubmit = form.querySelector('.ad-form__submit');

  var checkCapacity = function () {
    if (roomNumber.value === '1') {
      if (roomCapacity.value !== '1') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1');
      } else {
        roomCapacity.setCustomValidity('');
        return true;
      }
    }

    if (roomNumber.value === '2') {
      if (roomCapacity.value !== '2' && roomCapacity.value !== '1') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1 или 2');
      } else {
        roomCapacity.setCustomValidity('');
        return true;
      }
    }

    if (roomNumber.value === '3') {
      if (roomCapacity.value !== '3' && roomCapacity.value !== '2' && roomCapacity.value !== '1') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1, 2 или 3');
      } else {
        roomCapacity.setCustomValidity('');
        return true;
      }
    }

    if (roomNumber.value === '100') {
      if (roomCapacity.value !== '0') {
        roomCapacity.setCustomValidity('В 100 комнатах жить нельзя');
      } else {
        roomCapacity.setCustomValidity('');
        return true;
      }
    }
    return false;
  };

  buttonSubmit.addEventListener('click', function (evt) {
    if (checkCapacity()) {
      window.requestMethod.save(new FormData(form), window.onError);
      // zxc();
      evt.preventDefault();
    }
  });
})();
