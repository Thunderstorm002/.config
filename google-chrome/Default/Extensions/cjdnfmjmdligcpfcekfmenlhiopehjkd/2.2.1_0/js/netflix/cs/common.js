function getPlayPauseButton(){return document.querySelector(".player-play-pause.icon-player-play")||document.querySelector(".button-nfplayerPlay")||document.querySelector(".button-nfplayerPause")}async function getMetadata(t){try{t||(t=(t=new URI(window.location.href)).removeQuery(t.query(!0)).toString());const e=`https://www.netflix.com/api/shakti/${"vf15cf457"}/metadata?movieid=${new URI(t).relativeTo("https://www.netflix.com/watch/").toString()}`,o=await axios.get(e);if(200!==o.status)throw new Error(o.data);const{data:{video:n}}=o;let a,r,i,s,{title:c=t,type:u,artwork:[{url:l}]}=n;switch(u){case"show":{const{currentEpisode:e,seasons:o}=n;i=c;for(let n=0;n<o.length;n++){const i=o[n],{episodes:u}=i,l=u.findIndex(t=>t.id===e),d=u[l];if(!d)continue;a=n+1,r=l+1;const{title:w}=d;s=w,c===t?c=w:c+=` - ${w}`}break}}return{title:c,poster:l,seasonIndex:a,episodeIndex:r,showTitle:i,episodeTitle:s}}catch(t){return{}}}injectScript(`window.getPlayPauseButton = ${getPlayPauseButton.toString()}`);