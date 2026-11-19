// Service Worker for N5-listening
const CACHE_NAME = "n5-listening-v3"; // Bump this version!
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  // Data files
  "./js/data/storiesQ&A.js",
  "./images/icons/icon-192.png",
  "./images/icons/icon-512.png",
];

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("📦 Caching N5 Listening assets...");
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting()),
  );
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              console.log("🧹 Cleaning old cache:", cache);
              return caches.delete(cache);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cached) => {
        if (cached) {
          return cached;
        }
        return fetch(event.request).then((response) => {
          // Cache the fetched response for future
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        });
      })
      .catch(() => {
        // Optional: Return offline fallback page
        return caches.match("./offline.html");
      }),
  );
});
