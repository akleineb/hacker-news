const getFilesToCache = async () => {
    const response = await fetch('/asset-manifest.json').catch(error => {
        console.info('Currently offline, page will respond with cached files.');

        return [];
    });
    const data = await response.json();

    if (!data.files || !data.entrypoints) {
        return [];
    }

    let files = Object.values(data.files);
    files.push('/');
    files.push('/favicon.ico');

    return files;
};

const cacheResources = async () => {
    const urlsToCache = await getFilesToCache();
    const cache = await caches.open('hacker-news');
    return cache.addAll(urlsToCache);
}

this.addEventListener('install', event =>
    event.waitUntil(cacheResources())
);

this.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(function (response) {
            return response || fetch(event.request);
        })
    );
});