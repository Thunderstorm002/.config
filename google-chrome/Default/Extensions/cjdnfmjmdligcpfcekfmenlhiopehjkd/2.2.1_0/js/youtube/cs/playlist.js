(async()=>{const t=browser.runtime.connect({name:"youtube:playlist"});async function e(){const e=function(t){const e=new URL(t);return new URLSearchParams(e.search).get("list")}(window.location.href);if(!e)return;let a=[...document.querySelectorAll("script")].find(t=>t.text.includes("var ytInitialData ="));a||(a=await waitForDOMNode({type:"check",value:t=>"SCRIPT"===t.tagName&&t.text.includes("var ytInitialData =")}));const n=a.text.match(/var ytInitialData = (\{.*?\});/),i=JSON.parse(n[1]),{contents:{twoColumnWatchNextResults:{playlist:{playlist:{title:o,contents:s}}}}}=i,l=[];for(const t of s){const{playlistPanelVideoRenderer:{videoId:e,title:{simpleText:a},longBylineText:{runs:[{text:n}]},thumbnail:{thumbnails:[{url:i}]}}}=t;l.push({videoSelector:"youtube",videoURL:e,videoData:{title:a,poster:i,publisher:n},strategies:null,headers:[],referer:window.location.href})}t.postMessage({action:"add-tab-media",data:{videoURL:e,entryType:"playlist",videoData:{title:`Playlist - ${o}`,poster:l[0].videoData.poster},playlist:l,strategies:null,headers:[],referer:window.location.href}})}window.addEventListener("pushstate",e),document.addEventListener("DOMContentLoaded",e)})();