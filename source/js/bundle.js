/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// Реализация простого ползунка с выводом результата на JS
var slider = document.querySelector('.slider');
var sliderPoint = slider.querySelector('.slider__point');
var sliderResult = document.querySelector('.slider__result');
var sliderCoords = {};
var sliderClientCoords = slider.getBoundingClientRect();
sliderCoords.top = sliderClientCoords.top + pageYOffset;
sliderCoords.left = sliderClientCoords.left + pageXOffset;

var sliderHandler = function sliderHandler(evt) {
  sliderPoint.addEventListener('dragstart', function () {
    return false;
  });
  var pointCoords = {};
  var pointClientCoords = sliderPoint.getBoundingClientRect();
  pointCoords.top = pointClientCoords.top + pageYOffset;
  pointCoords.left = pointClientCoords.left + pageXOffset;
  var rightBorder = slider.offsetWidth - sliderPoint.offsetWidth;
  var shiftX = evt.pageX - pointCoords.left;

  var pointMoveHandler = function pointMoveHandler(borderX, evt) {
    var newLeft = evt.pageX - sliderCoords.left - shiftX;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > borderX) {
      newLeft = borderX;
    }

    return newLeft;
  };

  var onMove = function onMove(evt) {
    sliderPoint.style.left = "".concat(pointMoveHandler(rightBorder, evt), "px");
    sliderResult.innerHTML = "".concat(Math.round(pointMoveHandler(rightBorder, evt) / rightBorder * 100), "%");
  };

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', onMove);
  });
};

sliderPoint.addEventListener('mousedown', sliderHandler);
/******/ })()
;
//# sourceMappingURL=bundle.js.map