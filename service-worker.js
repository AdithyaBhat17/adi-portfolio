"use strict";var precacheConfig=[["/adi-portfolio/index.html","d47f572a6686f7e02a83513eb491c64e"],["/adi-portfolio/static/css/main.4d86c8b8.css","cf456813abcb23bd6cb3917f3669a34f"],["/adi-portfolio/static/js/main.6cf97a7d.js","3989d3f28e524f9036a207ba268869dd"],["/adi-portfolio/static/media/AdithyaNR-resume.c861eadb.pdf","c861eadb4135973920ae42874c645f08"],["/adi-portfolio/static/media/about.7c364ce9.png","7c364ce96f07d18068872a556e4e2dd0"],["/adi-portfolio/static/media/aikya.432fdd41.png","432fdd415cfcc406040c8a85297c70ce"],["/adi-portfolio/static/media/bapspatil.88fd0473.png","88fd047308ba3cb4e59ba013d65e5108"],["/adi-portfolio/static/media/bg.b0ee5960.png","b0ee5960d0bab6b47d60b62931a1df6b"],["/adi-portfolio/static/media/bgmain.fbcd5c7c.png","fbcd5c7c0ae547834c9ffc1a84128a3a"],["/adi-portfolio/static/media/dugout.660dec23.png","660dec23046c2dfedc819696585d3d7a"],["/adi-portfolio/static/media/mountain.8cce5963.png","8cce59631d4b46f768b129b4017f9236"],["/adi-portfolio/static/media/rnsit.0f4ad2f4.png","0f4ad2f42b0f3a5c71bc7e9dfba8da21"],["/adi-portfolio/static/media/shutterup.85c9d93c.png","85c9d93c28b832a83883c13c36d55628"],["/adi-portfolio/static/media/wallart.07add1d0.png","07add1d068be1a62aa268afe60ed0be5"],["/adi-portfolio/static/media/webdev.7eced147.png","7eced1471514a1ab35677c7d8c70899b"],["/adi-portfolio/static/media/yelpcamp.221ca538.png","221ca538f550124068218e4975b69a77"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/adi-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});