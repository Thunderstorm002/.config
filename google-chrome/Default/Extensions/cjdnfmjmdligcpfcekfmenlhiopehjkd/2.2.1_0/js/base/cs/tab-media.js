!function(){const e=browser.runtime.connect({name:"tab-media-cs"});function a(e){document.defaultView.postMessage({action:"twoseven-ext-initialize-modal",data:e.media},"*"),document.querySelector("#twoseven-ext-tab-media-modal").style.display="block"}e.onMessage.addListener(e=>{const t=e;if(t.action)switch(t.action){case"show-tab-media-popup":a(t)}}),window.showTabMedia=a,window.addEventListener("message",a=>{if(!a.data||!a.data.__evt_name)return;const t={action:a.data.__evt_name};let n=!1;switch(a.data.__evt_name){case"trigger-watch":{const{data:{mediaEntry:e,isOnTwoSeven:n}}=a;n?injectScript(`\n            Videoshare.onSourceChange('${e.videoSelector}', ${JSON.stringify(e)})\n            app.$store.commit('currentSelector', '${e.videoSelector}')\n          `,!0):Object.assign(t,{to:"tab-media-bg",data:a.data});break}case"xhr-help":Object.assign(t,{to:"common-media-header-modifier",data:a.data}),n=!0;break;case"modal-hide":break;default:console.warn(`Unimplemented message: '${a.data.__evt_name}'`)}if(n){const t=a.data.ack.event;e.onMessage.addListener(function n(o){o.action&&o.action===t&&(e.onMessage.removeListener(n),a.source.postMessage({action:t},"*"))})}e.postMessage(t)})}();