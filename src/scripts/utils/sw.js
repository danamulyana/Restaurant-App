import 'regenerator-runtime';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { setCacheNameDetails } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

setCacheNameDetails({
  prefix: 'dn-resto-app',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.mode === 'navigate',

  new NetworkFirst({
    cacheName: 'my-pages-cache',
  }),
);

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'dn-image-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 60,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'style'
    || request.destination === 'script'
    || request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'dn-assets-cache',
  }),
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
