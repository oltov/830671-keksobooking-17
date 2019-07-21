'use strict';

(function () {

  var URL_GET = 'https://js.dump.academy/keksobooking/data';
  var URL_POST = 'https://js.dump.academy/keksobooking';
  var request = function (onLoad, onError) {
    var XHR = new XMLHttpRequest();
    XHR.timeout = 10000;
    XHR.responseType = 'json';

    XHR.addEventListener('load', function () {
      if (XHR.status === 200) {
        onLoad(XHR.response);
      } else {
        onError('Статус ответа: ' + XHR.status + ' ' + XHR.statusText);
      }
    });

    XHR.addEventListener('load', function () {
      if (XHR.status === 400) {
        onError('Статус ответа: ' + XHR.status + ' ' + XHR.statusText);
      }
    });

    XHR.addEventListener('load', function () {
      if (XHR.status === 500) {
        onError('Статус ответа: ' + XHR.status + ' ' + XHR.statusText);
      }
    });

    XHR.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    XHR.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + XHR.timeout + 'мс');
    });

    return XHR;
  };

  var requestMethod = {
    load: function (onLoad, onError, data) {
      var xhr = request(onLoad, onError);
      xhr.open('GET', URL_GET);
      xhr.send(data);
    },
    save: function (data, onError, onLoad) {
      var xhr = request(onLoad, onError);
      xhr.open('POST', URL_POST);
      xhr.send(data);
    }
  };
  window.requestMethod = requestMethod;

})();
