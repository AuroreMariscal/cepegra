const version = "1.0.0"

self.addEventListener("install", event => {
    console.log("Install WS Worked " + version)
    return self.skipWaiting()
})

self.addEventListener("activate", event => {
    console.log("WS Worked is activated " + version)
    return self.skipWaiting()
})