(()=>{if(window.top===window)return;const e=new WebpageIframeModule({name:"watch-iframe[plex]",hrefURLRegex:new RegExp("https://app.plex.tv/.*"),initialize(){},fullscreenCallback:()=>!0,getActions:()=>window.twoseven.initializeGenericIframeActions(),onVideo(e){const t=document.querySelector("#plex"),n=new MutationObserver(e=>{for(const i of e)if("childList"===i.type){if(Array.from(i.addedNodes).length>0){const e=t.querySelector('button[data-qa-id="fullscreenButton"]');e&&(n.disconnect(),e.addEventListener("click",window.twoseven.fullscreenHandlers.toggleFullscreen))}}});n.observe(t,{childList:!0,subtree:!0})}});registerWebpageIframeModule(e)})();