const tabReference=new Emittery;browser.runtime.onConnect.addListener(e=>{if(!e.sender.tab)return;const t=getTabIdFromPort(e);e.onMessage.addListener(async a=>{switch(a.to){case"bg:get-ext-data":{const r=Number(a.tabId),s=a.hash;tabReference.emit("get-ext-data",{fromTabId:t,tabId:r}),e.postMessage({to:"cs:get-ext-data",__evtId:a.__evtId,...sanitizeObject(perTabMedia[r][s]),credentials:{...sanitizeObject(getAuthResult()),profile:JSON.parse(localStorage.profile)}});break}case"bg:request-module-help":{let r=a;a.videoData.fromTabId=t;const s=getModule(a.module);if(s){if(!1!==a.module.callModuleBG)try{r=await s.moduleHelp(a)}catch(e){r={type:"error",message:e.message}}}else{const e=`Unimplemented module '${a.module}'`;console.warn(e)}e.postMessage({to:"cs:on-module-help",__evtId:a.__evtId,module:a.module,data:sanitizeObject(r)});break}case"bg:search-for-media":{const r=a,{videoData:s}=r;s.shouldMatchMedia=!1,s.referer=parseVideoURL(r.videoURL).url,s.fromTabId=t;try{const e=await iframeStrategy(r);deepmerge(r,e)}catch(e){r.type="error",r.message=e.message}e.postMessage({to:"cs:search-for-media",__evtId:a.__evtId,mediaEntry:r});break}case"bg:after-tab-media-fetch":try{const e=perTabMedia[a.tabId][a.hash];e.listeners.afterTabMediaFetch(e)}catch(e){console.warn(`Failed to trigger after-tab-media-fetch on page: ${a.videoData.topURL}`)}}})});