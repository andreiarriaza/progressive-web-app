/* Un ServiceWorker es un archivo JavaScript que funciona en segundo plano. */

/* Aquí se verifica si la API de Service Workers está disponible en el navegador del usuario.
La propiedad navigator.serviceWorker solo estará definida en navegadores que soporten esta funcionalidad. */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    /* Acá se debe indicar la ubicación del archivo "sw.js" tomando como referencia la ubicación del archivo "index.html".
     */

    /* register() es un método que registra el archivo del Service Worker. */
    /* Se usó una ruta absoluta "/progressive-web-app/" para evitar problemas con el registro del Service Worker (solo hay un service worker en toda la aplicación, por lo que son necesarias rutas absolutas para que las páginas mates, libros, contacto y aperturas puedan utilizar el mismo service worker sin problema). Se debe recordar que esta progressive web app fue creada dentro del repositorio de github llamado "progressive-web-app", el cual funciona como un subdominio de la página raíz (dominio principal): "https://andreiarriaza.github.io", por ello se colocó la ruta "/progressive-web-app". */
    .register("/progressive-web-app/sw.js")
    /* El método register() devuelve una promesa que se puede manejar con .then() y .catch().
    Si el Service Worker se registra correctamente, el navegador devolverá un objeto reg (registration).

    Si se detecta que existe un valor "reg" se despliega el mensaje de éxito. 
    */
    .then((reg) => console.log("Registro de SW (Service Worker) exitoso", reg))
    /* Si hay algún error, se ejecuta el "catch()". */
    .catch((err) =>
      console.error("Error al tratar de registrar el SW (ServiceWorker)", err)
    );
}
