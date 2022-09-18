/* eslint-disable no-undef */
// Application entry point
var url = BF2042Portal.Plugins.getPlugin("bf-portal-code-unleash").getUrl("static/js/bundle.js");
// Create application script
var script = document.createElement('script');
script.defer = "";
script.src = url;
// Inject application script
document.head.appendChild(script);