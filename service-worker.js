"use strict";var precacheConfig=[["/adi-portfolio/index.html","64e852d42ee839053fc3cf4dbb7e95e9"],["/adi-portfolio/static/css/main.34831cbc.css","c5a36d5cbbbbf4637c3e7171ee0fd4a9"],["/adi-portfolio/static/js/main.6ca68056.js","1c6483a52aad5df0daf7c29a43cafb32"],["/adi-portfolio/static/media/AdithyaNR-resume.c861eadb.pdf","c861eadb4135973920ae42874c645f08"],["/adi-portfolio/static/media/about.663d874c.png","663d874c2a524469ffc8560046fd67f5"],["/adi-portfolio/static/media/aikya.798e3a76.png","798e3a76962b547337566805e990331b"],["/adi-portfolio/static/media/bapspatil.3212091b.png","3212091b4bd6443705eb9560eddfa4f2"],["/adi-portfolio/static/media/bg.4abcddc0.png","4abcddc01637ccef93bf7073581f539b"],["/adi-portfolio/static/media/bgmain.e32929d7.png","e32929d76333b20c13124d04a2cd5a7e"],["/adi-portfolio/static/media/contact.797f50ca.png","797f50ca4b9c8b3ea469ce3ef6336bfc"],["/adi-portfolio/static/media/dugout.7df8c000.png","7df8c0005f3a4cdee3454b88d81cfb64"],["/adi-portfolio/static/media/mountain.9036c664.png","9036c664b9e7748da0ee790b2ad1ce4e"],["/adi-portfolio/static/media/rnsit.64c92cae.png","64c92cae04663649b183cc76d66326eb"],["/adi-portfolio/static/media/shutterup.c75ab688.png","c75ab688afa200595b25a85527a2f20e"],["/adi-portfolio/static/media/wallart.bbcd9c1d.png","bbcd9c1dc66405b909a07d7a8daa7ab7"],["/adi-portfolio/static/media/webdev.adbdc40f.png","adbdc40f6cee17281f00162961acdf73"],["/adi-portfolio/static/media/yelpcamp.d7fa15c9.png","d7fa15c927e64b4c22b09507c94720a4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/adi-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});