(()=>{let e,t;browser.webRequest.onBeforeRequest.addListener(r=>{const{tabId:n,frameId:i}=r;if(0!==i&&twosevenTabs[n])return r.url.endsWith("mediakit.js")?e=r.url:t=r.url,e&&t&&browser.tabs.executeScript(n,{frameId:i,code:`triggerEvent(window, 'modify-script', JSON.stringify({\n          mediakitURL: '${e}',\n          webTVAppURL: '${t}'\n        }), true)`}),{cancel:!0}},{urls:[window.twoseven.APPLE_TV_MEDIAKIT_WEBREQUEST_PATTERN,window.twoseven.APPLE_TV_WEB_TV_APP_WEBREQUEST_PATTERN]},["blocking"])})();