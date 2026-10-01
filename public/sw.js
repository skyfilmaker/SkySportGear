/* Service worker minimale, solo per rendere l'app "installabile" come PWA
   su telefono/desktop. Non mette nulla in cache di proposito: l'app ha già
   un suo meccanismo di aggiornamento (il banner "È disponibile una versione
   più recente" basato su version.json) e un service worker che mette in
   cache le pagine lo romperebbe, continuando a servire una versione vecchia.
   Qui ci si limita quindi a "passare" ogni richiesta alla rete come se il
   service worker non ci fosse. */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Nessuna intercettazione: la richiesta prosegue normalmente verso la rete.
});
