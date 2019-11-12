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
            "url": "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        },
        {
            "url": "icon-96-96.png"
        },
    ])
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }