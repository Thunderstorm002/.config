browser.tabs.onUpdated.addListener((e,t,o)=>{"loading"===t.status&&-1!==o.url.indexOf("vimeo")&&axios.get(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(o.url)}`).then(t=>{const{data:a}=t,{video_id:i,thumbnail_url:d,title:r}=a,n={videoSelector:"vimeo",videoURL:`${i}`,videoData:{title:r,poster:d,plyrProvider:"vimeo",plyrType:"video"},from:"vimeo/bg/contextmenu.js",tabId:e,referer:o.url,origin:o.url,strategies:null,headers:[]};delete t.data.description,Object.assign(n.videoData,{publisher:n.videoData.author_name,...t.data}),addTabMedia(e,0,n)}).catch(()=>{})});