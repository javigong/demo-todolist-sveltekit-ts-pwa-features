// src/service-worker.ts

/// <reference lib="WebWorker" />

const CACHE_NAME = 'svelte-todo-cache-v1';

self.addEventListener('install', (event: Event) => {
  (event as ExtendableEvent).waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/global.css',
        '/build/bundle.css',
        '/build/bundle.js',
        '/manifest.json',
        '/icon.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event: Event) => {
  (event as FetchEvent).respondWith(
    caches.match((event as FetchEvent).request).then((response) => {
      return response || fetch((event as FetchEvent).request);
    })
  );
});