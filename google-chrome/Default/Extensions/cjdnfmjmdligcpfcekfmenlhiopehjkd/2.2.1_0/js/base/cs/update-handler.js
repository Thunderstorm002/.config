(()=>{if("https://blog.twoseven.xyz"!==window.location.origin)return;let e;const n=browser.runtime.connect({name:"update-handler-cs"});n.onMessage.addListener(n=>{e=n.version}),n.postMessage({action:"get-extension-version"});const t=setInterval(()=>{if(!e)return;clearInterval(t);const n=new URI(window.location.href).query(!0),r="true"===n.install,o=n.version,s=document.querySelector("#version");if(r){const e=document.querySelector(".on-install-header");if(!e)return;e.classList.remove("hide");const n=e.querySelector(".on-install");if(!n)return;n.classList.remove("hide")}s&&(s.innerHTML=`v${o}`)})})();