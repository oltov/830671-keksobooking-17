'use strict';
(function () {

  window.load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/keksobooking/data';

    window.request(onLoad, onError, 'GET', URL);

  };
})();
