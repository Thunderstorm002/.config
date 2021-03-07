const ATVWebPlayerURL="https://js-assets.aiv-cdn.net/playback/web_player/ATVWebPlayer/1.0.200932.0/js/ATVWebPlayer.js",WebPlayerSDKURL="https://cloudfront.xp-assets.aiv-cdn.net/packages/ATVWebPlayerSDK-1.0/prod/WebPlayerSDK.js",ATVWebPlayerSDKURL="https://cloudfront.xp-assets.aiv-cdn.net/packages/ATVWebPlayerSDK-1.0/prod/ATVWebPlayerSDK.js",WebPlayerSDKWebRequestPattern="https://cloudfront.xp-assets.aiv-cdn.net/packages/ATVWebPlayerSDK-*/prod/WebPlayerSDK.js",ATVWebPlayerSDKWebRequestPattern="https://cloudfront.xp-assets.aiv-cdn.net/packages/ATVWebPlayerSDK-*/prod/ATVWebPlayerSDK.js",ATVWebPlayerURLWebRequestPattern="https://js-assets.aiv-cdn.net/playback/web_player/ATVWebPlayer/*/js/ATVWebPlayer.js",ATVWebPlayerURLRegexPattern="https://js-assets.aiv-cdn.net/playback/web_player/ATVWebPlayer/.*/js/ATVWebPlayer.js";{const e=new RegExp("https://([a-z.]+)\\.(amazon|primevideo)\\.[a-z.]+/.*");window.twoseven.isOnAmazonTopFrame=(()=>window.top===window&&window.twoseven.isOnAmazon()),window.twoseven.isOnAmazon=(()=>e.test(window.location.href))}(()=>{const e=new ScriptModifierMap([],"amazon:atvWebPlayerReplaceMap"),a=new ScriptModifierMap([],"amazon:webPlayerSDKReplaceMap");window.twoseven.amazonATVWebPlayerReplaceMap=e,window.twoseven.amazonWebPlayerSDKReplaceMap=a,e.addEntry({key:new XRegExp("this.loadJavaScriptFromString=function\\((?<args>\\var,(?<scriptVar>\\var),\\var)\\){"),value:new ScriptModifierEntry({replace:"this.loadJavaScriptFromString=function(${args}){ const pattern = 'props.uiConfigurations.enableFullscreen'; const idx = ${scriptVar}.indexOf(pattern); if (idx >= 0) { ${scriptVar} = ${scriptVar}.substring(0, idx) + pattern + ' || true' + ${scriptVar}.substring(idx + pattern.length, ${scriptVar}.length)}"})}),e.addEntry({key:new XRegExp("(?<fnstart>\\var\\.prototype\\.onInitialized=function\\(\\){)"),value:new ScriptModifierEntry({replace:"${fnstart}\n      window.twoseven.amazonController = this.webPlayer;"})}),e.addEntry({key:new XRegExp("(?<fnstart>getContent.*{)(?<fncontent>\\var&&\\var\\.version===(?<var>\\var)\\.version)"),value:new ScriptModifierEntry({replace:"${fnstart}\n\n      ${fncontent}&&false"})}),e.addEntry({key:new XRegExp("(?<fnstart>acquireNewAsset=function\\((?<var>\\var),.*?\\){)"),value:new ScriptModifierEntry({replace:"${fnstart}\n      ${var}.scriptInfo.url += '?ts-uuid=' + Date.now()\n      twosevenExtLog('[amazon-script-modifier]', 'WebPlayer script: ' + ${var}.scriptInfo.url);\n      "})}),a.addEntry({key:new XRegExp("(?<fnstart>ref:function\\((?<var>\\var)\\){\\var\\.seekBarElement=\\var)},onTouchEnd"),value:new ScriptModifierEntry({replace:"${fnstart};\n        if (${var}) {\n          triggerEvent(${var}, 'page-elements', { name: 'seekBar' })\n        }\n      },onTouchEnd"})}),a.addEntry({key:new XRegExp("(?<fnstart>ref:function\\((?<var>\\var)\\){\\var\\.pausedOverlayRef=\\var)"),value:new ScriptModifierEntry({replace:"${fnstart};\n      if (${var}) {\n        triggerEvent(${var}, 'page-elements', { name: 'pausedOverlay' })\n      };"})}),a.addEntry({key:new XRegExp("(?<fnstart>ref:function\\((?<var>\\var)\\){\\var\\.fastSeekBackRef=\\var)"),value:new ScriptModifierEntry({replace:"${fnstart};\n      if (${var}) {\n        triggerEvent(${var}, 'page-elements', { name: 'fastSeekBack' })\n      };"})}),a.addEntry({key:new XRegExp("(?<fnstart>ref:function\\((?<var>\\var)\\){\\var\\.fastSeekForwardRef=\\var)"),value:new ScriptModifierEntry({replace:"${fnstart};\n      if (${var}) {\n        triggerEvent(${var}, 'page-elements', { name: 'fastSeekForward' })\n      };"})}),a.addEntry({key:new XRegExp("(?<fnstart>ref:function\\((?<var>\\var)\\){\\var\\.pausePlayRef=\\var)"),value:new ScriptModifierEntry({replace:"${fnstart};\n      if (${var}) {\n        triggerEvent(${var}, 'page-elements', { name: 'playPauseBtn' })\n      };"})}),a.addEntry({key:new XRegExp("(?<fnstart>,\\var\\.onClickFullscreen=function\\(\\){)"),value:new ScriptModifierEntry({replace:"${fnstart}return window.twoseven.postToParent({ action: 'fullscreen' });"})})})();