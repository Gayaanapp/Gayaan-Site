try{(function(w,d){zaraz.debug=(ey="")=>{document.cookie=`zarazDebug=${ey}; path=/`;location.reload()};window.zaraz._al=function(dB,dC,dD){w.zaraz.listeners.push({item:dB,type:dC,callback:dD});dB.addEventListener(dC,dD)};zaraz.preview=(dA="")=>{document.cookie=`zarazPreview=${dA}; path=/`;location.reload()};zaraz.i=function(cq){const cr=d.createElement("div");cr.innerHTML=unescape(cq);const cs=cr.querySelectorAll("script");for(let ct=0;ct<cs.length;ct++){const cu=d.createElement("script");cs[ct].innerHTML&&(cu.innerHTML=cs[ct].innerHTML);for(const cv of cs[ct].attributes)cu.setAttribute(cv.name,cv.value);d.head.appendChild(cu);cs[ct].remove()}d.body.appendChild(cr)};zaraz.f=async function(dx,dy){const dz={credentials:"include",keepalive:!0,mode:"no-cors"};if(dy){dz.method="POST";dz.body=new URLSearchParams(dy);dz.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(dx,dz)};window.zaraz._p=async U=>new Promise((V=>{if(U){U.e&&U.e.forEach((W=>{try{new Function(W)()}catch(X){console.error(`Error executing script: ${W}\n`,X)}}));Promise.allSettled((U.f||[]).map((Y=>fetch(Y[0],Y[1]))))}V()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(dE,dF,dG){return new Promise(((dH,dI)=>{const dJ={name:dE,data:{}};for(const dK of[localStorage,sessionStorage])Object.keys(dK||{}).filter((dM=>dM.startsWith("_zaraz_"))).forEach((dL=>{try{dJ.data[dL.slice(7)]=JSON.parse(dK.getItem(dL))}catch{dJ.data[dL.slice(7)]=dK.getItem(dL)}}));Object.keys(zaraz.pageVariables).forEach((dN=>dJ.data[dN]=JSON.parse(zaraz.pageVariables[dN])));Object.keys(zaraz.__zcl).forEach((dO=>dJ.data[`__zcl_${dO}`]=zaraz.__zcl[dO]));dJ.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
dJ.data={...dJ.data,...dF};dJ.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(dJ)}).catch((()=>{
//
return fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(dJ)})})).then((function(dQ){zarazData._let=(new Date).getTime();dQ.ok||dI();return 204!==dQ.status&&dQ.json()})).then((async dP=>{await zaraz._p(dP);"function"==typeof dG&&dG()})).finally((()=>dH()))}))};zaraz.set=function(dR,dS,dT){try{dS=JSON.stringify(dS)}catch(dU){return}prefixedKey="_zaraz_"+dR;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[dR];if(void 0!==dS){dT&&"session"==dT.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,dS):dT&&"page"==dT.scope?zaraz.pageVariables[dR]=dS:localStorage&&localStorage.setItem(prefixedKey,dS);zaraz.__watchVar={key:dR,value:dS}}};for(const{m:dV,a:dW}of zarazData.q.filter((({m:dX})=>["debug","set"].includes(dX))))zaraz[dV](...dW);for(const{m:dY,a:dZ}of zaraz.q)zaraz[dY](...dZ);delete zaraz.q;delete zarazData.q;zaraz.spaPageview=()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")};zaraz.fulfilTrigger=function(di,dj,dk,dl){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[di]||(zaraz.__zarazTriggerMap[di]="");zaraz.__zarazTriggerMap[di]+="*"+dj+"*";zaraz.track("__zarazEmpty",{...dk,__zarazClientTriggers:zaraz.__zarazTriggerMap[di]},dl)};zaraz._processDataLayer=dn=>{for(const dp of Object.entries(dn))zaraz.set(dp[0],dp[1],{scope:"page"});if(dn.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(dn.event))return;let dq={};for(let dr of dataLayer.slice(0,dataLayer.indexOf(dn)+1))dq={...dq,...dr};delete dq.event;dn.event.startsWith("gtm.")||zaraz.track(dn.event,dq)}};window.dataLayer=w.dataLayer||[];const dm=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...ds){let dt=dm.apply(this,ds);zaraz._processDataLayer(ds[0]);return dt}});dataLayer.forEach((du=>zaraz._processDataLayer(du)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((ew=>clearTimeout(ew)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((ex=>ex.item.removeEventListener(ex.type,ex.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout(zaraz.spaPageview,100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout(zaraz.spaPageview,100)}};zaraz._c=gc=>{const{event:gd,...ge}=gc;zaraz.track(gd,{...ge,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(gb=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.__zarazMCListeners={"google-analytics_v4_20ac":["visibilityChange"]};zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","x=new XMLHttpRequest,x.withCredentials=!0,x.open(\"POST\",\"https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=49971608-276e-4600-9b7c-065fc348b780&_u=KGDAAEADQAAAAC%7E&z=1203086138\",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith(\"1g\") && domain.length > 2) {fetch(\"https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=49971608-276e-4600-9b7c-065fc348b780&_u=KGDAAEADQAAAAC%7E&z=1203086138&slf_rd=1\".replace(\"www.google.com\", \"www.google.\"+domain.slice(2)));}}},x.send();"],"f":[["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=49971608-276e-4600-9b7c-065fc348b780&_u=KGDAAEADQAAAAC%7E&z=1203086138&slf_rd=1",{}]]})})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;}