'use strict';

(function () {
  var Cost = {
    low: 10000,
    high: 50000
  };
  var TIMEOUT = 500;
  var selectHousingType = window.main.querySelector('#housing-type');
  var selectCost = window.main.querySelector('#housing-price');
  var selectRooms = window.main.querySelector('#housing-rooms');
  var selectGuests = window.main.querySelector('#housing-guests');
  var selectCheckbox = window.formMapFilters.querySelector('#housing-features');

  var transformingCost = function (cost) {
    switch (true) {
      case cost < Cost.low:
        return 'low';
      case cost > Cost.high:
        return 'high';
      default:
        return 'middle';
    }
  };

  var filteringHouseType = function (select, option) {
    return function (arr) {
      return select.value !== 'any' ? arr.offer[option].toString() === select.value : true;
    };
  };

  var filteringCost = function (arr) {
    var z = transformingCost(arr.offer.price);
    return selectCost.value !== 'any' ? selectCost.value === z : true;
  };

  var filterFeatures = function (arr) {
    var check = selectCheckbox.querySelectorAll(':checked');
    return Array.from(check).every(function (input) {
      return arr.offer.features.indexOf(input.value) !== -1;
    });
  };

  var filteringSelectInput = function () {
    var filters = window.markers.slice();
    filters = filters.filter(filterFeatures);
    filters = filters.filter(filteringCost);
    filters = filters.filter(filteringHouseType(selectHousingType, 'type'));
    filters = filters.filter(filteringHouseType(selectRooms, 'rooms'));
    filters = filters.filter(filteringHouseType(selectGuests, 'guests'));

    window.deletePins();
    window.render(filters);
  };

  window.formMapFilters.addEventListener('change', function () {
    if (window.popup) {
      window.closePopup();
    }
    debounce(filteringSelectInput);
  });

  var debounce = function (arr) {
    var lastTimeout;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      arr();
    }, TIMEOUT);
  };

})();
