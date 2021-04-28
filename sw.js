const someone = 'static-data';
const assets = [
    '/index.html',
    '/about.html',
    '/styles/style.css',
    '/js/app.js',
    '/img/h1.jpg',
    '/img/h2.jpg',
    '/img/h3.jpg',
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
]


self.addEventListener('install',(e)=>{
    // console.log('service worker installed')
    e.waitUntil(
        caches.open(someone).then( cache => {
            cache.addAll(assets)
        })
    )
    
})
//
self.addEventListener('activate',e =>{
    console.log('activated')
    
})

self.addEventListener("fetch",evt => {
    evt.respondWith(
        caches.match(evt.request).then(cachesRes=>{
            return cachesRes || fetch(evt.request);
        })
    )
})