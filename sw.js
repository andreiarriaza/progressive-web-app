/* 

*********** Para que la Proggressive Web App y el envío del Protocol Handler funcionen OFFLINE ***********

  IMPORTANTE: cuando la progressive web app se instala en una computadora, se abre automáticamente; sin embargo, es imprescindible cerrar la 
  ventana que se abrió y abrirla nuevamente, pues de esta manera se asegura que se carguen en caché todos los recursos de la progressive web app para su 
  funcionamiento offline. Cuando se abre en dispositivos móviles, también es necesario abrirla por lo menos una vez ONLINE para poder luego visualizarla OFFLINE.

  No es necesario abrir todas las páginas que conforman la progressive web app, solo es imprescindible que se abran las siguientes: 
    1. index.html (el index principal): pues este invoca el service worker que se encargará de agregar todos los recursos al caché. 
    2. Realizar el envío del protocol handler (si la progressive web app tuviera un protocol handler, de lo contrario no. En este caso, se ejecuta 
      el protocol handler que está en el "index" principal dando clic en el vínculo "Ver contacto: 200 (por medio de protocol_handler)"): 
          Es necesario realizar este procedimiento, para que se almacene en caché el contenido de la página "contacto", la cual recibe el protocol handler. 

    No es necesario abrir ninguna otra página además de las mencionadas arriba. 


  Es importante señalar que el Protocol Handler visto en este ejemplo NO FUNCIONA EN DISPOSITIVOS MÓVILES, solamente en computadoras.

*/
/* IMPORTANTE: para corroborar que, después de agregar todo el código de este archivo, el ServiceWorker fue detectado correctamente, se deben seguir los siguientes pasos: 


  Corroborar que el ServiceWorker sea detectado:

        1. Acceder a las Herramientas para Desarrolladores de Chrome. 
        2. Acceder a la sección "Application" (Aplicación).
        3. En la barra de navegación del lado izquierdo, seleccionar "Service workers".
        4. Se muestra la casilla "Source", y en ella de debería mostrar el nombre del archivo de ServiceWorker, el cual, en este caso, se llama "sw.js".
        5. Por otro lado, al acceder a la consola, se debería mostrar el mensaje: "Registro de SW (Service Worker) exitoso"


  Comprobar que el ServiceWorker se haya activado correctamente: 
        1. Abrir las herramientas para desarrolladores de Chrome. 
        2. Acceder a "Application".
        3. Seleccionar en el menú de la izquierda la opción "Service workers".
        4. En el lado drecho se mostrará el estado del Service Worker detectado, el cual debería mostrar el Status: "... activated and is running" y mostrar
           un ícono de color verde al lado izquierdo para indicar que está funcionando correctamente. 
        


  Corroborar que se haya creado el Caché en el dispositivo: 
        1. Acceder a las Herramientas para Desarrolladores de Chrome. 
        2. Acceder a la sección "Application" (Aplicación).
        3. En la barra de navegación del lado izquierdo, seleccionar "Cache storage".
        4. Ya debería mostrarse el chaché llamado "v1_chess_mate_club", que se creón dentro de este archivo y el listado de URL que se agregarón dentro
           de la constante "urlsToCache".

        5. Si las variables no se muestran correctamente al acceder en las Herramientas para 
           Desarrolladores de Chrome a "Application/Cache Storage" (regularmente ocurre, después de una modificación del Service Worker),
           es necesario reinicar el Service Worker. Para reinicarlo, se deben seguir los siguientes pasos: 
               - Acceder a las Herramientas para Desarrolladores de Chrome. 
               - Seleccionar la opción "Application".
               - En la barra de navegación de lado izquierdo, seleccionar "Service workers".
               - En el lado derecho, se muestra el botón "Update". Dar clic en él. 
               - Listo.  
        */

/* Las AppProgresivas permiten almacenar todos los recursos estáticos en el disco duro del dispositivo en el que se
esté visualizando la aplicación. 

En una aplicación progresiva (PWA), el caché se utiliza para almacenar recursos estáticos que serán necesarios para que la aplicación 
funcione sin conexión o se cargue más rápido. Los elementos que generalmente se incluyen en el caché son los siguientes:

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
    "./",

    /* Se agrega la página web "mates"*/
    "./mates/",
    /* Se agrega la página web "libros"*/
    "./libros/",
    /* Se agrega la página web "aperturas"*/
    "./aperturas/",
    /* Se agrega la página web "contacto"*/
    "./contacto/",
    /* Carga las fuentes de Google Fonts. */
    "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
    /* Kit de Font Awesome Icons */
    "./assets/icons/kit-fontawesomeicons.js",

    /* Hojas Externas de CSS*/
    "./assets/css/main.css",
    "./aperturas/assets/css/aperturas.css",
    "./libros/assets/css/libros.css",
    "./mates/assets/css/mates.css",
    "./contacto/assets/css/contacto.css",

    /* Hoja Externa de JavaScript. */
    "./contacto/assets/js/protocol-handler.js",

    /* Imágenes del sitio web */
    "./assets/img/ProgramadorFitness.png",

    /* Startup Image */
    "./assets/img/startup-image-750x1334@2x.png",
    "./assets/img/startup-image-1125x2436@3x.png",
    "./assets/img/startup-image-768x1024@2x.png",

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
    "./assets/img/apple-touch-icon-180x180.png",

    /* Aperturas */
    "./aperturas/assets/img/Apertura-Ruy-Lopez.png",
    "./aperturas/assets/img/Apertura-Italiana.png",
    "./aperturas/assets/img/Defensa-Alekhine.png",
    "./aperturas/assets/img/Defensa-Caro-Kann.png",
    "./aperturas/assets/img/Defensa-Escandinava.png",
    "./aperturas/assets/img/Defensa-Escocesa.png",
    "./aperturas/assets/img/Defensa-Francesa.png",
    "./aperturas/assets/img/Defensa-Siciliana.png",
    "./aperturas/assets/img/Defensa-Vienesa.png",
    "./aperturas/assets/img/Gambito-de-Rey.png",

    /* Mates */
    "./mates/assets/img/mate-arabe.gif",
    "./mates/assets/img/mate-cola-de-golondrina.gif",
    "./mates/assets/img/mate-de-anastasia.gif",
    "./mates/assets/img/mate-de-blackburne.gif",
    "./mates/assets/img/mate-de-boen.gif",
    "./mates/assets/img/mate-de-cozio.gif",
    "./mates/assets/img/mate-de-damiano.gif",
    "./mates/assets/img/mate-de-la-coz.gif",
    "./mates/assets/img/mate-de-la-opera.gif",
    "./mates/assets/img/mate-de-las-hombreras.gif",
    "./mates/assets/img/mate-de-legal.gif",
    "./mates/assets/img/mate-de-morphy.gif",
    "./mates/assets/img/mate-del-loco.gif",

    /* Libros */
    "./libros/assets/img/mis-60-partidas-memorables.jpg",
    "./libros/assets/img/curso-completo-de-ajedrez.jpg",
  ];

/*

¿Qué hace self.addEventListener?
    self: es una referencia al contexto global del Service Worker. Es equivalente a window en el navegador, pero en este caso, funciona dentro del entorno aislado   
          del Service Worker.
    addEventListener: se usa para escuchar eventos que ocurren en el ciclo de vida del Service Worker.

Durante la fase de instalación, generalmente se almacenan en caché los activos estáticos. 

El evento "install" ocurre cuando el Service Worker está siendo instalado en el navegador. 
El código dentro del bloque self.addEventListener("install", ...) se ejecuta en ese momento.

*/
self.addEventListener("install", (e) => {
  console.log("Service Worker installing...");
  /* El método e.waitUntil() se asegura que el Service Worker no se considere instalado hasta que todas las tareas dentro de él hayan 
  finalizado correctamente. En este caso, hasta que se hayan agregado todos los archivos al caché.
  */
  e.waitUntil(
    caches

      /* El método caches.open(CACHE_NAME) abre un caché (el caché que será almacenado en el dispositivo) con el nombre que se define en CACHE_NAME. 
      Esta operación devuelve una promesa. Si la promesa se resuelve correctamente, pasa al siguiente bloque .then(). */
      .open(CACHE_NAME)

      /* "cache" es el objeto que representa el caché abierto.
       */
      .then((cache) => {
        console.log("Caching files...");
        /* Se agrega un return, dentro del cual se ejecutará el método "addAll", el cual se encargará de agregar todas las URL que se encuentran dentro de la
           constante "urlToCache" a la memoria caché del dispositivo dentro del cual se instale la Progressive Web App. 

           Esta lista podría contener recursos como archivos HTML, CSS, JavaScript, imágenes, etc., que se desean almacenar en el caché para ser usados sin conexión.
        */
        return (
          cache
            .addAll(urlsToCache)

            /* Una vez que se han añadido todos los archivos al caché, se llama a self.skipWaiting(). Este método obliga al Service Worker a activarse inmediatamente después de la instalación, sin esperar a que los usuarios cierren las pestañas actuales donde la aplicación esté en uso. Es decir, el nuevo Service Worker reemplaza al anterior más rápidamente.   */
            .then(() => {
              // Mensaje de confirmación en consola
              console.log("Archivos agregados al caché:", urlsToCache);
              return self.skipWaiting();
            })
        );
      })

      /* En caso de que haya un error con alguna URL o se pierda la conexión, se desplegará
  en consola el mensaje "Falló registro de caché".
  
  Si ocurre algún error durante el proceso (como problemas al abrir el caché o añadir las URLs), se captura con el método .catch() y se muestra un mensaje en la consola: "Falló registro de caché", junto con el error específico err para mayor claridad.*/
      .catch((err) => console.log("Falló registro de caché", err))

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

/* 
1. ¿Qué hace self.addEventListener?
    self: es una referencia al contexto global del Service Worker. Es equivalente a window en el navegador, pero en este caso, funciona dentro del entorno aislado   
          del Service Worker.
    addEventListener: se usa para escuchar eventos que ocurren en el ciclo de vida del Service Worker. 
    
    

2. ¿Qué es el evento activate?
    El evento activate se dispara cuando:

      - El Service Worker ha sido instalado exitosamente.
      - Está listo para reemplazar cualquier Service Worker anterior
    
    */
self.addEventListener("activate", (e) => {
  console.log("Service Worker activating...");
  /* Aquí se crea una lista blanca de caché llamada "cacheWhiteList", 
  que contiene los nombres de los cachés que se desean conservar. 
  
  "CACHE_NAME" es una constante que contiene el nombre del caché actual (que se definió anteriormente), el cual 
  contiene los archivos más recientes de la aplicación. 
  Solo este caché debe mantenerse activo.
  */

  const cacheWhiteList = [CACHE_NAME];

  /* 

El método e.waitUntil() extiende el evento de activación hasta que todas las promesas dentro de él se resuelvan. Esto garantiza que el Service Worker no finalice su activación hasta que se hayan ejecutado correctamente las acciones dentro de este bloque; en este caso, la limpieza de caché y la activación del nuevo caché.*/
  e.waitUntil(
    /* caches.keys():
Este método devuelve una promesa que se resuelve con una lista de todos los nombres
de caché almacenados en el navegador. Cada vez que el caché se actualiza, se crea un 
nuevo caché con un nombre diferente (versión nueva). */
    caches
      .keys()
      /* .then((cacheNames) => { ... }):
Cuando la promesa de caches.keys() se resuelve, el argumento cacheNames contendrá un array 
con los nombres de todos los cachés actuales. Este bloque de código se utiliza para comparar 
estos nombres con la lista blanca cacheWhiteList y decidir cuáles cachés deben eliminarse. */
      .then((cacheNames) => {
        /* Promise.all() se utiliza para ejecutar varias promesas en paralelo y esperar a que
         todas se resuelvan. En este caso, se espera que todas las eliminaciones de caché 
         innecesario se completen antes de continuar con la activación. */
        return Promise.all(
          /* Se usa para recorrer cada nombre de caché en cacheNames. Para cada caché, se ejecuta una comparación con la lista blanca cacheWhiteList. */
          cacheNames.map((cacheName) => {
            // Eliminando lo que ya no se necesita en el caché.
            /* Esta condición verifica si el cacheName actual no está en la lista blanca 
            (cacheWhiteList). Si el nombre del caché no se encuentra en la lista blanca 
            (lo que significa que es un caché antiguo o no deseado), se procede a eliminarlo. */

            /* Si el caché del arreglo "cacheName" que se esté recorriendo en ese momento NO está en la lista blanca (cacheWhiteList), "indexOf" devolverá "-1"`. */
            if (cacheWhiteList.indexOf(cacheName) === -1) {
              /* caches.delete(cacheName):
                Si la condición anterior es verdadera (es decir, el caché no está en la lista blanca), se llama a caches.delete(cacheName) para eliminar ese caché del navegador. Esta operación devuelve una promesa que indica que el caché se ha 
                eliminado correctamente. */
              return caches.delete(cacheName);
            }
          })
        );
      })

      .then(() => {
        console.log("Service Worker activo y listo para controlar clientes.");
        // Le indica al Service Worker activar el caché actual.
        /* .then(() => self.clients.claim()):
            Después de que todas las promesas de Promise.all() se hayan 
            resuelto (lo que indica que todos los cachés innecesarios se han eliminado), 
            se llama a self.clients.claim().

        self.clients.claim() hace que el nuevo Service Worker tome el control de todas las páginas de la aplicación sin necesidad de que los usuarios cierren y vuelvan a abrir las pestañas. Es decir, asegura que el nuevo Service Worker y los cachés actualizados se utilicen inmediatamente, sin esperar a que se recarguen las páginas. */
        return self.clients.claim();
      })
  );

  /*  Resumen del flujo:
        - Se intercepta el evento de activación del Service Worker.
        - Se define una lista blanca de cachés permitidos (en este caso, solo uno).
        - Se obtienen todos los nombres de los cachés almacenados en el navegador.
        - Se compara cada caché con la lista blanca, y si un caché no está en la lista, se elimina.
        - Una vez que se eliminan todos los cachés antiguos, el nuevo Service Worker toma el control de las páginas abiertas de la aplicación con self.clients.claim().  
        
        Este proceso es importante para garantizar que solo se conserve la versión más reciente del caché, eliminando las versiones anteriores y asegurando que la aplicación esté siempre actualizada.
*/
});

/* 

Evento "fetch":
Este fragmento de código gestiona el evento fetch en un Service Worker dentro de una Progressive Web App (PWA). El objetivo del código es interceptar las solicitudes de red de la aplicación y responder con los archivos que ya están en el caché o, si no están en el caché, realizar la solicitud a la red (internet). 
*/

/* self.addEventListener("fetch", (e) => { ... }):
        Este código escucha el evento fetch, que se activa cada vez que la aplicación realiza
        una solicitud de red. Cada vez que el navegador pide algún recurso (como una página
        HTML, una imagen o un archivo CSS), el Service Worker intercepta la solicitud con 
        este evento. */

/* 
self.addEventListener("fetch", (e) => {...}):
  - Registra un event listener para el evento "fetch" en el Service Worker. 
    Este evento se activa cada vez que el navegador realiza una solicitud de red (ya sea para obtener una página, imagen, archivo, etc.).
  - El parámetro "e" es el evento de la solicitud, que contiene detalles sobre la solicitud, como la URL que se está solicitando.

*/
self.addEventListener("fetch", (e) => {
  /* e.respondWith(...):
      - Este método es utilizado para proporcionar una respuesta personalizada al evento fetch. 
        Aquí es donde decidimos qué respuesta se debe devolver: puede ser desde la caché o la red.
      - Todo el código dentro de "respondWith" es una promesa que eventualmente devuelve una respuesta. 
  */
  e.respondWith(
    /* 
    En el contexto de los Service Workers, e.request hace referencia al objeto de solicitud (Request) asociado a un evento de fetch.
    Cuando un Service Worker intercepta una solicitud de red mediante el evento fetch, el objeto del evento (e o event) tiene una 
    propiedad "request" que contiene detalles sobre la solicitud que el navegador está intentando hacer.
    */
    /* caches.match(e.request):
        - caches.match() busca en el caché disponible para ver si ya existe una entrada que coincida con la solicitud que se 
          está realizando (e.request es la solicitud original que se hace).
        - Retorna una promesa que resuelve la respuesta almacenada en caché si existe, o undefined si no se encuentra una coincidencia. 
    */
    caches
      .match(e.request)

      /* .then((res) => {...}):
            - Si caches.match(e.request) devuelve una respuesta (res), es decir, si la solicitud está en la caché:
                - Se imprime en la consola que la respuesta está siendo servida desde la caché con console.log.
                - Se devuelve esa respuesta inmediatamente con return res. 
      */
      .then((res) => {
        if (res) {
          console.log(`Sirviendo desde caché: ${e.request.url}`);
          return res;
        }
        console.log(`Realizando fetch: ${e.request.url}`);
        /*  return fetch(e.request):
              Si el recurso no está en la caché, se realiza una solicitud a la red para obtenerlo.  */
        return (
          fetch(e.request)
            /* .then((networkResponse) => {...}):
                  Si la solicitud de red es exitosa, networkResponse es la respuesta de la red. 
            */
            .then((networkResponse) => {
              /* networkResponse.clone():
                  Las respuestas de la red solo pueden ser leídas una vez, por lo que se necesita clonarlas si se quiere tanto usar 
                  la respuesta en el código como almacenarla en la caché.
                
                  clonedRespons:
                    Es una copia de la respuesta original que se puede almacenar en la caché sin afectar la respuesta original.
                  
                  */
              // Clonar la respuesta para poder almacenarla en la caché y devolverla
              let clonedResponse = networkResponse.clone();

              if (
                /* 
                e.request.method === "GET":

                  Se asegura de solo interceptar y cachear peticiones HTTP de tipo GET (las que normalmente solicitan recursos).
                  Peticiones POST, PUT, DELETE, etc., quedan fuera.

                !e.request.url.startsWith("chrome-extension://")
                  El signo ! significa negación.
                  e.request.url.startsWith("chrome-extension://") verifica si la URL inicia con chrome-extension://.
                  Anteponiendo ! indica que no queremos que inicie con ese esquema.
                  Esto se hace porque los navegadores no permiten cachear recursos con el esquema chrome-extension://, lo que podría provocar conflictos si algun 
                  plugin del navegador hiciera peticiones; como los plugin para bloqueo de publicidad (AdBlocker), de SEO, o algún otro plugin instalado en el navegador.  

                (e.request.url.startsWith("https://") || e.request.url.startsWith("web+miapp://"))

                  El operador || significa "o" lógico.
                  Se cumple esta parte si la URL empieza con https:// o si empieza con web+miapp:// (tu protocolo personalizado).
                  Permite cachear tanto las URLs HTTPS de tu sitio como tu protocol handler (web+miapp://).

                */
                e.request.method === "GET" &&
                !e.request.url.startsWith("chrome-extension://") &&
                (e.request.url.startsWith("https://") ||
                  e.request.url.startsWith("web+miapp://")) // o el esquema que uses
              ) {
                /* caches.open(CACHE_NAME):
                  Abre (o crea, si no existe) un caché con el nombre definido por la constante CACHE_NAME.
              */
                caches.open(CACHE_NAME).then((cache) => {
                  /* cache.put(e.request, clonedResponse):
                    Almacenamos la respuesta clonada (clonedResponse) en la caché con la solicitud original (e.request) como clave.
                    Esto permite que futuras solicitudes a la misma URL se sirvan desde la caché.
                */
                  cache.put(e.request, clonedResponse);
                });
              }

              /* Se devuelve la respuesta de la red (networkResponse) después de que se haya almacenado en la caché. */
              return networkResponse;
            })

            /* .catch((err) => {...}):
                  - Si ocurre un error durante el fetch (por ejemplo, si no hay conexión a la red), se captura el error (err).
                  - Se imprime el error en la consola.
            */
            .catch((err) => {
              console.error("Error fetching resource:", err);
            })
        );
      })

      /* .catch((err) => {...}):
            - Si ocurre un error al intentar buscar en la caché (caches.match()), se captura el error (err).
            - Se imprime el error en la consola.
            - De nuevo, como medida de contingencia, se intenta devolver la página offline (/offline.html) desde la caché. */
      .catch((err) => {
        console.error("Error matching en caché", err);

        /* Resumen del flujo:
            - Si la solicitud se encuentra en la caché, se sirve desde allí.
            - Si no se encuentra en la caché, se hace una solicitud a la red.
            - Si la solicitud a la red es exitosa, se guarda la respuesta en la caché para la próxima vez y se devuelve la respuesta de la red.
            - Si ocurre un error (por ejemplo, falta de conexión a internet), se sirve una página offline desde la caché. 
        */
      })
  );
});
