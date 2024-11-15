/* Un ServiceWorker es un archivo JavaScript que funciona en segundo plano. */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/progressive-web-app/assets/js/sw.js")
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker:", error);
      });
  });
}
