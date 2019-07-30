'use strict';

(function () {
  var DEFAULT_IMG = 'img/muffin-grey.svg';
  var fileAvatar = window.form.querySelector('#avatar');
  var fileImages = window.form.querySelector('#images');
  var avatar = window.form.querySelector('.ad-form-header__preview img');
  var image = window.form.querySelector('.ad-form__photo');
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var onLoadChange = function (evt) {
    var fileLoad = evt.target;
    var file = fileLoad.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        var result = reader.result;
        switch (fileLoad) {
          case fileAvatar:
            avatar.src = result;
            break;
          case fileImages:
            var imgElement = document.createElement('img');
            imgElement.src = result;
            imgElement.margin = '10px';
            imgElement.style.maxWidth = '70px';
            imgElement.style.maxHeight = '70px';
            image.appendChild(imgElement);
            break;
        }
      });
      reader.readAsDataURL(file);
    }
  };

  fileAvatar.addEventListener('change', onLoadChange);
  fileImages.addEventListener('change', onLoadChange);

  var resetImg = function () {
    var imgElements = image.querySelectorAll('img');
    if (avatar.src !== DEFAULT_IMG) {
      avatar.src = DEFAULT_IMG;
    }
    for (var i = 0; i < imgElements.length; i++) {
      image.removeChild(imgElements[i]);
    }
  };
  window.resetImg = resetImg;
})();
