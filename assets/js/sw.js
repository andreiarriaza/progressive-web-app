/* IMPORTANTE: para corroborar que, después de agregar todo el código de este archivo, el ServiceWorker fue detectado correctamente, se deben seguir los siguientes pasos: 


  Corroborar que el ServiceWorker sea detectado:

        1. Acceder a las Herramientas para Desarrolladores de Chrome. 
        2. Acceder a la sección "Application" (Aplicación).
        3. En la barra de navegación del lado izquierdo, seleccionar "Service workers".
        4. Se muestra la casilla "Source", y en ella de debería mostrar el nombre del archivo de ServiceWorker, el cual, en este caso, se llama "sw.js".
        5. Por otro lado, al acceder a la consola, se debería mostrar el mensaje: "Registro de SW (Service Worker) exitoso"


  Corroborar que se haya creado el Caché en el dispositivo: 
        1. Acceder a las Herramientas para Desarrolladores de Chrome. 
        2. Acceder a la sección "Application" (Aplicación).
        3. En la barra de navegación del lado izquierdo, seleccionar "Cache storage".
        4. Ya debería mostrarse el chaché llamado "v1_chess_mate_club", que se creón dentro de este archivo y el listado de URL que se agregarón dentro
           de la constante "urlsToCache".

        5. Si las variables no se muestran correctamente al acceder en las Herramientas para Desarrolladores de Chrome a "Application/Cache Storage",
           es necesario reinicar el Service Worker. Para reinicarlo, se deben seguir los siguientes pasos: 
               - Acceder a las Herramientas para Desarrolladores de Chrome. 
               - Seleccionar la opción "Application".
               - En la barra de navegación de lado izquierdo, seleccionar "Service workers".
               - En el lado derecho, se muestra el botón "Update". Dar clic en él. 
               - Listo.

      

        
        */

/* Las AppProgresivas permiten almacenar todos los recursos estáticos en el disco duro del dispositivo en el que se
esté visualizando la aplicación. 

En una aplicación progresiva (PWA), el caché se utiliza para almacenar recursos estáticos que serán necesarios para que la aplicación funcione sin conexión o se cargue más rápido. Los elementos que generalmente se incluyen en el caché son los siguientes:

    - Páginas HTML principales: como index.html o cualquier otra página clave.
    - Archivos CSS: como hojas de estilo personalizadas.
    - JavaScript: scripts que contienen la funcionalidad principal de la aplicación.
    - Imágenes y favicon: todos los recursos gráficos importantes.
    - Fuentes web: cualquier fuente personalizada o de terceros que utilices (como Google Fonts).
    - Recursos externos: cualquier API o CDN que necesite ser cacheado.
    - (NO FUNCIONA CON VIDEOS DE YOUTUBE POR RESTRICCIONES DE "CORS (Cross-Origin Resource Sharing").
*/

//Asignar un nombre y versión al cache
const CACHE_NAME = "v1_chess_mate_club",
  urlsToCache = [
    /* Se encarga de cargar el archivo "index.html". */
    "../../index.html",

    /* Se agrega la página web "mates"*/
    "../../mates/mates.html",
    /* Se agrega la página web "libros"*/
    "../../libros/libros.html",
    /* Se agrega la página web "aperturas"*/
    "../../aperturas/aperturas.html",
    /* Se agrega la página web "contacto"*/
    "../../contacto/contacto.html",
    /* Carga las fuentes de Google Fonts. */
    "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
    /* Kit de Font Awesome Icons */
    "https://kit.fontawesome.com/f1bff8ec54.js",

    /* Hojas Externas de CSS*/
    "../css/main.css",
    "../../aperturas/assets/css/aperturas.css",
    "../../libros/assets/css/libros.css",
    "../../mates/assets/css/mates.css",

    /* Hoja Externa de JavaScript.
    


    */
    /*     "sw-register.js", */

    /* Imágenes del sitio web */
    "../img/ProgramadorFitness.png",

    /* Favicon */
    "../img/favicon-16x16.png",
    "../img/favicon-32x32.png",
    "../img/favicon-48x48.png",
    "../img/favicon-76x76.png",
    "../img/favicon-96x96.png",
    "../img/favicon-120x120.png",
    "../img/favicon-144x144.png",
    "../img/favicon-152x152.png",
    "../img/favicon-167x167.png",
    "../img/favicon-180x180.png",
    "../img/favicon-192x192.png",
    "../img/favicon-256x256.png",
    "../img/favicon-384x384.png",
    "../img/favicon-512x512.png",

    /* Apple Touch Icon */
    "../img/apple-touch-icon-57x57.png",
    "../img/apple-touch-icon-60x60.png",
    "../img/apple-touch-icon-72x72.png",
    "../img/apple-touch-icon-76x76.png",
    "../img/apple-touch-icon-114x114.png",
    "../img/apple-touch-icon-120x120.png",
    "../img/apple-touch-icon-144x144.png",
    "../img/apple-touch-icon-152x152.png",
    "../img/apple-touch-icon-167x167.png",
    "../img/apple-touch-icon-180x180.png",

    /* Aperturas */
    "../../aperturas/assets/img/Apertura-Ruy-Lopez.png",
    "../../aperturas/assets/img/Apertura-Italiana.png",
    "../../aperturas/assets/img/Defensa-Alekhine.png",
    "../../aperturas/assets/img/Defensa-Caro-Kann.png",
    "../../aperturas/assets/img/Defensa-Escandinava.png",
    "../../aperturas/assets/img/Defensa-Escocesa.png",
    "../../aperturas/assets/img/Defensa-Francesa.png",
    "../../aperturas/assets/img/Defensa-Siciliana.png",
    "../../aperturas/assets/img/Defensa-Vienesa.png",
    "../../aperturas/assets/img/Gambito-de-Rey.png",

    /* Mates */
    "../../mates/assets/img/mate-arabe.gif",
    "../../mates/assets/img/mate-cola-de-golondrina.gif",
    "../../mates/assets/img/mate-de-anastasia.gif",
    "../../mates/assets/img/mate-de-blackburne.gif",
    "../../mates/assets/img/mate-de-boen.gif",
    "../../mates/assets/img/mate-de-cozio.gif",
    "../../mates/assets/img/mate-de-damiano.gif",
    "../../mates/assets/img/mate-de-la-coz.gif",
    "../../mates/assets/img/mate-de-la-opera.gif",
    "../../mates/assets/img/mate-de-las-hombreras.gif",
    "../../mates/assets/img/mate-de-legal.gif",
    "../../mates/assets/img/mate-de-morphy.gif",
    "../../mates/assets/img/mate-del-loco.gif",

    /* Libros */
    "../../libros/assets/img/mis-60-partidas-memorables.jpg",
    "../../libros/assets/img/curso-completo-de-ajedrez.jpg",
  ];

/* Durante la fase de instalación, generalmente se almacenan en caché los activos estáticos. 

El evento "install" ocurre cuando el Service Worker está siendo instalado en el navegador. 
El código dentro del bloque self.addEventListener("install", ...) se ejecuta en ese momento.

*/

const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

self.addEventListener("install", (e) => {
  console.log("Service Worker installing...");
  /* El método e.waitUntil() se asegura que el Service Worker no se considere instalado hasta que todas las tareas dentro de él hayan finalizado correctamente. En este caso, 
  hasta que se hayan agregado todos los archivos al caché.
  */
  e.waitUntil(
    caches

      /* El método caches.open(CACHE_NAME) abre un caché (almacenamiento local en el
       navegador, es decir, que ese caché será almacenado en el dispositivo) con el nombre que se define en CACHE_NAME. Esta operación devuelve una 
       promesa. Si la promesa se resuelve correctamente, pasa al siguiente bloque .then(). */
      .open(CACHE_NAME)

      .then((cache) => {
        console.log("Caching files...");
        /* Se agrega un return, dentro del cual se ejecutará el método "addAll", el cual se encargará de agregar todas las URL que se encuentran dentro de la
    constante "urlToCache" a la memoria caché del dispositivo dentro del cual se instale la Progressive Web App. 
    
    Esta lista podría contener recursos como archivos HTML, CSS, JavaScript, imágenes, etc., que se desean almacenar en el caché para ser usados sin conexión.
    
    */

        cache.addAll(urlsToCache);

        /* Una vez que se han añadido todos los archivos al caché, se llama a self.skipWaiting(). Este método obliga al Service Worker a activarse inmediatamente después de la instalación, sin esperar a que los usuarios cierren las pestañas actuales donde la aplicación esté en uso. Es decir, el nuevo Service Worker reemplaza al anterior más rápidamente.   */
      })

    /* En caso de que haya un error con alguna URL o se pierda la conexión, se desplegará
  en consola el mensaje "Falló registro de caché".
  
  Si ocurre algún error durante el proceso (como problemas al abrir el caché o añadir las URLs), se captura con el método .catch() y se muestra un mensaje en la consola: "Falló registro de caché", junto con el error específico err para mayor claridad.*/

    /* 
    Resumen del flujo:
      - Se intercepta el evento de instalación.
      - Se abre un caché.
      - Se añaden archivos al caché (almacenamiento local).
      - Se asegura que el Service Worker tome control inmediatamente (skipWaiting()).
      - Si algo falla, se informa del error en la consola.
*/
  );
});

/* Una vez que se instale el Service Worker, se activa y buscar los recursos para hacer que funcione sin conexión.Si se pierde la conexión en algún momento, este evento se encarga de buscar en caché los recursos necesarios para el funcionamiento de la Progressive Web App 


Se está utilizando el evento "activate" para ejecutar código cuando el Service Worker se activa. La activación ocurre después de que el Service Worker ha sido instalado (cuando ya se ha cargado y almacenado el caché en el dispositivo del usuario).
*/
// Activate service worker
self.addEventListener("activate", (evt) => {
  // console.log('Service worker has been activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      // console.log(keys);
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});

/* Este fragmento de código gestiona el evento fetch en un Service Worker dentro de una Progressive Web App (PWA). El objetivo del código es interceptar las solicitudes de red de la aplicación y responder con los archivos que ya están en el caché o, si no están en el caché, realizar la solicitud a la red (internet). 


*/

/* self.addEventListener("fetch", (e) => { ... }):
        Este código escucha el evento fetch, que se activa cada vez que la aplicación realiza
        una solicitud de red. Cada vez que el navegador pide algún recurso (como una página
        HTML, una imagen o un archivo CSS), el Service Worker intercepta la solicitud con 
        este evento. */
// Fetch event
self.addEventListener("fetch", (evt) => {
  console.log(evt);

  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(evt.request.url, fetchRes.clone());
              limitCacheSize(dynamicCacheName, 5);
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("index.html");
        }
      })
  );
});
