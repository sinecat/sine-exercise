self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/sine-exercise/', // 缓存启动页面路径
                '/index.html',
                '/main.js',
                '/styles.css',
                '/icon-192x192.png',
                '/icon-512x512.png',
                // 这里也可以加入其他需要缓存的资源
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
