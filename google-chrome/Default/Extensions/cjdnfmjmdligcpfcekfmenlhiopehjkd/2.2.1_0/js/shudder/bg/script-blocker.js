browser.webRequest.onBeforeRequest.addListener(e=>({cancel:!0}),{urls:["https://www.shudder.com/scripts/vendor/jw-8.0.0/jwplayer.core.js"],types:["script"]},["blocking"]);