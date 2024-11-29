if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker 注册成功，作用域：', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker 注册失败：', error);
            });
    });
}
