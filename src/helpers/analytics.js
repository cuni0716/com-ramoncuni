/* global ga */
export function gAnalyticsPageView() {
  ga('send', 'pageview');
}

export function gAnalyticsLinkFooter(action, label) {
  ga('send', 'event', 'link-footer', action, label);
}
