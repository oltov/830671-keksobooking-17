'use strict';

(function () {
  var form = window.main.querySelector('.ad-form');
  var formMapFilters = window.map.querySelector('.map__filters');
  var roomNumber = form.querySelector('#room_number');
  var roomCapacity = form.querySelector('#capacity');
  var buttonSubmit = form.querySelector('.ad-form__submit');
  window.form = form;
  window.formMapFilters = formMapFilters;
  var messageSuccessTemplate = window.body.querySelector('#success').content.querySelector('.success');
  var elemantSuccessMassage = messageSuccessTemplate.cloneNode(true);
  var selectType = form.querySelector('#type');
  var selectCost = form.querySelector('#price');
  var selectTimeIn = form.querySelector('#timein');
  var selectTimeOut = form.querySelector('#timeout');
  var optionsTimeIn = selectTimeIn.querySelectorAll('option');
  var optionsTimeOut = selectTimeOut.querySelectorAll('option');

  var selectMinCost = function (type) {
    switch (true) {
      case type === 'bungalo':
        selectCost.placeholder = 0;
        selectCost.min = '0';
        break;
      case type === 'flat':
        selectCost.placeholder = 1000;
        selectCost.min = '1000';
        break;
      case type === 'house':
        selectCost.placeholder = 5000;
        selectCost.min = '5000';
        break;
      case type === 'palace':
        selectCost.placeholder = 10000;
        selectCost.min = '10000';
    }
  };

  var selectTimeInterval = function (time, option) {
    for (var i = 0; i < option.length; i++) {
      if (time === option[i].value) {
        option[i].selected = true;
      }
    }
  };
  selectType.addEventListener('change', function (evt) {
    selectMinCost(evt.target.value);
  });

  selectTimeIn.addEventListener('change', function (evt) {
    selectTimeInterval(evt.target.value, optionsTimeOut);
  });

  selectTimeOut.addEventListener('change', function (evt) {
    selectTimeInterval(evt.target.value, optionsTimeIn);
  });

  var onSuccess = function () {
    window.main.insertAdjacentElement('afterbegin', elemantSuccessMassage);
    document.addEventListener('click', removeSucceessMassage);
    document.addEventListener('keydown', removeSucceessMassage);
  };
  window.onSuccess = onSuccess;

  var removeSucceessMassage = function (evt) {
    if (evt.type === 'click' || evt.keyCode === window.ESC_KEYCODE) {
      var qwe = window.main.querySelector('.success');
      qwe.remove();
    }
    document.removeEventListener('click', removeSucceessMassage);
    document.removeEventListener('keydown', removeSucceessMassage);
  };

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
      evt.preventDefault();
    }
  });
})();
