registerModule("crunchyroll",{async moduleHelp(e){const{Episode:t}=Crunchyroll,o=new t(e.videoData.referer);await o.parse(),await o.isPremiumVideo()&&(o.config.subtitles=e.videoData.subtitles);const a=getGroupSettings(SETTINGS.crunchyroll);a[SETTINGS.crunchyroll.forceHardSub]?(o.subtitles=[],twosevenExtLog("modules:crunchyroll:bg","Forcing hardsub")):(await o.getSubtitles(),o.subtitles.forEach(e=>{e.vtt=e.build("vtt")})),e.videoData.episode=o,Object.assign(e.videoData.module,{loadMediaFromModule:!0});const{config:{streams:s}}=o,i=s.filter(e=>"adaptive_hls"===e.format);return e.videoData.streams=i,e.videoData.module.settings=a,e}});