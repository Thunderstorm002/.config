(()=>{if(window.top===window)return;const e="watch-iframe[mega.nz]",t=new WebpageIframeModule({name:e,hrefURLRegex:new RegExp("https://mega(\\.co)?\\.nz/.*"),earlyInitialize(){const t=browser.runtime.connect({name:e});this.port=t,window.addEventListener("hashchange",()=>{window.location.reload()})},fullscreenCallback:()=>!0,useActionsAsControls:!0,getActions(){return window.twoseven.initializePlyrActions(()=>this.getVideo())},getVideo(){return this.video},onVideo(e){const{video:t}=e;if(this.video&&this.video.video===t)return;this.video=e,this.url=window.location.href;const i=new Promise(e=>{t.addEventListener("loadedmetadata",function i(){t.removeEventListener("loadedmetadata",i),e()})}),n=new Promise(e=>{if(t.src)return e();new MutationObserver(t=>{t.forEach(t=>{if("src"===t.attributeName)return e()})}).observe(t,{attributes:!0})});this.on("same-url",async e=>{await n,window.twoseven.wrapWithPlyr(t,e),await i,this.emit("controller-initialized")}),this.emit("controller-ready")},isValidVideoElement(e){return e.parentNode.classList.contains("download")&&this.onVideo({video:e}),!1}});registerWebpageIframeModule(t)})();