"use strict";var precacheConfig=[["./index.html","0e5a452636e893a6cf1bd3c3069ab6e6"],["./static/css/main.c04db788.css","5cd96542ff32a99e565e6606c8a06b94"],["./static/js/main.08bd64f7.js","87369809c2e2c85b3f75c68332f7b57f"],["./static/media/1.e5f5b0bc.png","e5f5b0bc955e3d65ad74283844ecfe95"],["./static/media/2.bcccb4d4.png","bcccb4d432dab92caf7264f662f093fa"],["./static/media/VideoJS.46ac6629.eot","46ac6629168546c71dbf115992aa4be9"],["./static/media/huanying1.31d22818.png","31d228187f1d95ed6a1ce97ae9147640"],["./static/media/huanying2.f81608df.png","f81608df9333e5e15bb43a764cbaa441"],["./static/media/huanying3.33719950.png","33719950d29e170ed0fb8991a023aa4f"],["./static/media/icon.5ec522bf.png","5ec522bf0fb56ddd3025563e3979b2a2"],["./static/media/news.a70a76e8.png","a70a76e8fc3a959180f212ce3cf31eb2"],["./static/media/plot1.6b6e4982.png","6b6e4982bbb1e3fe67351fc87385cb7b"],["./static/media/plot2.a7dca16d.png","a7dca16df3e0ce3f5695bc72ee585a1d"],["./static/media/plot3.65dbbc95.png","65dbbc954e91ed046a92df8b07f9080b"],["./static/media/plot4.2f36629f.png","2f36629ffb0718b2c043fe2094e6ab0c"],["./static/media/plot5.af556963.png","af5569636b42cd3caddd5fd82172eab9"],["./static/media/touxiangkuang.8702fa22.png","8702fa224a523254a5c52a2e4dc3a22e"],["./static/media/zhuceicon.89100281.png","891002813dc0f1821fa6bcf27feaae10"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="./index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});