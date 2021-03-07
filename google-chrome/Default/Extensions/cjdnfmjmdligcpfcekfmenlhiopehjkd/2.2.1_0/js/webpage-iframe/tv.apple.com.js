(()=>{if(window.top===window)return;const e="watch-iframe[tv.apple.com]",n=e,t="amp-mediakit-root",o="apple-tv-plus-player",r="amp-window-takeover",a="amp-video-player-internal",i="amp-video-player";async function s(e,n={}){const{result:t}=await postTo(window,{action:"player-cmd",drmIgnore:!0,cmd:e,...n},!0);return t}const c=new WebpageIframeModule({name:e,hrefURLRegex:new RegExp("https://(.*\\.)?tv\\.apple\\.com/.*"),earlyInitialize(){const e=browser.runtime.connect({name:name});this.port=e;const t=new Deferred;if(window.twoseven.is.chrome()){{const e="ts-hulu-reload";if(!sessionStorage.getItem(e))return sessionStorage.setItem(e,1),void(async()=>{await sendMessageToBG("clear-cache",{url:window.location.href,origins:[window.location.origin,"https://js-cdn.music.apple.com"]}),twosevenExtLog(n,"Reloading once after clearing cache"),window.location.reload()})()}once(window,"modify-script",async e=>{const{detail:o}=e;try{const{mediakitURL:r,webTVAppURL:a}=JSON.parse(o),i=new URI(r).addQuery({"ts-bypass":!0,"ts-uuid":Date.now()}).toString(),s=new URI(a).addQuery({"ts-bypass":!0,"ts-uuid":Date.now()}).toString(),c=await pullScriptAndModify(i,window.twoseven.appleTVReplaceMap,n);injectScript(c),injectScriptByURL(s),injectScriptByURL(browser.extension.getURL("js/redist/on-change.umd.js"),null,document.head),t.resolve()}catch(e){console.error(e)}}),(async()=>{const{twoseven:{APPLE_TV_MEDIAKIT_REGEX_PATTERN:e,APPLE_TV_WEB_TV_APP_REGEX_PATTERN:t}}=window,o=[e,t];await Promise.all(o.map(async e=>{const n=await waitForDOMNode({type:"check",value:n=>!("SCRIPT"!==n.tagName||!n.src)&&e.test(n.src)});n.parentNode.removeChild(n);const{src:t}=n;await fetch(`${t}?ts-bypass=1`)})),twosevenExtLog(n,"Busted cache on all scripts")})()}window.addEventListener("controller-event",async e=>{const{detail:t}=e;let o;o="string"==typeof t?JSON.parse(t):t.data;const{action:r}=o,a={action:r,name:window.name,json:{}};switch(r){case"play":case"pause":break;case"seek":Object.assign(a.json,{position:1e3*o.position});break;case"sourceChange":{let n;try{injectScript("window.twoseven.resetController()");const{mediaEntry:t}=o;if(n=JSON.parse(t),this.lastMediaEntry&&this.doVideoURLsMatch(this.lastMediaEntry,n))return;this.mediaEntry=n,await new Promise(e=>setTimeout(e,1e3)),this.mediaLoadedPromise=new Deferred;const r=document.querySelector("button.product-page__cta-button");r&&r!==this.lastProductPageBtn?(this.lastProductPageBtn=r,once(window,"twoseven:play",this.mediaLoadedPromise.resolve),r.click()):(this.mediaLoadedPromise.resolve(),this.onVideo(this.mediaEntry))}catch(e){}break}case"playback-ready":return await this.mediaLoadedPromise,this.onVideo(this.mediaEntry);case"fullscreen":window.twoseven.fullscreenHandlers.toggleFullscreen();break;case"controller-changed":injectScript("\n              ;(async () => {\n                const { twoseven: { videoController } } = window\n                const play = videoController.play.bind(videoController)\n                const pause = videoController.pause.bind(videoController)\n                const seekToTime = videoController.seekToTime.bind(videoController)\n                const seekBackward = videoController.seekBackward.bind(videoController)\n                const seekForward = videoController.seekForward.bind(videoController)\n                const hijackController = () => {\n                  Object.assign(videoController, {\n                    play (fromJS) {\n                      if (!fromJS) {\n                        return triggerEvent(window, 'controller-event', { action: 'play' })\n                      }\n                      play()\n                    },\n                    pause (arg, fromJS) {\n                      if (!fromJS) {\n                        return triggerEvent(window, 'controller-event', { action: 'pause' })\n                      }\n                      pause(arg)\n                    },\n                    seek (position) {\n\n                    },\n                    seekToTime (arg1, arg2, fromJS) {\n                      if (!fromJS) {\n                        return triggerEvent(window, 'controller-event', { action: 'seek', position: arg1 })\n                      }\n                      seekToTime(arg1, arg2)\n                    },\n                    seekBackward (fromJS) {\n                      if (!fromJS) {\n                        return triggerEvent(window, 'controller-event', { action: 'seek', position: this.currentPlaybackTime - 10 })\n                      }\n                      seekBackward()\n                    },\n                    seekForward (fromJS) {\n                      if (!fromJS) {\n                        return triggerEvent(window, 'controller-event', { action: 'seek', position: this.currentPlaybackTime + 10 })\n                      }\n                      seekForward()\n                    },\n                    getCurrentTime () {\n                      return this.currentPlaybackTime\n                    },\n                    getDuration () {\n                      return this.currentPlaybackDuration\n                    }\n                  })\n                }\n                window.twoseven.hijackController = hijackController\n\n                const resetController = () => {\n                  Object.assign(videoController, {\n                    play,\n                    pause,\n                    seekToTime,\n                    seekBackward,\n                    seekForward\n                  })\n                }\n                window.twoseven.resetController = resetController\n\n                window.addEventListener('message', async ({ data = {} }) => {\n                  if (data.action !== 'player-cmd') {\n                    return\n                  }\n                  const { cmd, ack } = data\n                  let result\n                  switch (cmd) {\n                    case 'play':\n                      await window.twoseven.videoController.play(true)\n                      break\n                    case 'pause':\n                      await window.twoseven.videoController.pause(null, true)\n                      break\n                    case 'currentTime':\n                      result = window.twoseven.videoController.getCurrentTime(true)\n                      break\n                    case 'seek':\n                      const { position } = data\n                      await window.twoseven.videoController.seekToTime(position / 1e3, null, true)\n                      break\n                    case 'duration':\n                      result = window.twoseven.videoController.duration\n                      break\n                    case 'status':\n                      result = window.twoseven.videoController.isPlaying ? 'playing' : 'paused'\n                      break\n                  }\n                  if (ack) {\n                    window.postMessage({\n                      action: ack.event,\n                      drmIgnore: true,\n                      json: { result }\n                    }, '*')\n                  }\n                })\n              })()\n            ")}this.initialized?(twosevenExtLog(n,`Controller wanted to action=${r}`),postToParent(a)):twosevenExtLog(n,`Controller wanted to action=${r} ...ignored since controller hasn't initialized yet`)})},fullscreenCallback:()=>!0,useActionsAsControls:!0,getActions:()=>({play:()=>s("play"),async pause(){const e=await d(),n=e.shadowRoot.querySelector("video"),t=e.shadowRoot.querySelector(".scrim");return n.classList.remove("has-hidden-controls"),t.setAttribute("aria-hidden",!1),s("pause")},async seek({position:e}){const n=await s("currentTime");if(!(Math.abs(e-1e3*n)<100))return s("seek",{position:e})},sourceChange(e){},currentTime:()=>s("currentTime"),duration:()=>s("duration"),source(){return this.videoURL},playerStatus:()=>s("status"),interactiveChoice(e){}}),getVideo(){return this.video},async onVideo(e={videoURL:window.location.href}){const n=await async function(){const e=await d();return await waitForDOMNode({type:"tag",value:"video"},e.shadowRoot)}(),t=new Deferred(e=>{this.once("same-url").then(e)});this.emit("controller-ready",e),await waitForVideoReady(n),await t,injectScript("window.twoseven.hijackController()"),await s("pause"),window.removeEventListener("keyup",window.twoseven.fullscreenHandlers.safeHandleKeys),window.addEventListener("keyup",window.twoseven.fullscreenHandlers.safeHandleKeys),this.lastMediaEntry=e,await this.emit("controller-initialized")},isValidVideoElement:e=>!1,doVideoURLsMatch(e,n){const{videoURL:t,videoData:o}=e,{videoURL:r,videoData:a}=n;if(o&&a){const{id:e,contentId:n,canonicalId:t}=o,{id:r,contentId:i,canonicalId:s}=a;if((e||r)&&e===r||(n||i)&&n===i||(t||s)&&t===s)return!0}return t===r}});async function d(){const e=(await waitForDOMNode({type:"tag",value:t})).querySelector(o),n=(await waitForDOMNode({type:"tag",value:r},e.shadowRoot)).querySelector(a);return await waitForDOMNode({type:"tag",value:i},n.shadowRoot)}registerWebpageIframeModule(c)})();