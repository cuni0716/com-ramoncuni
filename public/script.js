window.onload = function () {
  gAnalyticsPageView();
  if (window.location.pathname === '/') {
    init();
  }
}


function init() {
  TypeWritter.start({
    containerId: 'typePad',
    extractClass: 'sentence',
    cursorClass: 'cursor'
  });
}

function gAnalyticsPageView() {
  ga('send', 'pageview');
}

function gAnalyticsLink(action, label) {
  ga('send', 'event', 'link', action, label);
}
