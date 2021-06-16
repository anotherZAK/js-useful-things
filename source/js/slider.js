// Реализация простого ползунка с выводом результата на JS

const slider = document.querySelector('.slider');
const sliderPoint = slider.querySelector('.slider__point');
const sliderResult = document.querySelector('.slider__result');

const sliderCoords = {};
const sliderClientCoords = slider.getBoundingClientRect();
sliderCoords.top = sliderClientCoords.top + pageYOffset;
sliderCoords.left = sliderClientCoords.left + pageXOffset;

const sliderHandler = (evt) => {
  sliderPoint.addEventListener('dragstart', () => {
    return false;
  });

  const pointCoords = {};
  const pointClientCoords = sliderPoint.getBoundingClientRect();
  pointCoords.top = pointClientCoords.top + pageYOffset;
  pointCoords.left = pointClientCoords.left + pageXOffset;

  const rightBorder = slider.offsetWidth - sliderPoint.offsetWidth;
  const shiftX = evt.pageX - pointCoords.left;

  const pointMoveHandler = (borderX, evt) => {
    let newLeft = evt.pageX - sliderCoords.left - shiftX;
    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > borderX) {
      newLeft = borderX;
    }
    return newLeft;
  };

  const onMove = (evt) => {
    sliderPoint.style.left = `${pointMoveHandler(rightBorder, evt)}px`;
    sliderResult.innerHTML = `${Math.round(pointMoveHandler(rightBorder, evt) / rightBorder * 100)}%`;
  };

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMove);
  });
};

sliderPoint.addEventListener('mousedown', sliderHandler);
