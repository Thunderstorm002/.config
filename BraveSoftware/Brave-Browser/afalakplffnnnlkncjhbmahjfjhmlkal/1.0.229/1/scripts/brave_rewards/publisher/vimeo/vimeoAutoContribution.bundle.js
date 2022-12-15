(()=>{"use strict";const e="mnojpmjdmbbfmejpflffifhffcmidifd";let t=null;const r=()=>t,n=(e,t)=>e&&t?`${e}_${t}`:"",i=(e,t)=>`${e}#channel:${t}`,o=(e,t,r)=>{if(e.length<t.length)return"";const n=e.indexOf(t);if(-1===n)return"";const i=n+t.length,o=e.indexOf(r,i);let a="";return o!==i?a=-1!==o&&o>i||-1!==o?e.substring(i,o):e.substring(i):""===r&&(a=e.substring(i)),a},a=(e,t)=>`${e}: ${t.statusText} (${t.status})`;RegExp(/&(?:amp|lt|gt|quot|#(0+)?39);/g.source);let s=!1;const c="vimeo",l=e=>{if(!e)return"";const t=o(e,'"display_name":"','"');if(!t)return"";let r=null;try{r=JSON.parse(`{"brave_publisher":"${t}"}`)}catch(e){throw new Error(`Error parsing publisher name from video page: ${e}`)}return r.brave_publisher},u=e=>{if(!e)return"";let t=o(e,'<meta property="al:ios:url" content="vimeo://app.vimeo.com/users/','"');return t||(t=o(e,'<meta property="al:android:url" content="vimeo://app.vimeo.com/users/','"'),t||o(e,'<link rel="canonical" href="/','"'))},d=async()=>{const e=location.href,t=await fetch(e);if(!t.ok){const e=a("Publisher request failed",t);throw new Error(e)}const r=await t.text();if(!r)throw new Error("Publisher response empty");let s="",d="",m=u(r);if(m)s=(e=>{if(!e)return"";return l(e)||o(e,'<meta property="og:title" content="','"')})(r),s||(s=m);else{if(s=l(r),!s)throw new Error("Invalid publisher name");if(m=(e=>e?o(e,'"creator_id":',","):"")(r),!m)throw new Error("Invalid user id");const e=(e=>e?o(e,'<link rel="canonical" href="https://vimeo.com/','"'):"")(r);if(!e)throw new Error("Invalid video id")}return d=n(c,m),{url:e,publisherKey:i(c,m),publisherName:s,mediaKey:d,favIconUrl:""}};let m=0,h="";const p=new Set,f=()=>{m=Date.now()},b=e=>{e&&(e.url||"complete"===e.status)&&location.href!==h&&(h=location.href,f())},w=()=>{(async()=>{return(e=location.pathname)&&/^\/\d+$/.test(e)?(async()=>{const e=location.href,t=encodeURI(e),r=await fetch(`https://vimeo.com/api/oembed.json?url=${t}`);if(!r.ok)return d();const o=await r.json();if(!o)return d();const s=o.author_url;if(!s)return d();const l=o.author_name;if(!l)throw new Error("Invalid publisher name");const m=o.video_id;if(!m||0===m)return d();const h=await fetch(s);if(!h.ok){const e=a("Publisher request failed",h);throw new Error(e)}const p=await h.text(),f=u(p);if(!f)throw new Error("Invalid user id");const b=i(c,f),w=n(c,m.toString());if(!w)throw new Error("Invalid media key");const v=(e=>e?`https://i.vimeocdn.com/portrait/${e}_300x300.webp`:"")(f);return{url:s,publisherKey:b,publisherName:l,mediaKey:w,favIconUrl:v}})():d();var e})().then((e=>{const t=!p.has(e.mediaKey);t&&p.add(e.mediaKey);const i=e.mediaKey.replace(`${c}_`,""),o=Math.round((Date.now()-m)/1e3);((e,t,i,o)=>{if(!t)return;const a=r();a&&a.postMessage({type:"MediaDurationMetadata",mediaType:e,data:{mediaKey:n(e,t),duration:i,firstVisit:o}})})(c,i,o,t)})).catch((e=>{throw new Error(`Failed to retrieve publisher data: ${e}`)}))};var v;chrome.extension.inIncognitoContext||(v=e=>{e?(document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?f():w()})),"visible"===document.visibilityState&&f(),((e,t)=>{if(s)return;s=!0;const n=r();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),n.onMessage.addListener((function(e){e.data&&"OnUpdatedTab"===e.type&&t(e.data.changeInfo)})))})(c,b)):console.error("Failed to initialize communications port")},t?v(!0):(chrome.runtime.sendMessage(e,{type:"SupportsGreaselion"},(function(r){!chrome.runtime.lastError&&r&&r.supported&&(t=chrome.runtime.connect(e,{name:"Greaselion"}),v(!0))})),setTimeout((()=>{t||(t=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),v(!0))}),100)),console.info("Greaselion script loaded: vimeoAutoContribution.ts"))})();