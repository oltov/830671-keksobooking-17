"use strict";

var numbersFileAvatars = ['01', '02', '03', '04', '05', '06', '07', '08'];
var housingTypes = ['palace', 'flat', 'house', 'bungalo'];
var locationPoints = function (min, max) {
  var point = Math.floor(min + Math.random() * (max + 1 - min));
  return point;
}
