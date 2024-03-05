let version = 'version-0.3.1';

let url = location.host;
console.log('funcionando')
const installDocument = () => { // esto es una funcion para registar el cache
    return caches.open(version).then(cache => {
        console.log('Caché abierta');
        return cache.addAll([
            `index.html`,
            `estilo.css`,
            `codigo.js`,
            `media/icons/close.png`,
            `media/errorAnimation.png`,
            `media/icono.png`,
            `media/Cancelar invitacion.mp3`,
            `media/personalizacion/NightMode.png`,
            `media/personalizacion/dayMode.png`,
            `media/personalizacion/defaultMode.png`
                  ]);
    });
}

self.addEventListener('install', (event) => { // primer evento install donde llamos a installDocument
    event.waitUntil(installDocument());
});

self.addEventListener('activate', (event) => { // activate. cada vez que se actualiza la pagina se activa este evento donde verifica si hay una actualizacion
        caches.keys().then(key => { // abrir cahce
     key.map(cache => {
        if(version !== cache) {
           caches.delete(cache)
        }
     })
        })
});

self.addEventListener('fetch', async (e) => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });