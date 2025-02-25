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

   
*/
/*      
        
         Protocol Handlers (Manejadores de Protocolo): 
          Los Protocol Handlers permiten que las aplicaciones web interactúen con servicios externos o incluso con otras aplicaciones 
          nativas, usando un protocolo personalizado. Este mecanismo puede ser muy útil para tareas como la integración de una PWA (Progressive Web App) 
          con aplicaciones móviles, abrir una aplicación en particular, o hacer uso de servicios de terceros. A continuación, te presento algunos 
          ejemplos claros de uso de Protocol Handlers.
    
          IMPORTANTE: los protocol handlers funcionan únicamente en Windows. ¡No funciona en dispositivos móviles!
    
          IMPORTANTE 2: link de Google Chrome de referencia para conocer más de Protocol Handlers: https://developer.chrome.com/docs/web-platform/best-practices/url-protocol-handler?hl=es-419
    
          1. Abrir una aplicación nativa desde el navegador
                Supón que tienes una aplicación nativa en un teléfono móvil, como una aplicación de mensajería (por ejemplo, WhatsApp, 
                Telegram, o una app personalizada) y quieres abrirla directamente desde tu sitio web. Esto es un uso clásico de los Protocol Handlers.
    
              Ejemplo: Abrir WhatsApp desde una página web
                Supongamos que quieres permitir que los usuarios se conecten directamente con alguien en WhatsApp mediante 
                un clic en un enlace. Puedes usar el protocolo whatsapp:// para lograrlo.
    
              Cuando un usuario hace clic en este enlace, si tiene instalada la aplicación de WhatsApp, se abrirá y automáticamente 
              comenzará una conversación con el número especificado. Este tipo de protocolo personalizado (whatsapp://) es 
              manejado por la aplicación móvil de WhatsApp.
    
         Prefijo web+: Es una buena práctica utilizar el prefijo web+ en tus protocolos personalizados para evitar conflictos con protocolos existentes y adherirte a las recomendaciones de los estándares web.
    
    
    
         El manejo de protocolos personalizados con protocol_handlers en una Progressive Web App (PWA) te permite registrar protocolos específicos que luego serán manejados directamente por tu aplicación. Esto significa que puedes crear enlaces con un protocolo personalizado (como web+micontacto://) que redirijan a tu PWA, facilitando la interacción con la app fuera del típico comportamiento web.
    
    ¿Para qué sirve exactamente?
    - Redirigir a la PWA desde otros contextos:
    
        Permite que otros sitios web, correos electrónicos, o incluso aplicaciones puedan crear enlaces con un protocolo específico que 
        redirija directamente a tu PWA. En lugar de abrir otra aplicación o una página genérica, el navegador abrirá tu PWA con una URL 
        personalizada, procesando parámetros en la URL para realizar acciones específicas.
    
    - Mejorar la experiencia de usuario:
    
        Puedes mejorar la navegación y la interacción de los usuarios con tu app creando enlaces que pasen datos 
        específicos (como identificadores o nombres) directamente a tu PWA, permitiendo que la app cargue una página o información personalizada al instante.
    
    Ejemplos Prácticos
       PWA para Contactos Personalizados
          Imagina que tienes una PWA de gestión de contactos y quieres que otros usuarios o aplicaciones puedan abrir un 
          contacto específico usando un protocolo personalizado.
    
    
    Los protocol handlerse no funciona en Smartphones:
    
    Es importante aclarar que los Protocol Handlers son una característica relativamente nueva y no son necesariamente compatibles con todos los navegadores ni plataformas, especialmente en dispositivos móviles. El soporte de Protocol Handlers en smartphones puede variar dependiendo del sistema operativo, el navegador y la configuración del dispositivo.
    
    Razones por las que no funciona en smartphones:
     
    Limitaciones del sistema operativo móvil:
    
      - Android y iOS tienen restricciones más estrictas en cuanto a la ejecución de protocolos personalizados desde aplicaciones web, principalmente 
        por razones de seguridad.
      - Algunos sistemas operativos no permiten la ejecución de protocolos personalizados a través de navegadores móviles, especialmente si no está registrado el 
        protocolo en el sistema operativo.
     
    Compatibilidad de navegadores móviles:
      - Los navegadores móviles pueden no soportar los Protocol Handlers de la misma manera que los navegadores de escritorio. 
        Incluso si el navegador de escritorio (como Chrome, Edge o Firefox) en una computadora soporta Protocol Handlers, 
        los navegadores en dispositivos móviles como Chrome para Android o Safari para iOS pueden no soportarlos o tener limitaciones en su funcionamiento.
     
    Restricciones de seguridad:
      - Los navegadores en dispositivos móviles tienen políticas de seguridad más estrictas. Pueden bloquear los intentos de abrir aplicaciones 
        nativas mediante protocolos personalizados, ya que esto puede ser un vector de ataque para aplicaciones maliciosas.
     
    Manifest de la PWA:
      - Aunque en tu manifest.json defines un Protocol Handler, es importante saber que no todos los navegadores en dispositivos móviles respetan estas 
        configuraciones de la misma manera. Por ejemplo, los Protocol Handlers definidos en el manifest de una PWA son más efectivos en el navegador de escritorio que en dispositivos móviles.
    Compatibilidad con iOS:
      - En iOS, Safari es más restrictivo con los protocolos personalizados. No siempre permite abrir aplicaciones nativas mediante un protocolo personalizado 
        directamente desde el navegador.
    
    Definición del protocolo en el manifest.json:
    
      {
        "name": "Gestión de Contactos",
        "protocol_handlers": [
          {
            "protocol": "web+micontacto",
            "url": "https://miapp.com/contacto.html?id=%s"
          }
        ]
      }
    
    Ahora, cualquier enlace del tipo web+contacto://12345 redirigirá a la PWA con la URL:
        https://miapp.com/contacto.html?id=12345
    
          Ejemplo de Enlace Personalizado:
    
    
      <a href="web+contacto://12345">Ver Contacto 12345</a>
    
    
    
      Al hacer clic en este enlace:
          La PWA abrirá la página contacto.html, y la aplicación podrá mostrar automáticamente 
          los detalles del contacto con ID 12345.
    
          Manejo del Parámetro en la PWA (contacto.html):
    
          const urlParams = new URLSearchParams(window.location.search);
          const rawCcontactoId = urlParams.get('id');
    
          if (rawCcontactoId) {
               const contactoId = rawContactoId
    
            .replace("web+micontacto://", "")
            .replace("/", "");
            
            document.getElementById("contact-id").textContent = `ID: ${contactoId}
            document.getElementById('contact-info').textContent = `Mostrando detalles del contacto ID: ${contactoId}`;
          }
         */

/* 
    - URLSearchParams: Esta clase permite trabajar con los parámetros de la URL, en este caso, los que 
      vienen después del signo ?. 
        
    - window.location.search: Obtiene la parte de la URL que contiene los parámetros (lo que está   
      después del ?).

*/
const urlParams = new URLSearchParams(window.location.search);
/* - urlParams.get("id"): Extrae el valor del parámetro id de la URL (por ejemplo, si la URL es ?id=web+micontacto://100/, entonces rawContactoId contendría web+micontacto://100/). */
const rawContactoId = urlParams.get("id");

/* El if (rawContactoId) comprueba si hay algún valor en el parámetro id. Si lo hay, procede a procesarlo. */
if (rawContactoId) {
  /*
  - rawContactoId.replace("web+micontacto://", "").replace("/", "")
    Con estas dos llamadas a .replace(), se elimina la parte de la URL
    ("web+micontacto://") y la diagonal ("/") para obtener únicamente el "id".
    Básicamente, se sustituye cada una de esas cadenas por una cadena vacía.
    Se debe recordar que la variable "rawContactoId" contendrá, por ejemplo, un valor como el siguiente: web+micontacto://100/
*/
  const contactoId = rawContactoId

    .replace("web+micontacto://", "")
    .replace("/", "");

  document.getElementById("contact-id").textContent = `ID: ${contactoId}`;
  console.log(contactoId);

  /* Acá se comprueba el valor del "id". No se aplicó igualdad estricta (===), porque el parámetro no es un número, sino una cadena de texto. */
  if (contactoId == 100) {
    /*  Se modifica el valor del elemento que tiene asignada la clase "contact-info".*/
    document.getElementById(
      "contact-info"
    ).textContent = `Nombre: Andrei Arriaza`;
  } else if (contactoId == 200) {
    document.getElementById(
      "contact-info"
    ).textContent = `Nombre: Bobby Fischer`;
  }
}
