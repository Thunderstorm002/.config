const perTabMedia={},perTabCaptions=new PerTabData({name:"per-tab-captions",runRemoveOnBeforeNavigate:!0}),ignoreTabMedia=new PerTabData({runRemoveOnBeforeNavigate:!0}),tabMediaModalPorts={},tabMediaBus=new Emittery;!function(){const e="tab-media-bg";function a({videoURL:e}){const{url:a}=parseVideoURL(e);return md5(a)}function t(e){var a="";const t=perTabMedia[e];if(t){const e=Object.keys(t).length;e>0&&(a+=e)}browser.browserAction.setBadgeText({tabId:e,text:a})}perTabCaptions.on("add-track",({tabId:e,captionData:a})=>{const t=perTabMedia[e];if(t)for(const e of Object.values(t))d(e,a)}),window.tabMediaHasEntry=function(e,t){try{return perTabMedia[e][a(t)]}catch(e){return!1}},window.shouldIgnoreTabMedia=((e,a)=>ignoreTabMedia[e]&&ignoreTabMedia[e].has(a)),window.ignoreTabMedia=((r,n)=>{ignoreTabMedia[r]||(ignoreTabMedia[r]=new Set);var i=ignoreTabMedia[r];i.add(n);const o=a({videoURL:n});(i=perTabMedia[r])&&i[o]&&(twosevenExtLog(e,`Removing entry '${n}' from perTabMedia since we found a master playlist with it`),delete i[o],t(r))});const r=async(a,r,n,i)=>{const o=perTabMedia[a];Object.assign(n,{hash:i}),o[i]=n,n.videoData.hash=i,n.videoData.clientID=await getClientID(),n.videoData.tracks||(n.videoData.tracks=[]),function(e,a){const t=perTabCaptions[a];if(!t)return;for(const a of Object.values(t))d(e,a)}(n,a),n.headers.push({name:"x-twoseven-ext-tab-media",value:"1"});const s=function(a){return{name:"media-handler",skipOnTwoSeven:!1,data:a,check(a){if(a.url===this.data.url)return twosevenExtLog(e,`Rewriting headers for: ${a.url}`),!0},callback(e){const a=this.data.headers;e.requestHeaders.push(...a)}}}(n);n.mediaHandlerHash=registerMediaFinder(s),n.tabId=a;const c={afterTriggerWatch(e){n.listenerEventsID&&browser.tabs.executeScript(a,{frameId:r,code:`triggerEvent(window, 'after-trigger-watch:${n.listenerEventsID}', ${JSON.stringify({data:{mediaEntry:e}})}, true)`})},afterTabMediaFetch(e){n.listenerEventsID&&browser.tabs.executeScript(a,{frameId:r,code:`triggerEvent(window, 'after-tab-media-fetch:${n.listenerEventsID}', ${JSON.stringify({data:{mediaEntry:e}})}, true)`})}};n.listeners=deepmerge(c,n.listeners||{}),t(a)};window.addTabMedia=(async(t,n,o)=>{if(-1===t)return void console.warn("Ignoring media since tabId is -1");let s=!0;perTabMedia[t]||(perTabMedia[t]={});const d=perTabMedia[t],c=a(o);if(d[c]&&(s=!1),isPausedOnAllWebsites()||isPausedOnWebsite(o.referer)||isPausedOnWebsite(tabURLs[t]))return!1;if(o.entryType=o.entryType||"media","playlist"===o.entryType){if(!twosevenProfile||!twosevenProfile.privileges||!twosevenProfile.privileges.FEATURE_PLAYLIST)return!1;await r(t,n,o,c)}else if("media"===o.entryType){const a=await getTabByTabId(t),{url:d}=a;Object.assign(o.videoData,{topURL:d});let b=!1;if(twosevenTabs[t]){const e=i[t]?Array.from(i[t]):[],a=new Set(e.map(e=>e.sender.frameId));if(!(b=await async function e(a,t,r){if(0===t||-1===t)return!1;if(r.has(t))return!0;{const n=await new Promise(e=>browser.webNavigation.getFrame({tabId:a,frameId:t},e)),{parentFrameId:i}=n;return e(a,i,r)}}(t,n,a)))return!1}if(!b){let a=o.videoURL;try{const{url:e}=parseVideoURL(o.videoURL);a=e}catch(e){}if(shouldIgnoreTabMedia(t,a)&&(s=!1),!function(a){const t=["videoSelector","referer","videoURL","origin","strategies","headers"],r=Object.keys(a);if(!t.every(e=>r.indexOf(e)>=0))throw new Error(`Does not contain all the required keys: ${JSON.stringify(t)}`);const n=a.headers;if(getHeaderEntry("x-twoseven-ext-tab-media",n))return twosevenExtLog(e,`Ignoring media ${a.url} due to tab-media header`),!1;const i=getHeaderValue("referer",n);if(!getHeaderEntry("origin",n))try{n.push({name:"origin",value:new URI(i).origin()})}catch(e){console.warn("Did not add referer")}return!0}(o))return!1;console.log(`Found tab media update=${s}`),s&&await r(t,n,o,c)}try{i[t].forEach(e=>{try{e.postMessage({action:"add-tab-media",media:o})}catch(e){}})}catch(e){}}tabMediaBus.emit("add-tab-media",{tabId:t,frameId:n,media:o})}),window.removeTabMedia=((e,r)=>{if(!perTabMedia[e])return;const n=perTabMedia[e];unregisterMediaFinder(r.mediaHandlerHash),delete n[a(r)],t(e)});const n={},i={};async function o(e,a,t){let r=tabURLs[e];if(!r){r=(await getTabByTabId(e)).url}r=new URL(r);const{href:n,host:i,origin:o,hostname:s,protocol:d,pathname:c,search:b}=r;a.postMessage({action:"media-update",to:t,from:"tab-media-bg",data:{media:sanitizeObject(perTabMedia[e]),location:{href:n,host:i,hostname:s,origin:o,protocol:d,pathname:c,search:b}}})}tabMediaBus.on("add-tab-media",({tabId:e,frameId:a})=>{const t=tabMediaModalPorts[e];t&&o(e,t)});const s={origin:"https://twoseven.xyz",onlyQueue:!1};function d(e,a){const{vtt:t,url:r,format:n=(t?"vtt":"unknown")}=a;e.videoData.tracks.push({format:n,src:r,vtt:t})}function c(e,a){perTabMedia[e]&&(delete perTabMedia[e],twosevenExtLog("cleanup","Called from: "+(new Error).stack),t(e))}window.triggerWatch=(async(e,a,t)=>{t=deepmerge(s,t||{});const{origin:r,onlyQueue:n}=t;let i=a;"string"==typeof a&&(i=perTabMedia[e][a]);const o=twosevenTabsLRUCache.getLatestTab();o?(browser.tabs.executeScript(o,{allFrames:!1,code:`\n        ;(function () {\n          const evt = new CustomEvent('ext-event', {\n            detail: JSON.stringify({\n              data: {\n                action: 'trigger-source-change',\n                data: {\n                  mediaEntry: ${JSON.stringify(i)},\n                  onlyQueue: ${n}\n                }\n              }\n            })\n          })\n          window.dispatchEvent(evt)\n        })()\n        `}),browser.tabs.update(o,{active:!0})):refreshTokensIfNeeded().then(()=>{browser.tabs.create({url:`${r}/ext-media?tabId=${e}&hash=${i.videoData.hash}&onlyQueue=${n}`})}),i.listeners.afterTriggerWatch&&i.listeners.afterTriggerWatch(i)}),browser.runtime.onConnect.addListener(a=>{let t,r;switch(a.name){case"tab-media-cs":if(t=getTabIdFromPort(a),a.sender.frameId&&0!==a.sender.frameId)return;n[t]||(n[t]=[]),n[t].push(a),a.onMessage.addListener(r=>{if(r.to&&r.to===e&&r.action)switch(t=getTabIdFromPort(a),r.action){case"trigger-watch":{let{data:{overrideMediaEntry:e,mediaEntry:a,onlyQueue:n}}=r;a=e||perTabMedia[t][a.videoData.hash],window.triggerWatch(t,a,{onlyQueue:n});break}}});break;case"iframe-strategy-cs":t=getTabIdFromPort(a),i[t]||(i[t]=new Set),i[t].add(a),a.onDisconnect.addListener(()=>{i[a.sender.tab.id].delete(a)});break;case"tab-media:modal":t=getTabIdFromPort(a),r=a.sender.frameId,tabMediaModalPorts[t]=a,a.onMessage.addListener(e=>{switch(e.action){case"media-update":o(t,a,e.from)}}),a.onDisconnect.addListener(()=>{delete tabMediaModalPorts[t]})}}),window.showTabMediaOnTab=function(e){const a=e.id,t=n[a];t?t.forEach(e=>{try{e.postMessage({action:"show-tab-media-popup",media:sanitizeObject(perTabMedia[a])})}catch(e){}}):browser.tabs.executeScript(a,{allFrames:!1,code:"\n          document.defaultView.postMessage({\n            action: 'twoseven-ext-initialize-modal',\n            data: {}\n          }, '*')\n        "})},window.clearTabMedia=c,browser.tabs.onRemoved.addListener(c),onBeforeNavigateListeners.addListener(({tabId:e,frameId:a})=>{0===a&&c(e)},PrioritizedCallbacks.Levels.ALWAYS_FIRST),browser.tabs.onActivated.addListener(({tabId:e})=>{t(e)}),browser.runtime.onConnect.addListener(e=>{const a=getTabIdFromPort(e),{frameId:t}=e.sender;e.onMessage.addListener(r=>{switch(r.action){case"add-tab-media":Object.assign(r.data,{tabId:a}),window.addTabMedia(a,t,r.data);break;case"clear-tab-media":window.clearTabMedia(a),r.expectResponse&&e.postMessage({action:r.action,eventID:r.eventID})}})})}();