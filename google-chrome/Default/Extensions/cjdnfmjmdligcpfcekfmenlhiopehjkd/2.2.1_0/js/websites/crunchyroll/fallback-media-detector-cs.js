(async()=>{if(window!==window.top)return;const e="[crunchyroll:fallback-media-detector]",t=browser.runtime.connect({name:e}),{location:{href:o}}=window;try{const i=new Crunchyroll.Episode(o);await i.parse();const r=await i.isPremiumVideo(),a=i.config.streams.filter(e=>"adaptive_hls"===e.format),s=(a.find(e=>null===e.hardsub_lang)||a[0]).url;let d;twosevenExtLog(e,"Making request so that media detector detects the stream"),await fetch(s,{mode:"no-cors"});const{episodeNumber:l,episodeTitle:n,seriesTitle:c}=i,m={action:"add-tab-media",from:"websites/crunchyroll/fallback-media-detector-cs",to:"bg/tag-media",data:{videoSelector:"web",videoURL:`hls:${s}`,videoData:{plyrProvider:"html5",title:`${i.seriesTitle} - Episode ${i.episodeNumber}: ${i.episodeTitle}`,poster:i.config.thumbnail.url,premiumContent:r,episodeIndex:l,seasonIndex:d,episodeTitle:n,showTitle:c,module:{name:"crunchyroll",loadMediaFromModule:!0,callModuleBG:!0,addHeaders:!window.twoseven.is.firefox(),useLocalURL:!0},mediaType:"hls",referer:o},referer:o,origin:o,strategies:null,headers:[]}};r&&(m.data.videoData.subtitles=i.config.subtitles),t.postMessage(m)}catch(e){console.error(e)}})();