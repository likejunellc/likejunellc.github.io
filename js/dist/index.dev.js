"use strict";

imgArray = ["lauryn.jpg", "walkman.jpg", "raptors.jpg", "rocket.jpg", "city.jpg", "disco.jpg", "coral.jpg", "einstein.jpg", "jayz.jpg", "trees.jpg", "knight.jpg", "city2.jpg", "missy.jpg", "beatles.jpg", "ratm.jpg", "sinatra.jpg", "bubbles.jpg", "vintage.jpg"];

var slideshow = function slideshow(imgArray, target) {
  var counter = 0;
  target = document.querySelector(target);
  window.setInterval(function () {
    target.style.background = "url(../assets/img/slides//".concat(imgArray[counter], ")");
    target.style.backgroundSize = "cover";
    target.style.backgroundPosition = "50% 50%";
    target.style.backgroundRepeat = "none";
    counter++;

    if (counter >= imgArray.length) {
      counter = 0;
    }
  }, 233);
};

var changeImg = function changeImg(target, img) {
  target = document.querySelector(target);
  console.log("changing to ".concat(img));
  target.style.background = "url(".concat(img, ")");
};

document.addEventListener('DOMContentLoaded', function (e) {
  slideshow(imgArray, ".background-slides");
});