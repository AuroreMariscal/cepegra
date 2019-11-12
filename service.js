const version = "1.0.0"

self.addEventListener("install", event => {
    console.log("Install WS Worked " + version)
    return self.skipWaiting()
})

self.addEventListener("activate", event => {
    console.log("WS Worked is activated " + version)
    //return self.skipWaiting()
})

self.addEventListener("fetch", function(){
    //met en écoute le service
})

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.precaching.precacheAndRoute([
        {
            "url": "index.html"
        },
        {
            "url": "style.css"
        },
        {
            "url": "manifest.json"
        },
        {
            "url": "icon-96-96.png"
        },
        {
            "url": "favicon.ico"
        },
        {
            "url": "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
        },
    ])

    // On lui demande de rajouter des stratégies de cache
    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg|css|js)$/,
        new workbox.strategies.CacheFirst({
          cacheName: "design",
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        }),
      );

    workbox.routing.registerRoute(
        "https://api.irail.be/stations/?format=json",
        new workbox.strategies.NetworkFirst({
            cacheName: "api-cache",
            plugins: [
                new workbox.expiration.Plugin({
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        })
    )

    } else {
    console.log(`Boo! Workbox didn't load 😬`);
}