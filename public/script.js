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


function gAnalyticsButton(action, label) {
  ga('send', 'event', 'button', action, label);
}
