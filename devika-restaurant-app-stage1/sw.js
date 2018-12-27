let CACHE_NAME = 'my-restaurant-site-cache-22';

self.addEventListener('fetch', function(event) {
 if (event.request.method === 'GET') {
   event.respondWith(
     caches.match(event.request).then(function(response) {
       console.log('All requests: '+event.request.url);
       return response || Promise.all(
         [fetch(event.request), caches.open(CACHE_NAME)]
       ).then(function(values) {
         console.log(values[1]);
         let cache = values[1];
         cache.add(event.request);
         return values[0];
       })
     })
   );
 }
 return;
});
