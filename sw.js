const CACHE_NAME = "v1_cache_lista_tareas";
const urlsToCache = [
  "./",               // La raíz del sitio
  "./index.html",     // Archivo principal
  "styles/styles.css",     // Archivo CSS
  "scripts/index.js",       // Archivo JS principal
  "assets/favicon.png" // Icono pequeño
];

// Evento de instalación del Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Intentando guardar en caché los archivos...");
      return Promise.all(
        urlsToCache.map((url) => {
          console.log(`Intentando almacenar: ${url}`);
          return cache.add(url).catch((error) => {
            console.error(`Error al almacenar ${url}:`, error);
          });
        })
      );
    })
  );
});
