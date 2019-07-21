'use strict';

(function () {
  var form = window.main.querySelector('.ad-form');
  var roomNumber = form.querySelector('#room_number');
  var roomCapacity = form.querySelector('#capacity');
  var buttonSubmit = form.querySelector('.ad-form__submit');
  var title = form.querySelector('#title');


  var checkCapacity = function (evt) {
    window.console.log(roomNumber.value);
    window.console.log(roomCapacity.value);

    if (roomNumber.value === '1') {
      if (roomCapacity.value !== '1') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1');
        window.console.log(roomNumber.value);
        // evt.preventDefault();
      } else {roomCapacity.setCustomValidity('')};
    };
    if (roomNumber.value === '2') {
      if (roomCapacity.value !== '1' && '2') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1 или 2');
        window.console.log(roomNumber.value);
        // evt.preventDefault();
      } else {roomCapacity.setCustomValidity('')};
    };
    if (roomNumber.value === '3') {
      if (roomCapacity.value !== '1' && '2' && '3') {
        roomCapacity.setCustomValidity('Выберете колличество гостей 1, 2 или 3');
        window.console.log(roomNumber.value);
        // evt.preventDefault();
      } else {roomCapacity.setCustomValidity('')};
    };
    if (roomNumber.value === '100') {
      if (roomCapacity.value !== '0') {
        roomCapacity.setCustomValidity('В 100 комнатах живут только призраки');
        window.console.log(roomNumber.value);
        // evt.preventDefault();
      } else {roomCapacity.setCustomValidity('')};
    };

  };

  buttonSubmit.addEventListener('click', function (evt) {
    // evt.preventDefault();
    // window.console.log(roomCapacity);

    checkCapacity(evt);
  });

})();
