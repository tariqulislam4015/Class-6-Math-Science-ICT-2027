/* Class 6–8 (Math, Science, ICT) 2027 — offline cache (GitHub Pages / PWA) */
var CACHE='class6-8-msi-2027-v5';
var CORE=['./','index.html','svg_m.js','svg_s.js','svg_i.js','icon.svg','icon-192.png','icon-512.png','me.jpg','manifest.webmanifest','data_6m.js','data_6s.js','data_6i.js','data_7m.js','data_7s.js','data_7i.js','data_8m.js','data_8s.js','data_8i.js'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(CORE);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==CACHE;}).map(function(x){return caches.delete(x);}));}));self.clients.claim();});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(res){if(res.ok){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,cp);});}return res;});}));
});
