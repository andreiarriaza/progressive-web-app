/* Las AppProgresivas permiten almacenar todos los recursos estáticos en el disco duro del dispositivo en el que se
esté visualizando la aplicación. 

En una aplicación progresiva (PWA), el caché se utiliza para almacenar recursos estáticos que serán necesarios para que la aplicación funcione sin conexión o se cargue más rápido. Los elementos que generalmente se incluyen en el caché son los siguientes:

    - Páginas HTML principales: como index.html o cualquier otra página clave.
    - Archivos CSS: como hojas de estilo personalizadas.
    - JavaScript: scripts que contienen la funcionalidad principal de la aplicación.
    - Imágenes y favicon: todos los recursos gráficos importantes.
    - Fuentes web: cualquier fuente personalizada o de terceros que utilices (como Google Fonts).
    - Recursos externos: cualquier API o CDN que necesite ser cacheado.
*/

//Asignar un nombre y versión al cache
const CACHE_NAME = "v1_chess_mate_club",
  urlsToCache = [
    /* Se encarga de cargar el archivo "index.html". */
    "./",
    /* Carga las fuentes de Google Fonts. */
    "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
    /* Kit de Font Awesome Icons */
    "https://kit.fontawesome.com/f1bff8ec54.js",

    /* Hoja Externa de CSS */
    "./assets/css/styles.css",
    /* Hoja Externa de JavaScript. */
    "./assets/js/script.js",

    /* Imágenes del sitio web */
    "./assets/img/ProgramadorFitness.png",

    /* Favicon */
    "./assets/img/favicon-16x16.png",
    "./assets/img/favicon-32x32.png",
    "./assets/img/favicon-48x48.png",
    "./assets/img/favicon-76x76.png",
    "./assets/img/favicon-96x96.png",
    "./assets/img/favicon-120x120.png",
    "./assets/img/favicon-144x144.png",
    "./assets/img/favicon-152x152.png",
    "./assets/img/favicon-167x167.png",
    "./assets/img/favicon-180x180.png",
    "./assets/img/favicon-192x192.png",
    "./assets/img/favicon-256x256.png",
    "./assets/img/favicon-384x384.png",
    "./assets/img/favicon-512x512.png",

    /* Apple Touch Icon */
    "./assets/img/apple-touch-icon-57x57.png",
    "./assets/img/apple-touch-icon-60x60.png",
    "./assets/img/apple-touch-icon-72x72.png",
    "./assets/img/apple-touch-icon-76x76.png",
    "./assets/img/apple-touch-icon-114x114.png",
    "./assets/img/apple-touch-icon-120x120.png",
    "./assets/img/apple-touch-icon-144x144.png",
    "./assets/img/apple-touch-icon-152x152.png",
    "./assets/img/apple-touch-icon-167x167.png",
    "./assets/img/./assets/img/apple-touch-icon-180x180.png",
  ];

/* Durante la fase de instalación, generalmente se almacenan en caché los activos estáticos. */
self.addEventListener("install", (e) => {});

/* Una vez que se instale el Service Worker, se activa y buscar los recursos para hacer que funcione sin conexión.Si se pierde la conexión en algún momento, este evento se encarga de buscar en caché los recursos necesarios para el funcionamiento de la Progressive Web App */
self.addEventListener("activate", (e) => {});

/* Se encarga de recuperar todos los recursos del navegador, es decir, que una vez que se restablezca la conexión a internet va a recuperar los archivos y también tiene la capacidad de detectar si hubo
un cambio de la versión que está almacenada en el servidor con respecto a la versión que está en el caché, se encargará de actualizar el archivo que está en la memoria caché para que sincronice los cambios con los archivos almacenados en el servidor. */
self.addEventListener("fetch", (e) => {});
