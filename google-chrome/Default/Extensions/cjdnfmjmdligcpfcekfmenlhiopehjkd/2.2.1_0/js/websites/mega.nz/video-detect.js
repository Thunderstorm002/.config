(async()=>{if(window!==window.top)return;const e=new RegExp("https://mega(\\.co)?\\.nz/.*"),t="[mega.nz:media-detector]",o=t,n=browser.runtime.connect({name:t});async function i(t=window.location.href){if(twosevenExtLog(o,`Moving to ${t}`),n.postMessage({action:"clear-tab-media"}),!e.test(t))return void twosevenExtLog(o,`Does not match videoRegex pattern: ${t}`);const i=await waitForDOMNode({type:"tag",value:"body"},document),a=new MutationObserver(e=>{for(const o of e)if("childList"===o.type){if(Array.from(o.addedNodes).length>0){document.querySelector(".download-content video")&&(a.disconnect(),n.postMessage({action:"add-tab-media",from:"websites/mega.nz/video-detect",to:"bg/tag-media",data:{videoSelector:"webpage",videoURL:t,videoData:{title:document.querySelector("span.filename").innerHTML,referer:window.location.href},referer:window.location.href,origin:window.location.origin,strategies:null,headers:[]}}))}}});a.observe(i,{childList:!0,subtree:!0})}window.addEventListener("pushstate",e=>i(`${window.location.origin}${e.detail.data.uri}`)),i()})();