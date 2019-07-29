'use strict';

(function () {
  var popupTemplate = window.body.querySelector('#card').content.querySelector('.map__card');

  var renderPopup = function (popup) {
    var popupElement = popupTemplate.cloneNode(true);
    popupElement.querySelector('img').src = popup.author.avatar;
    popupElement.querySelector('img').alt = popup.offer.type;
    popupElement.querySelector('.popup__title').textContent = popup.offer.title;
    popupElement.querySelector('.popup__text--address').textContent = popup.offer.address;
    popupElement.querySelector('.popup__text--price').textContent = popup.offer.price + '₽' + '/ночь';
    var typeHouse = function () {
      var type = popupElement.querySelector('.popup__type');
      if (popup.offer.type === 'flat') {
        type.textContent = 'Кyвартира';
      }
      if (popup.offer.type === 'bungalo') {
        type.textContent = 'Бунгало';
      }
      if (popup.offer.type === 'house') {
        type.textContent = 'Дом';
      }
      if (popup.offer.type === 'palace') {
        type.textContent = 'Дворец';
      }
    };
    typeHouse();
    popupElement.querySelector('.popup__text--capacity').textContent = popup.offer.rooms + ' комнаты для ' + popup.offer.guests + ' гостей';
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + popup.offer.checkin + ' выезд до ' + popup.offer.checkout;
    var features = function () {
      popupElement.querySelector('.popup__features').innerHTML = '';
      for (var i = 0; i < popup.offer.features.length; i++) {
        var featureElement = document.createElement('li');
        featureElement.className = 'popup__feature popup__feature--' + popup.offer.features[i];
        popupElement.querySelector('.popup__features').appendChild(featureElement);
      }
    };
    features();
    popupElement.querySelector('.popup__description').textContent = popup.offer.description;

    var renderImg = function () {
      var fragmentImg = document.createDocumentFragment();
      for (var q = 0; q < popup.offer.photos.length; q++) {
        var popupNode = popupElement.querySelector('.popup__photo').cloneNode();
        popupNode.src = popup.offer.photos[q];
        fragmentImg.appendChild(popupNode);
      }
      popupElement.querySelector('.popup__photos').innerHTML = '';

      popupElement.querySelector('.popup__photos').appendChild(fragmentImg);
    };
    renderImg();

    return popupElement;
  };
  window.renderPopup = renderPopup;

})();
