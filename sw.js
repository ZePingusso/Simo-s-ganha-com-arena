const CACHE_NAME = "agenda-v1";
const ARQUIVOS = [
    "./",
    "index.html",
    "style.css",
    "app.js"    
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(
                ARQUIVOS
            );
        })
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});

self.addEventListener("fetch", event => {
    if (event.request.url.endsWith("/teste-sw")) {
        event.respondWith(new Response("Resposta criada pelo Service Worker!"));
        return;
    }
});