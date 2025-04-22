# Progressive Web Apps

Este repositorio contiene el procedimiento necesario para convertir un sitio web en una **_Progressive Web App_**, es decir, en un sitio web que se pueda instalar, ya sea en nuestra computadora o en nuestro dispositio móvil, como si fuera una App nativa. Aunque no es una App como tal, simula el comportamiento y apariencia de una App.

## Visualización de contenido Offline

Su característica principal es que guarda en caché las imágenes indicadas en el ServiceWorker, y permite la visualización de las mismas aún estando offline. Sin embargo para que esto sea posible, es necesario realizar los siguientes pasos:

1. Instalar la Progressive Web App.
2. Abrir la aplicación después de que se haya descargado. **Nota:**Aunque cuando se instala en una computadora, después de instalada, la aplicación se abre automáticamente, es necesario cerrar la ventana de la aplicación y abrirla nuevamente, porque de lo contrario el Service Worker no almacenará los archivos en caché.
3. Ahora ya se puede acceder al contenido de la página de forma offline.

## Instalación y Pruebas

Algo importante a tomar en cuenta, es que para realizar las pruebas localmente es necesario levantar un servidor utilizando herramientas como Xampp. Ahora bien, si se desea comprobar su funcionamiento en una web que ya está en producción, es necesario que dicha web use el protocolo /**https://**, es decir que dicha página tenga los certificados de seguridad activados.

### Pruebas locales

1. Abrir Xampp o Wampp.
2. Activar los servicios de **Apache** y **MySQL**.
3. Abrir la página web en Visual Studio Code desde LiveServer.

## Instalación de Progressive Web App

Las Progressive Web App, únicamente se pueden instalar en protocolos seguros, es decir, en sitios web que tiene el protocolo **_https_**. Si se está desarrollando la aplicación, también funconionará con un servidor de Xampp, Wampp o LiverServer.

## Ejemplo de manifest.json

¿Qué es el manifest.json?

El manifest es un archivo de configuración en formato JSON que define cómo se debe comportar y mostrar tu aplicación web cuando se instala como una Progressive Web App (PWA) en dispositivos. Es fundamental para convertir una aplicación web en una experiencia similar a una aplicación nativa en dispositivos móviles y de escritorio.

¿Qué hace el manifest.json?

- Define la apariencia de la PWA: Configura el nombre, íconos, colores y diseño de la aplicación.
- Controla el comportamiento: Establece cómo se debe iniciar la aplicación (URL de inicio, orientación, modo de pantalla completa, etc.).
- Permite la instalación: Es obligatorio para que los navegadores permitan instalar la PWA en la pantalla de inicio.

¿Qué debe Íconos debe incluir el manifest.json?

Se debe tomar en cuenta que dentro del manifest.json, en la propiedad **icons** solamente se deben incluir las imágenes que servirán para la instalación de la Progressive Web App. En este caso, se agregaron los "favicon" porque se desea que esas imágenes use la Progressive Web App al instalarse y agregarse a la lista de aplicaciones. Ahora bien, esto solo tiene que ver con la instalación de la progressive web app, pues todo lo referente al contenido que se agregará al caché, esto se administra en el ServiceWorker (sw.js). Esto quiere decir que el que se hayan agregado algunos favicons en el manifest esto no hará que se muestren offline, pues el único que el contenido que se mostrará offline, es el Service Worker (sw.js).

El manifest.json funciona tanto en Windows como en Apple, pero el soporte varía según la plataforma y el navegador:

1. Windows:
   El soporte para manifest.json es excelente en Windows, especialmente en los navegadores basados en Chromium, como:

- Google Chrome
- Microsoft Edge

Características principales en Windows:

- Las aplicaciones instaladas desde navegadores compatibles funcionan como aplicaciones independientes.
- El ícono, el nombre, el esquema de colores y otros ajustes configurados en el manifest.json se reflejan al instalar la PWA.
- En navegadores como Edge, las PWAs pueden integrarse completamente en el sistema operativo (menú de inicio, barra de tareas, etc.).

Sí, el manifest.json funciona tanto en Windows como en Apple, pero el soporte varía según la plataforma y el navegador:

2. Apple (macOS e iOS)
   El soporte para manifest.json en los dispositivos Apple depende del navegador:

- Safari en macOS e iOS
  - Soporte limitado para PWA: Safari reconoce el manifest.json, pero no implementa todas sus características.
  - Las PWAs pueden instalarse en la pantalla de inicio en iOS (a través de la opción "Añadir a la pantalla de inicio"), pero el proceso depende más de los metadatos en el <head> del HTML que del manifest.json.
  - En macOS, las PWAs no tienen un soporte tan nativo como en navegadores basados en Chromium.
- Requiere metadatos adicionales en el HTML: Para que funcione correctamente en iOS, debes incluir etiquetas <link> y <meta> en el archivo HTML.

  Metadatos esenciales para Safari:

```html
<link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Mi Aplicación" />
```

```javascript
/* IMPORTANTE: el archivo "manifest.json" es recomendable que esté ubicado en la carpeta raíz (principal) del sitio web.

    ¿Qué es el manifest.json?

    El manifest es un archivo de configuración en formato JSON que define cómo se debe comportar y mostrar tu aplicación web cuando se instala como una Progressive Web App (PWA) en dispositivos. Es fundamental para convertir una aplicación web en una experiencia similar a una aplicación nativa en dispositivos móviles y de escritorio.

    ¿Qué hace el manifest.json?

    - Define la apariencia de la PWA: Configura el nombre, íconos, colores y diseño de la aplicación.
    - Controla el comportamiento: Establece cómo se debe iniciar la aplicación (URL de inicio, orientación, modo de pantalla completa, etc.).
    - Permite la instalación: Es obligatorio para que los navegadores permitan instalar la PWA en la pantalla de inicio.

¿Qué debe Íconos debe incluir el manifest.json?

Se debe tomar en cuenta que dentro del manifest.json, en la propiedad "icons" solamente se deben incluir las imágenes que servirán para la instalación de la Progressive Web App. En este caso, se agregaron los "favicon" porque se desea que esas imágenes use la Progressive Web App al instalarse y agregarse a la lista de aplicaciones. Ahora bien, esto solo tiene que ver con la instalación de la progressive web app, pues todo lo referente al contenido que se agregará al caché, esto se administra en el ServiceWorker (sw.js). Esto quiere decir que el que se hayan agregado algunos favicons en el manifest esto no hará que se muestren offline, pues el único que el contenido que se mostrará offline, es el Service Worker (sw.js).

El manifest.json funciona tanto en Windows como en Apple, pero el soporte varía según la plataforma y el navegador:

1. Windows:
   El soporte para manifest.json es excelente en Windows, especialmente en los navegadores basados en Chromium, como:

- Google Chrome
- Microsoft Edge

Características principales en Windows:

- Las aplicaciones instaladas desde navegadores compatibles funcionan como aplicaciones independientes.
- El ícono, el nombre, el esquema de colores y otros ajustes configurados en el manifest.json se reflejan al instalar la PWA.
- En navegadores como Edge, las PWAs pueden integrarse completamente en el sistema operativo (menú de inicio, barra de tareas, etc.).

Sí, el manifest.json funciona tanto en Windows como en Apple, pero el soporte varía según la plataforma y el navegador:

2. Apple (macOS e iOS)
   El soporte para manifest.json en los dispositivos Apple depende del navegador:

- Safari en macOS e iOS
  - Soporte limitado para PWA: Safari reconoce el manifest.json, pero no implementa todas sus características.
  - Las PWAs pueden instalarse en la pantalla de inicio en iOS (a través de la opción "Añadir a la pantalla de inicio"), pero el proceso depende más de los metadatos en el <head> del HTML que del manifest.json.
  - En macOS, las PWAs no tienen un soporte tan nativo como en navegadores basados en Chromium.
- Requiere metadatos adicionales en el HTML: Para que funcione correctamente en iOS, debes incluir etiquetas <link> y <meta> en el archivo HTML.

  Metadatos esenciales para Safari:
    <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Mi Aplicación" />
*/



    Estructura del archivo "manifest.json":

        {


            "id": "https://andreiarriaza.github.io/progressive-web-app",
                      Es un identificador único para la PWA que ayuda al navegador a reconocer y asociar datos específicos con esa aplicación. Actúa como su "nombre interno" único para diferenciarla de otras aplicaciones.

                      ¿Por qué no debería incluir una barra (/) al final del id?
                        Aunque técnicamente puedes incluirla, no es necesario ni recomendado. Los navegadores prefieren valores sin barra al final si el dominio ya apunta a la raíz. Por ejemplo, asignar en el "id" la ruta (con diagonal al final): https://andreiarriaza.github.io/progressive-web-app/ podría ser reconocido como un error por algunos navegadores, por lo que se recomienda no incluirla.

                      Para qué sirve:
                        - Identificación única: Permite que el navegador distinga entre diferentes PWAs, incluso si comparten el mismo start_url.
                        - Gestión de instalaciones: Cuando instalas una PWA, el navegador usa este id para rastrear configuraciones o datos específicos de esa aplicación.
                        - Compatibilidad futura: Aunque su uso es limitado actualmente, se está convirtiendo en una práctica recomendada para PWAs modernas para garantizar un comportamiento más predecible en plataformas y actualizaciones.



            "name": "Chess Mate Club",     (Es el nombre completo de la aplicación web.
                                            Se mostrará cuando los usuarios añadan la PWA a su
                                            pantalla de inicio o en otros contextos donde el
                                            nombre completo pueda ser mostrado, como en la
                                            pantalla de bienvenida. Para el atributo name en el archivo manifest.json, se recomienda que el
                                            nombre no supere los 30 caracteres para asegurar que se muestre correctamente en todos los
                                            dispositivos, especialmente en la pantalla de inicio de dispositivos móviles, donde el espacio es limitado.)
            "short_name": "Chess Mate",     (Es la versión corta del nombre de la aplicación.
                                            Se utiliza cuando hay poco espacio para mostrar
                                            el nombre, como en la pantalla de inicio o en la
                                            barra de aplicaciones. Se recomienda que el nombre corto sea breve y fácilmente reconocible.
                                            Para el atributo short_name en el archivo manifest.json, se recomienda limitarlo a un número máximo de 15 caracteres.
                                            Este nombre abreviado se utiliza cuando hay restricciones de espacio, como en:
                                                - Íconos en la pantalla de inicio: Especialmente en dispositivos móviles, donde el nombre de la
                                                  aplicación aparece debajo del ícono y el espacio es muy limitado.
                                                - Menús de aplicaciones: Algunos sistemas operativos y lanzadores de aplicaciones muestran el short_name en lugar
                                                  del nombre completo (name) si este último es muy largo.
                                            )
            "description": "Bienvenidos al sitio web para
            amantes del ajedrez, en el cual encontrarás
            recomendaciones de libros, consejos de aperturas,
            finales, jaques mate y medio juego.",
                                      ( Proporciona una breve descripción de la aplicación.
                                       Esta descripción puede ser utilizada en tiendas de aplicaciones o en la configuración de la PWA para explicar a los usuarios el propósito de la app.En la práctica, es recomendable que la descripción sea breve y concisa, ya que algunos navegadores o sistemas podrían truncarla si es demasiado larga. Una buena práctica es mantener la descripción alrededor de 100 a 200 caracteres para asegurarse de que se muestre correctamente en todos los contextos, como tiendas de aplicaciones o cuando el usuario añade la PWA (Progressive Web App) a su pantalla de inicio.)


            "background_color": "#2B2B2B",    (Define el color de fondo de la pantalla de inicio
                                              cuando la aplicación está siendo cargada.
                                              Este color será visible mientras la aplicación
                                              se inicia, antes de que se cargue el contenido.)
            "theme_color": "#F0DB4F",  (Define el color de la barra de estado y de la barra de direcciones
                                        en dispositivos móviles al abrir la Progressive Web App)
            "orientation": "portrait",  (Se utiliza para especificar la
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
                                                      Permite cualquier orientación vertical. Si el usuario gira el
                                                      dispositivo al revés, la pantalla también rotará

                                            portrait-primary: La aplicación se abrirá en modo retrato en su orientación
                                                              principal. Sin embargo, puede cambiar a portrait-secondary si el usuario
                                                              gira el dispositivo 180 grados.

                                            portrait-secondary: Indica que la orientación retrato
                                                                secundaria (invertida) debe ser
                                                                utilizada. Esto es menos común y
                                                                generalmente se refiere a girar el dispositivo 180 grados.

                                            landscape:  La aplicación se mostrará en modo horizontal (paisaje).
                                                        Permite cualquier orientación horizontal (landscape-primary o landscape-secondary).
                                                        Es útil para aplicaciones de video, juegos y herramientas que requieren una pantalla más ancha.

                                            landscape-primary: La aplicación se abrirá en modo paisaje en su orientación principal.
                                                               Sin embargo, si el usuario gira el dispositivo, puede cambiar a landscape-secondary.

                                            landscape-secondary: La aplicación se abrirá en modo paisaje,
                                                                 pero en su orientación secundaria (invertida 180 grados).
                                                                 Es útil para dispositivos que tienen un lado preferido para sostener en horizontal.

                                            )

            "display": "standalone",  (Se utiliza para especificar cómo se debe mostrar la Progressive
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
                                                   dedicado.)
            "start_url": "/progressive-web-app/?utm_source=web_app_manifest", (Especifica la URL inicial de la
                                                                aplicación cuando se abre desde la
                                                                pantalla de inicio. Esto permitirá que sin importar desde cuál
                                                                sección de esta página (mates, libros, etc.) se instale o agregue a la pantalla de inicio
                                                                esta Progressive Web App, siempre la página de inicio sea el index principal. Se usó una ruta absoluta "/progressive-web-app/" para evitar problemas con el registro del Service Worker (solo hay un service worker en toda la aplicación, por lo que son necesarias rutas absolutas para que las páginas mates, libros, contacto y aperturas puedan utilizar el mismo service worker sin problema). Se debe recordar que esta progressive web app fue creada dentro del repositorio de github llamado "progressive-web-app", el cual funciona como un subdominio de la página raíz (dominio principal): "https://andreiarriaza.github.io", por ello se colocó la ruta "/progressive-web-app".
                                                                El parámetro                                                                utm_source=web_app_manifest puede ser
                                                                usado para rastrear el uso de la
                                                                aplicación como PWA en herramientas de
                                                                analítica (como Google Analytics).)

                                                                🔍 Ventajas de usar utm_source en start_url
                                                                  - Rastreo en Google Analytics: Permite diferenciar el tráfico que proviene de la PWA
                                                                    instalada respecto a otros accesos (como desde el navegador).
                                                                  - Mejora el análisis de usuarios: Puedes ver cuántos usuarios realmente usan la PWA
                                                                    como una "app" en comparación con los que la visitan directamente desde la web.
                                                                  - Segmentación de datos: Puedes filtrar sesiones en Google Analytics para analizar
                                                                    solo los usuarios que abren la app desde la pantalla de inicio.

                                                                Página de inicio: Cuando un usuario instala tu PWA y la abre desde la pantalla de inicio (por ejemplo, en un dispositivo móvil), la aplicación se abrirá en la URL definida por start_url.

                                                                Control de navegación: Permite a los desarrolladores dirigir a los usuarios a la página que mejor representa la aplicación o que debe ser la primera vista de la misma.

                                                                Inclusión de parámetros: Puedes incluir parámetros de URL en start_url, lo que permite personalizar la experiencia al iniciar la aplicación. Esto es útil para el seguimiento o para configurar el estado inicial de la aplicación.


                                                                 Qué es:
                                                                  La propiedad start_url define la URL inicial que se cargará cuando el usuario abra la PWA instalada.

                                                                  Para qué sirve:
                                                                   - Inicio de la app: Define dónde comienza la navegación dentro de tu aplicación. Por ejemplo, puede ser una página específica como index.html, una página de inicio personalizada, o incluso una sección de la app.
                                                                  - Personalización del contexto: Puedes incluir parámetros (como ?utm_source=web_app_manifest)
                                                                  para rastrear o ajustar el comportamiento de la app cuando se abre desde el ícono instalado.
                                                                 - Flexibilidad de rutas: Si tu aplicación utiliza un sistema de rutas (como en SPA (Single Page Application)), puedes especificar cualquier ruta válida para iniciar la app.
                                                                )
            "scope": "/progressive-web-app/",   (Define el ámbito de la aplicación. Este es el conjunto de URLs que
                                  forman parte de la PWA. Aquí, "./progressive-web-app" significa que cualquier URL que se encuentre dentro de la
                                  carpeta actual estará dentro del alcance de la PWA. Si la
                                  aplicación intenta acceder a URLs fuera de este ámbito, se comportará
                                  como un sitio web normal.) Se usó una ruta absoluta "/progressive-web-app/" para evitar problemas con el registro del Service Worker (solo hay un service worker en toda la aplicación, por lo que son necesarias rutas absolutas para que las páginas mates, libros, contacto y aperturas puedan utilizar el mismo service worker sin problema). Se debe recordar que esta progressive web app fue creada dentro del repositorio de github llamado "progressive-web-app", el cual funciona como un subdominio de la página raíz (dominio principal): "https://andreiarriaza.github.io", por ello se colocó la ruta "/progressive-web-app".

            "lang": "es-GT",    (Especifica el idioma predeterminado de la aplicación.
                                En este caso, es español de Guatemala (es-GT). Esto ayuda a los navegadores
                                y dispositivos a saber cuál es el idioma principal de la interfaz de usuario.)
            "icons": [                    (La propiedad icons define una lista de iconos que se usan en
                                          diferentes resoluciones para representar la aplicación.
                                          Cada ítem en la lista contiene:
                                            - src: La ruta al archivo de la imagen.
                                            - sizes: El tamaño de la imagen en píxeles (ej. 1024x1024).
                                            - type: El tipo de archivo, usualmente image/png.
                                          Estos íconos son los directamente relacionados con la instalación de la progressive web app. No tiene nada que
                                          ver con los recursos que se guardarán en caché para su uso offline. En este caso, se agregaron aquí los favicons,
                                          porque son las imágenes que se desea se muestren como ícono de la aplicación.
              {
                "src": "./assets/img/icon-1024x1024",   (IMPORTANTE:  esta tamaño no es necesario para
                                                  favicon, pero sí para PWA (Progressive Web App).
                                                  Los dispositivos modernos, como smartphones y tablets, a menudo cuentan con pantallas de alta
                                                  densidad de píxeles (como Retina en dispositivos Apple). Un ícono de 1024x1024 px se verá
                                                  nítido y claro en estas pantallas.)
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

           "screenshots": [

                  (La sección "screenshots" del archivo manifest.json en una Progressive Web App (PWA) permite especificar capturas de pantalla que se muestran como vista previa en tiendas de aplicaciones, como Google Play, o al añadir la aplicación a la pantalla de inicio de un dispositivo.

                  Especificaciones para las capturas de pantalla:

                        Resolución recomendada:
                            Aunque no hay una resolución estricta, Google recomienda un tamaño mínimo de 320 x 320 píxeles
                            y un tamaño máximo de 3840 x 3840 píxeles. Es ideal que las capturas tengan la misma relación de aspecto
                            que tu aplicación para representar mejor la experiencia de usuario.

                        Formato:
                            Las imágenes deben estar en formato PNG, JPEG, y WebP.

                        Cantidad de capturas:
                            No hay un límite exacto, pero se recomienda incluir entre 3 y 8 capturas de pantalla para que los usuarios
                            tengan una buena perspectiva de la aplicación sin abrumarlos.
                            Cada captura debe representar un aspecto clave o funcionalidad importante.

                  Relación de aspecto de las imágenes:
                    Las imágenes pueden tener diferentes dimensiones, pero la relación de aspecto debe ser consistente
                    para todas las imágenes dentro de un mismo form_factor. Esto quiere decir, que si para el form_factor "wide",
                    se optó por la relación de aspecto 16:9, las capturas de pantalla pueden tener diferentes dimensiones pero todas
                    deben tener una relación de aspecto de 16:9, de lo contrario, se mostrará una advertencia en el "manifest" en las herramientas
                    para desarrolladores de Chrome:



                    Por ejemplo:
                            Si tienes imágenes con un form_factor de "wide", todas deben tener una relación de aspecto idéntica (por ejemplo, 16:9).
                            Lo mismo ocurre con el form_factor "narrow"; las imágenes dentro de esa categoría deben tener la misma relación de aspecto,
                            es decir, 9:16 (la relación de aspecto de "wide" invertida).

                  Los siguientes tamaños, tiene todos una relación de aspecto de 16:9:
                      - 2560X1440
                      - 1920X1080
                      - 1280X720

                  El campo screenshots en el manifest.json de una Progressive Web App (PWA) se utiliza para
                  proporcionar imágenes que muestran cómo se ve la aplicación en diferentes contextos. Estas
                  capturas de pantalla son especialmente útiles para las siguientes razones:

                    1. Una de las imágenes asignadas aquí, será la que se mostrará cuando se inicie la instalación de la Progressive Web App,
                       junto con el título y la descrición de la Progressive Web App que se definieron en el archivo "manifest.json".

                    2. Mejorar la Presentación de la PWA: Las capturas de pantalla ayudan a los usuarios a tener una idea visual de la
                       experiencia de usuario que ofrece la PWA. Esto puede aumentar la tasa de instalación al mostrar la interfaz atractiva
                       y funcional de la aplicación.

                    3. Reforzar la Identidad de la Aplicación: Al incluir capturas de pantalla que reflejan la
                       apariencia y las características de la aplicación, se puede ayudar a construir una identidad
                       visual más fuerte y consistente.

                    4. Aumentar la Confianza del Usuario: Mostrar cómo se verá la aplicación una vez instalada
                       puede ayudar a generar confianza en los usuarios, especialmente si están considerando
                       instalar la aplicación desde su navegador.

                    5. Diferenciación en la Tienda de Aplicaciones: Si la PWA se presenta en una tienda de
                       aplicaciones, las capturas de pantalla pueden ayudar a diferenciarla de otras aplicaciones, atrayendo así más usuarios).

                  )


              {
                "src": "./assets/img/screenshot-wide-2560x1440",
                "sizes": "2560x1440",
                "type": "image/png",
                "form_factor": "wide"    (El atributo "form_factor" en el "manifest.json" de una Progressive Web App (PWA) especifica el tipo de dispositivo en el
                                          que se recomienda que se muestren ciertos elementos visuales, como capturas de pantalla en la sección "screenshots".
                                          Este atributo ayuda a mostrar la vista previa correcta dependiendo del tipo de dispositivo en el que el usuario se encuentra, mejorando así la experiencia al mostrar imágenes más relevantes.

                                          Valores comunes de "form_factor":
                                            "wide": Indica que la captura de pantalla o el recurso visual está diseñado para dispositivos con pantallas
                                                    más anchas, como tablets, laptops y monitores de escritorio. Relación de aspecto 16:9.
                                            "narrow": Indica que la captura es para dispositivos con pantallas más estrechas, como teléfonos móviles en orientación
                                                      vertical. Relación de aspecto 9:16.



                                          Tamaños recomendados para wide:
                                            - 2560x1440 (QHD o 2K) — Relación de aspecto 16:9
                                                  Uso: Monitores y pantallas de alta resolución, como laptops de gama alta o pantallas grandes.
                                            - 1920x1080 (Full HD) — Relación de aspecto 16:9
                                                  Uso: Ideal para pantallas de computadora, televisores y la mayoría de dispositivos de alta resolución.
                                            - 1600x900 (HD+) — Relación de aspecto 16:9
                                                  Uso: Resolución común en monitores de computadoras y laptops más antiguas o de gama media.
                                            - 1280x720 (HD) — Relación de aspecto 16:9
                                                  Uso: Pantallas de teléfonos móviles más antiguos, tablets y dispositivos con pantallas más pequeñas.                              )
              },
              {
                "src": "./assets/img/screenshot-wide-1920x1080",
                "sizes": "1920x1080",
                "type": "image/png",
                "form_factor": "wide"
              },
              {
                "src": "./assets/img/screenshot-wide-1600x900",
                "sizes": "1600x900",
                "type": "image/png",
                "form_factor": "wide"
              },
              {
                "src": "./assets/img/screenshot-wide-1280x720",
                "sizes": "1280x720",
                "type": "image/png",
                "form_factor": "wide"
              },
              {
                "src": "./assets/img/screenshot-portrait-483X997.png",
                "sizes": "483x997",
                "type": "image/png",
                "form_factor": "narrow"

                                            Tamaños recomendados para narrow (9:16):
                                                - 1440x2560 px — Relación de aspecto 9:16 (Quad HD)
                                                     Uso: Este tamaño es ideal para teléfonos de gama alta con pantallas de resolución más alta,
                                                     como dispositivos Android más nuevos y modelos de iPhone de última generación. También es una buena
                                                     opción para tabletas de mayor resolución.
                                                - 1080x1920 px — Relación de aspecto 9:16
                                                     Uso: Esta es una resolución común en dispositivos móviles de gama alta, como muchos teléfonos Android y iPhones modernos (iPhone 6, 7, 8, etc.). Es ampliamente compatible y se ve bien en la mayoría de los dispositivos.
                                                - 720x1280 px — Relación de aspecto 9:16
                                                    Uso: resolución HD, adecuada para dispositivos con pantallas más pequeñas o de menor resolución.
                                                    Es una opción ligera y adecuada para dispositivos con especificaciones más bajas.

              },
              {
                "src": "./assets/img/screenshot-portrait-1440x2560.png",
                "sizes": "1440x2560",
                "type": "image/png",
                "form_factor": "narrow"
              },
              {
                "src": "./assets/img/screenshots-portrait-1080x1920.png",
                "sizes": "1080x1920",
                "type": "image/png",
                "form_factor": "narrow"
              },
               {
                "src": "./assets/img/screenshots-portrait-768x1366.png",
                "sizes": "720x1280",
                "type": "image/png",
                "form_factor": "narrow"
              }
            ],
          "protocol_handlers": [
            {
              "protocol": "web+micontacto",   (La propiedad "protocol_handlers" en el archivo manifest.json de una Progressive Web App (PWA) permite que
                                              la aplicación maneje ciertos esquemas de protocolo personalizados o ya existentes en URLs. Esto
                                              significa que puedes registrar tu PWA como el manejador predeterminado para abrir enlaces que comiencen
                                              con un esquema específico, como mailto: (para correos electrónicos) o incluso esquemas personalizados
                                              como web+miapp.

                                            ¿Para qué sirve?
                                              La propiedad "protocol_handlers" permite a los usuarios abrir tu aplicación directamente desde enlaces externos con un esquema específico, proporcionando una experiencia más integrada y conectada. Es especialmente útil para:
                                                - Registrar tu aplicación como manejador de correos electrónicos o mensajería:
                                                - Permite que tu PWA maneje enlaces como mailto: (correos electrónicos) o tel: (llamadas telefónicas).
                                                - Soporte para protocolos personalizados: Puedes crear y manejar esquemas personalizados como web+miapp: para interactuar con tu aplicación de manera específica. Por ejemplo: definir el protocolo "web+notas" para una Progressive Web App tipo "Notion".
                                                - Integrar servicios web en el navegador: Por ejemplo, puedes registrar tu PWA como manejador para abrir enlaces específicos desde otro sitio web o aplicación.)


              "url": "http://127.0.0.1:5500/contacto/?data=%s"    (IMPORTANTE: si se sube este sitio web a un Hosting, es imperativo cambiar
                                                                      la URL: http://127.0.0.1:5500 por la URL del dominio en el que se cargó el sitio web, de lo contrario se generará un error porque dicho link está fuera del ámbito de la Progressive Web App. )
            }
          ]
        }








    /* IMPORTANTE: para comprobar que el "manifest.json" funciona correctamente,
     se deben seguir los siguientes pasos:

     1. Abrir las herramientas para desarrolladores de Chrome (F12).
     2. Navegar hasta el menú "Application" (Aplicación).
     3. Ya debería aparecer los datos del "manifest.json". Si hubiese algún error,
        acá se mostrará.*/


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

```

```
