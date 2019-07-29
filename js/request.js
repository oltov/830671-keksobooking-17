'use strict';

(function () {
  var Code = {
    SUCCESS: 200,
    NOT_FOUND_ERROR: 400,
    SERVER_ERROR: 500
  };
  var TIMIOUT_LOAD = 10000;
  var URL_GET = 'https://js.dump.academy/keksobooking/data';
  var URL_POST = 'https://js.dump.academy/keksobooking';
  var request = function (onLoad, onError) {
    var XHR = new XMLHttpRequest();
    XHR.timeout = TIMIOUT_LOAD;
    XHR.responseType = 'json';

    XHR.addEventListener('load', function () {
      if (XHR.status === Code.NOT_FOUND_ERROR) {
        onError('Статус ответа: ' + XHR.status + ' ' + XHR.statusText);
      }
    });

    XHR.addEventListener('load', function () {
      if (XHR.status === Code.SERVER_ERROR) {
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
      xhr.addEventListener('load', function () {
        if (xhr.status === Code.SUCCESS) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
    },
    save: function (data, onError) {
      var xhr = request(onError);
      xhr.open('POST', URL_POST);
      xhr.send(data);
      xhr.addEventListener('load', function () {
        if (xhr.status === Code.SUCCESS) {
          window.deactivationPage();
          window.onSuccess();
        }
      });
    }
  };
  window.requestMethod = requestMethod;

})();
