(async()=>{const e=new RegExp("https://www.hotstar.com/assets/main\\..*\\.js");browser.webRequest.onBeforeSendHeaders.addListener(async s=>{if(s.url.includes("ts-bypass=1")||s.url.includes("allow=1"))return;if(!e.test(s.url))return;const{tabId:r,frameId:t}=s;return 0!==t&&twosevenTabs[r]?{cancel:!0}:void 0},{urls:["<all_urls>"]},["requestHeaders","blocking"])})();