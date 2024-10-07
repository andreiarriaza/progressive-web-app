/* Un ServiceWorker es un archivo JavaScript que funciona en segundo plano. */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    /* Acá se debe indicar la ubicación del archivo "sw.js" tomando como referencia la ubicación del archivo "index.html". */
    .register("./assets/js/sw.js")
    .then((reg) => console.log("Registro de SW (Service Worker) exitoso", reg))
    .catch((err) =>
      console.error("Error al tratar de registrar el SW (ServiceWorker)", err)
    );
}
