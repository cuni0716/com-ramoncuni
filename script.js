window.onload = function () {
  init();
}


function init() {
  TypeWritter.start({
    containerId: 'typePad',
    extractClass: 'sentence',
    cursorClass: 'cursor'
  });
}
