(()=>{if(window.top===window)return;const e="watch-iframe[disneyplus.com]",t=new WebpageIframeModule({name:e,hrefURLRegex:new RegExp("https://(.*\\.)?disneyplus\\.com/.*"),earlyInitialize(){this.videoReady=new Deferred;const e=new Deferred;window.twoseven.is.chrome()&&((async()=>{{const e="ts-disneyplus-reload";if(!sessionStorage.getItem(e))return sessionStorage.setItem(e,1),void(async()=>{await sendMessageToBG("clear-cache",{url:window.location.href,origins:[window.location.origin,"https://prod-static.disney-plus.net"]}),twosevenExtLog("watch-iframe[disneyplus.com]","Reloading once after clearing cache"),window.location.reload()})()}const e=await waitForDOMNode({type:"tag",value:"body"}),t=await waitForDOMNode({type:"check",value:e=>e.tagName&&"script"===e.tagName.toLowerCase()&&e.src&&e.src.endsWith("app_script_bundle.js")},e);t.parentNode.removeChild(t),await fetch(t.src)})(),once(window,"blocked-script",async t=>{const{detail:{data:{url:i}}}=t,n=new URI(i);n.addSearch({"ts-bypass":1,"cache-buster":Date.now()});const a=await fetch(n.toString());let o=await a.text();const{scriptContent:s}=await e,r=URL.createObjectURL(new Blob([s],{type:"application/javascript"})),c=new XRegExp('(?<fnstart>\\var\\.src=function\\(\\var\\){return ).*?".js"}');o=XRegExp.replace(o,c,`\${fnstart}'${r}';}`),injectScript(o)}));const t=browser.runtime.connect({name:"watch-iframe[disneyplus.com]"});this.port=t,t.onMessage.addListener(async t=>{const{action:i,data:n}=t;switch(i){case"script-content":e.resolve(n)}}),t.postMessage({action:"script-content"}),(async()=>{const e=await waitForDOMNode({type:"tag",value:"head"});injectStylesheet("html { display: block !important; }",e)})(),window.addEventListener("controller-event",e=>{const{detail:{data:t}}=e,{action:i}=t;switch(i){case"play":case"pause":case"seek":if(!this.initialized)return}switch(i){case"play":this.video.play();break;case"pause":this.video.pause();break;case"seek":this.video.seek(1e3*t.position);break;case"fullscreen":window.twoseven.fullscreenHandlers.toggleFullscreen();break;case"video-ready":this.videoReady.resolve()}})},fullscreenCallback:()=>!0,useActionsAsControls:!0,getActions(){const e=this;return{async play(){injectScript("window.twoseven.videoController.play()",!0)},async pause(){injectScript("window.twoseven.videoController.pause()",!0)},async seek({position:t}){const{currentTime:i}=e.video;if(!(Math.abs(t-1e3*i)<100))return injectScript(`window.twoseven.videoController.seek(${t/1e3})`,!0)},sourceChange(e){},currentTime:async()=>e.video.video.currentTime,duration:async()=>e.video.video.duration,source:async()=>e.mediaEntry.videoURL,playerStatus:async()=>e.video.paused?"paused":"playing",interactiveChoice(e){}}},getVideo(){return this.video},async onVideo(e){this.video=e,this.url=window.location.href;const{video:t}=e,i=this;injectScript("\n        window.twoseven.ignoreFirstPlay = true\n        // window.twoseven.ignoreFirstSeek = true\n      "),this.mediaEntry=await window.twoseven.getMediaEntry(this.port),await new Promise(e=>{t.addEventListener("loadeddata",()=>{e()})}),await this.videoReady,this.on("same-url",function e(){i.off("same-url",e),i.emit("controller-initialized")}),this.emit("controller-ready",i.mediaEntry)},isValidVideoElement:()=>!0,doVideoURLsMatch(e,t){const{videoURL:i,videoData:n}=e,{videoURL:a,videoData:o}=t;try{const{contentId:e}=n,{contentId:t}=o;if(void 0!==e||void 0!==t)return e===t}catch(e){}try{const e=new URI(i),t=new URI(a);return e.filename()===t.filename()}catch(e){}return i===a},videoSelector:()=>"disneyplus"});registerWebpageIframeModule(t)})();