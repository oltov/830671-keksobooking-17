'use strict';

(function () {
  var request = function (onLoad, type, URL, data) {
    var XHR = new XMLHttpRequest();
    XHR.timeout = 10000;
    XHR.responseType = 'json';
    XHR.open(type, URL);
    XHR.send(data);
    return XHR;
  });
  window.request = request;
})();
