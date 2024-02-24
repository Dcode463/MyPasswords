let version = 'version-0.1.6';
let url = location.host;
console.log('funcionando')
const installDocument = () => { // esto es una funcion para registar el cache
    return caches.open(version).then(cache => {
        console.log('Caché abierta');
        return cache.addAll([
            `index.html`,
            `estilo.css`,
            `codigo.js`
        ]);
    });
}

const update = () => new Promise ((resolve)=> {
  let openCache = caches.keys().then(key => {
    key.map(cache => {
     if(version !== cache) {
       caches.delete(cache)
     }
    })
    resolve('')
})
})
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
 update();
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });