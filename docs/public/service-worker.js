const CACHE_NAME = 'docs-site-cache-v1'; // 缓存名称和版本
const CACHE_FILES = [
    '/',                  // 首页
    '/index.html',        // 主入口页面
    '/styles.css',        // 样式文件
    '/main.js',           // 主脚本文件
    '/icon-192x192.png',  // 应用图标
    '/icon-512x512.png',  // 应用图标
    // 根据站点实际情况添加其他需要立即缓存的文件
];

// 安装事件：缓存静态资源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_FILES);
        })
    );
    self.skipWaiting(); // 强制让新的 Service Worker 生效
});

// 激活事件：清理旧缓存
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache); // 删除旧缓存
                    }
                })
            );
        })
    );
    self.clients.claim(); // 立即接管页面控制权
});

// 拦截网络请求并提供缓存响应
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // 如果缓存中有响应，则直接返回
                return cachedResponse;
            }
            // 如果缓存中没有，尝试从网络获取
            return fetch(event.request)
                .then((networkResponse) => {
                    // 动态缓存新资源
                    if (
                        networkResponse &&
                        networkResponse.status === 200 &&
                        networkResponse.type === 'basic'
                    ) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // 离线模式下提供默认页面或离线提示
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html'); // 返回首页
                    }
                });
        })
    );
});
