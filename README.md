# Progressive Web Apps

Este repositorio contiene el procedimiento necesario para convertir un sitio web en una **_Progressive Web App_**, es decir, en un sitio web que se pueda instalar, ya sea en nuestra computadora o en nuestro dispositio móvil, como si fuera una App nativa. Aunque no es una App como tal, simula el comportamiento y apariencia de una App.

## Instalación y Pruebas

Algo importante a tomar en cuenta, es que para realizar las pruebas localmente es necesario levantar un servidor utilizando herramientas como Xampp. Ahora bien, si se desea comprobar su funcionamiento en una web que ya está en producción, es necesario que dicha web use el protocolo /**https://**, es decir que dicha página tenga los certificados de seguridad activados.

### Pruebas locales

1. Abrir Xampp o Wampp.
2. Activar los servicios de **Apache** y **MySQL**.
3. Abrir la página web en Visual Studio Code desde LiveServer.

## Instalación de Progressive Web App

Las Progressive Web App, únicamente se pueden instalar en protocolos seguros, es decir, en sitios web que tiene el protocolo **_https_**. Si se está desarrollando la aplicación, también funconionará con un servidor de Xampp, Wampp o LiverServer.

## Ejemplo de manifest.json

```javascript
    /*  IMPORTANTE: el archivo "maminfest.json" es recomendable que esté ubicado en la carpeta raíz (principal) del sitio web.


    Estructura del archivo "manifest.json":
 */
            {


            "id": "./index.html?utm_source=web_app_manifest",

                /*       ( Se asignó el valor ./index.html?utm_source=web_app_manifest al campo id porque:
                       Consistencia con start_url: El valor del id suele coincidir con el de start_url,
                                                   ya que esta URL es la principal de tu aplicación (en este caso, index.html). Al hacerlo, garantizamos que
                                                   el navegador pueda identificar correctamente tu
                                                   aplicación y vincularla con la página inicial.

                      Identidad Única: El id actúa como un identificador único de la aplicación. Usar la
                                       URL de inicio (con parámetros opcionales) es una forma estándar de
                                       asegurar que la aplicación tenga una identidad única, no solo en
                                       un dispositivo, sino también cuando se instala en otros.

                      Estandarización en PWAs: Según las especificaciones de Progressive Web Apps (PWA),
                                               es recomendable usar un id que identifique de manera
                                               inequívoca la aplicación en relación con su URL de inicio.
                                               En este caso,
                                               la URL ./index.html?utm_source=web_app_manifest define
                                               claramente de dónde proviene la app y coincide con su
                                               punto de entrada principal.

                      ¿Por qué es importante el id?
                            El campo id ayuda a garantizar que la aplicación tenga una identidad única,
                            lo que es útil para:
                                - Evitar conflictos con otras aplicaciones.
                                - Ayudar a los navegadores a identificar tu PWA correctamente en
                                  diferentes dispositivos.
                                - Asegurar que cuando se actualice la aplicación, se reconozca como la
                                  misma PWA.) */

            "name": "Chess Mate Club",     /* (Es el nombre completo de la aplicación web.
                                            Se mostrará cuando los usuarios añadan la PWA a su
                                            pantalla de inicio o en otros contextos donde el
                                            nombre completo pueda ser mostrado, como en la
                                            pantalla de bienvenida.) */
            "short_name": "Chess Mate",     /* (Es la versión corta del nombre de la aplicación.
                                            Se utiliza cuando hay poco espacio para mostrar
                                            el nombre, como en la pantalla de inicio o en la
                                            barra de aplicaciones. Se recomienda que el nombre corto sea breve y fácilmente reconocible.) */
            "description": "Bienvenidos al sitio web para amantes del ajedrez, en el cual encontrarás recomendaciones de libros, consejos de aperturas, finales, jaques mate y medio juego.",
                                      /* ( Proporciona una breve descripción de la aplicación.
                                       Esta descripción puede ser utilizada en tiendas de aplicaciones o en la configuración de la PWA para explicar a los usuarios el propósito de la app.En la práctica, es recomendable que la descripción sea breve y concisa, ya que algunos navegadores o sistemas podrían truncarla si es demasiado larga. Una buena práctica es mantener la descripción alrededor de 100 a 200 caracteres para asegurarse de que se muestre correctamente en todos los contextos, como tiendas de aplicaciones o cuando el usuario añade la PWA (Progressive Web App) a su pantalla de inicio.) */


            "background_color": "#2B2B2B",    /* (Define el color de fondo de la pantalla de inicio
                                              cuando la aplicación está siendo cargada.
                                              Este color será visible mientras la aplicación
                                              se inicia, antes de que se cargue el contenido.) */
            "theme_color": "#F0DB4F",  /* (Define el color de la barra de direcciones
                                        en dispositivos móviles) */
            "orientation": "portrait",  /* (Se utiliza para especificar la
                                        orientación preferida en la que debe mostrarse tu
                                        Progressive Web App (PWA) cuando se inicia. Esto es
                                        especialmente útil para aplicaciones que están diseñadas
                                        para funcionar mejor en una orientación específica, ya sea vertical (retrato) u horizontal (paisaje).

                                        Valores que puede tener orientation:
                                            any: La aplicación puede ser visualizada en
                                                 cualquier orientación (retrato o paisaje).
                                                 Esta es la opción más flexible.

                                            natural: La orientación natural del dispositivo
                                                     será utilizada, que es la orientación en la que
                                                     el dispositivo fue diseñado para ser utilizado
                                                     (por ejemplo, vertical para la mayoría de los teléfonos).

                                            portrait: La aplicación se mostrará en modo vertical
                                                      (retrato). Esto es común para aplicaciones de lectura, redes sociales, etc.

                                            portrait-primary: Indica que la orientación retrato
                                                              principal es la que debe ser utilizada.
                                                              En la mayoría de los dispositivos,
                                                              esto es equivalente a portrait.

                                            portrait-secondary: Indica que la orientación retrato
                                                                secundaria (invertida) debe ser
                                                                utilizada. Esto es menos común y
                                                                generalmente se refiere a girar el dispositivo 180 grados.

                                            landscape: La aplicación se mostrará en modo horizontal
                                                       (paisaje). Esto es útil para aplicaciones de video, juegos y otras aplicaciones que se benefician de una pantalla más ancha.

                                            landscape-primary: Indica que la orientación paisaje
                                                               principal debe ser utilizada.

                                            ) */

            "display": "standalone", /*  (Se utiliza para especificar cómo se debe mostrar la Progressive
                                       Web App (PWA) cuando se lanza. Esta propiedad influye en el
                                       aspecto y la experiencia del usuario al interactuar con la aplicación. A continuación, te explico las opciones
                                       disponibles para display:
                                          fullscreen: La aplicación ocupa toda la pantalla del
                                                      dispositivo, sin ninguna interfaz del navegador visible (sin barra de dirección ni controles).
                                                      Ideal para aplicaciones que requieren un entorno
                                                      inmersivo, como juegos o aplicaciones multimedia.

                                          standalone: La aplicación se presenta como una aplicación
                                                      independiente, con su propia barra de título
                                                      (barra de estado) y sin los controles del navegador. Proporciona una experiencia
                                                      similar a las aplicaciones nativas, pero aún permite que el usuario navegue hacia atrás si
                                                      lo desea.
                                          minimal-ui: Similar a standalone, pero incluye algunos
                                                      controles del navegador, como el botón de
                                                      retroceso y el botón de recarga.
                                                      Proporciona una experiencia más controlada que standalone pero menos inmersiva que fullscreen.
                                          browser: La aplicación se abrirá en el navegador, mostrando la
                                                   barra de dirección y todos los controles del navegador.
                                                   Esta opción es la menos inmersiva y es útil para
                                                   aplicaciones que no requieren un entorno de aplicación
                                                   dedicado.) */
            "start_url": "./?utm_source=web_app_manifest",     /* (Especifica la URL inicial de la
                                                                aplicación cuando se abre desde la
                                                                pantalla de inicio. El parámetro
                                                                utm_source=web_app_manifest puede ser
                                                                usado para rastrear el uso de la
                                                                aplicación como PWA en herramientas de
                                                                analítica (como Google Analytics).)
                                                                Página de inicio: Cuando un usuario instala tu PWA y la abre desde la pantalla de inicio (por ejemplo, en un dispositivo móvil), la aplicación se abrirá en la URL definida por start_url.
                                                                Control de navegación: Permite a los desarrolladores dirigir a los usuarios a la página que mejor representa la aplicación o que debe ser la primera vista de la misma.
                                                                Inclusión de parámetros: Puedes incluir parámetros de URL en start_url, lo que permite personalizar la experiencia al iniciar la aplicación. Esto es útil para el seguimiento o para configurar el estado inicial de la aplicación. */)
            "scope": "./",       /*  (Define el ámbito de la aplicación. Este es el conjunto de URLs que
                                  forman parte de la PWA. Aquí, "./" significa que cualquier URL relativa
                                  a la raíz de la app (cualquier URL que se encuentre dentro de la
                                  carpeta raíz) estará dentro del alcance de la PWA. Si la
                                  aplicación intenta acceder a URLs fuera de este ámbito, se comportará
                                  como un sitio web normal.) */
            "lang": "es-GT",    /* (Especifica el idioma predeterminado de la aplicación.
                                En este caso, es español de México (es-GT). Esto ayuda a los navegadores
                                y dispositivos a saber cuál es el idioma principal de la interfaz de usuario.) */
            "icons": [                  /*   (La propiedad icons define una lista de iconos que se usan en
                                          diferentes resoluciones para representar la aplicación.
                                            Cada ítem en la lista contiene:
                                              src: La ruta al archivo de la imagen.
                                              sizes: El tamaño de la imagen en píxeles (ej. 1024x1024).
                                              type: El tipo de archivo, usualmente image/png.) */
              {
                "src": "./assets/img/icon-1024x1024",   /* (IMPORTANTE:  esta tamaño no es necesario para
                                                  favicon, pero sí para PWA (Progressive Web App).
                                                  Los dispositivos modernos, como smartphones y tablets, a menudo cuentan con pantallas de alta densidad de píxeles (como Retina en dispositivos Apple). Un ícono de 1024x1024 px se verá nítido y claro en estas pantallas.) */
                "sizes": "1024x1024",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-144x144.png",
                "sizes": "144X144",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-120x120.png",
                "sizes": "120x120",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-96x96.png",
                "sizes": "96x96",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-64x64.png",
                "sizes": "64x64",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-32x32.png",
                "sizes": "32x32",
                "type": "image/png"
              },
              {
                "src": "./assets/img/favicon-16x16.png",
                "sizes": "16x16",
                "type": "image/png"
              }
            ],


              /*     (El campo screenshots en el manifest.json de una Progressive Web App (PWA) se utiliza para
          proporcionar imágenes que muestran cómo se ve la aplicación en diferentes contextos. Estas
          capturas de pantalla son especialmente útiles para las siguientes razones:

            1. Mejorar la Presentación de la PWA: Las capturas de pantalla ayudan a los usuarios a tener una idea visual de la experiencia de usuario que ofrece la PWA. Esto puede aumentar la tasa de instalación al mostrar la interfaz atractiva y funcional de la aplicación.

            2. Reforzar la Identidad de la Aplicación: Al incluir capturas de pantalla que reflejan la
            apariencia y las características de la aplicación, se puede ayudar a construir una identidad
            visual más fuerte y consistente.

            3. Aumentar la Confianza del Usuario: Mostrar cómo se verá la aplicación una vez instalada
            puede ayudar a generar confianza en los usuarios, especialmente si están considerando
            instalar la aplicación desde su navegador.

            4. Diferenciación en la Tienda de Aplicaciones: Si la PWA se presenta en una tienda de
            aplicaciones, las capturas de pantalla pueden ayudar a diferenciarla de otras aplicaciones, atrayendo así más usuarios.)

             */


                      "screenshots": [
            {
              "src": "./assets/img/screenshot-wide-1280X800.png",
              "sizes": "1280x800",
              "type": "image/png",
              "form_factor": "wide"
            },
            {
              "src": "./assets/img/screenshot-portrait-800X1280.png",
              "sizes": "800x1280",
              "type": "image/png"
            }
          ],
          "protocol_handlers": [
            {
              "protocol": "web+micontacto",

              "url": "http://127.0.0.1:5500/nosotros.html?data=%s"   /*  (IMPORTANTE: si se sube este sitio web a un Hosting, es imperativo cambiar
                                                                      la URL: http://127.0.0.1:5500 por la URL del dominioen el que se cargó el sitio web, de lo contrario se generará un error porque dicho link está fuera del ámbito de la Progressive Web App. ) */
            }
          ]
        }








  /* IMPORTANTE: para comprobar que el "manifest.json" funciona correctamente,
     se deben seguir los siguientes pasos:

     1. Abrir las herramientas para desarrolladores de Chrome (F12).
     2. Navegar hasta el menú "Application" (Aplicación).
     3. Ya debería aparecer los datos del "manifest.json". Si hubiese algún error,
        acá se mostrará. */


```

## Publicación de Progressive Web App

Esta Progressive Web App ya está cargada en **GitHub**, por lo que solamente es necesario seguir los siguientes pasos para publicarla en **_GithubPages_**:

1. Acceder al repositorio deseado, en este caso: **progressive-web-app**.
2. Ingresar a "Settings".
3. Se despliega una ventana. Navegar hasta "Danger Zone" y dar clic en el botón **Change visibility** para cambiar la visibilidad del resositorio (normalment está como respositorio privado).
4. Dar clic en el botón **Change to public**.
5. Confirmar el cambio de visibilidad, dando clic en el botón "I want to make this respository private".
6. Dar clic en el botón **I have read and understead these effects**.
7. Dar clic en el botón **Make this respository public**.
8. Acceder nuevamente a **Settings" en el reositorio**.
9. En la barra de navegación de la izquierda, seleccionar **Pages**.
10. En la sección **Branch**, dar clic en el combo box con el texto **None** y seleccionar la rama **Main**, la cual contiene el sitio web a publicar.
11. Dar clic en el botón **Save**.
12. Listo.

## Corroborar si el ServiceWorker fue detectado correctamente

### Corroborar que el ServiceWorker sea detectado:

1. Acceder a las Herramientas para Desarrolladores de Chrome.
2. Acceder a la sección "Application" (Aplicación).
3. En la barra de navegación del lado izquierdo, seleccionar "Service workers".
4. Se muestra la casilla "Source", y en ella de debería mostrar el nombre del archivo de ServiceWorker, el cual, en este caso, se llama "sw.js".
5. Por otro lado, al acceder a la consola, se debería mostrar el mensaje: "Registro de SW (Service Worker) exitoso"

### Corroborar que se haya creado el Caché en el dispositivo:

1. Acceder a las Herramientas para Desarrolladores de Chrome.
2. Acceder a la sección "Application" (Aplicación).
3. En la barra de navegación del lado izquierdo, seleccionar "Cache storage".
4. Ya debería mostrarse el chaché llamado "v1_chess_mate_club", que se creón dentro de este archivo y el listado de URL que se agregarón dentro de la constante "urlsToCache".
5. Si las variables no se muestran correctamente al acceder en las Herramientas para Desarrolladores de Chrome a "Application/Cache Storage", es necesario reinicar el Service Worker. Para reinicarlo, se deben seguir los siguientes pasos:

   - Acceder a las Herramientas para Desarrolladores de Chrome.
   - Seleccionar la opción "Application".
   - En la barra de navegación de lado izquierdo, seleccionar "Service workers".
   - En el lado derecho, se muestra el botón "Update". Dar clic en él.
   - Listo.
