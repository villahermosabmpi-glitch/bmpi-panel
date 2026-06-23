// Service worker mínimo: requerido por los navegadores para permitir
// la instalación de la app en pantalla de inicio. No implementa modo
// offline ni cacheo: cada vez que el técnico abre la app, los datos
// se cargan en vivo desde Supabase, igual que en el navegador normal.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Deja pasar todas las peticiones de red sin interceptar ni cachear.
self.addEventListener('fetch', (event) => {
  // Intencionalmente vacío: no cacheamos nada, todo va directo a la red.
});
