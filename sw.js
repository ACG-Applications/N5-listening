// Service Worker for N5-listening
const CACHE_NAME = 'n5-listening-v1';
const ASSETS = [
  '/N5-listening/',
  '/N5-listening/index.html',
  '/N5-listening/manifest.json',
  '/N5-listening/js/sw.js',
  // Data files (add these if they exist)
  '/N5-listening/js/data/sentences.js',
  '/N5-listening/js/data/sprints.js',
  '/N5-listening/js/data/stories.js',
  '/N5-listening/js/data/storiesQ&A.js',
  '/N5-listening/js/data/wordDict.js',
  // CSS files (if you have them)
  // '/N5-listening/css/style.css',
  // JS files (if you have them)
  // '/N5-listening/js/app.js',
  // Icons (optional but good to cache)
  // '/N5-listening/images/icons/icon-192.png',
  // '/N5-listening/images/icons/icon-512.png',
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching N5 Listening assets...');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('🧹 Cleaning old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          return cached;
        }
        return fetch(event.request)
          .then(response => {
            // Cache the fetched response for future
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
            return response;
          });
      })
      .catch(() => {
        // Optional: Return offline fallback page
        return caches.match('/N5-listening/offline.html');
      })
  );
});