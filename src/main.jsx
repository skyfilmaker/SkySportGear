import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);

// Registra il service worker solo per rendere l'app installabile come PWA
// (icona su schermata Home/desktop). Non mette nulla in cache: l'app
// continua ad aggiornarsi tramite il suo banner "versione più recente".
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Se la registrazione fallisce (es. in locale senza https), l'app
      // continua a funzionare normalmente, solo senza l'opzione "installa".
    });
  });
}
