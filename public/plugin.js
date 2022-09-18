/* eslint-disable no-undef */
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", BF2042Portal.Plugins.getPlugin("bf-portal-js").getUrl("index.html"), false);
xmlhttp.send();
var parser = new DOMParser();
var portal_js = parser.parseFromString(xmlhttp.responseText, "text/html");

document.head.appendChild(portal_js.head.children[0]);