/* Un ServiceWorker es un archivo JavaScript que funciona en segundo plano. */

if ("ServiceWorker" in Navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registro de SW (Service Worker) exitoso", reg))
    .catch((err) =>
      console.error("Error al tratar de registrar el SW (ServiceWorker)")
    );
}
