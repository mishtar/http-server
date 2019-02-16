# HTTP Server #

Creación de un servidor HTTP básico en Node.js, usando la descripción formal del protocolo HTTP 1.1 descrito en [RFC2616](https://tools.ietf.org/html/rfc2616 "RFC2616").

## Tecnología / Framework usados ##

* [Nodejs](https://nodejs.org/es/ "Nodejs")
* [Typescript] (https://www.typescriptlang.org/ “Typescript”)

El paquete se construye en nodejs debido a las ventajas que ofrece el lenguaje como:
* Curva de aprendizaje
* Fácil ejecución en una gran cantidad de servidores
* Rendimiento e introducción de pocas fallas técnicas debido a la facilidad del lenguaje
* Soporte de la comunidad
* Facilidad de reuso de paquetes

Además se prefiere TypeScript sobre Javascript debido al sistema de tipado que posee y a la posibilidad del uso de las últimas funcionalidades del ECMAScript, y finalmente a la posibilidad del uso de interfaces.

## Diseño ##

### Elementos ###

Se implementará en la capa del modelo OSI de transporte, para ello el servidor HTTP estará conformado por los siguientes elementos:
* Sockets
* Echo Server
* HTTP Requests
* Clase de parseo
* Manejador de requests
* Logging
* Responses


## Definición del socket y servidor TCP ##

El elemento central del desarrollo es el servidor TCP, el cual usará un socket para escuchar las peticiones, para la creación de este servidor TCP, se necesitará:

* Crear el socket
* Identificar el socket
* Escuchar por una conexión entrante
* Recibir y enviar mensajes
* Cerrar el socket


### Diseño detallado ###

Se seguirán los siguientes pasos para crear el servidor:

* Método principal (Realización de los llamados)
* Creación de un servidor TCP (usando sockets).
  * Echo Server
  * Adaptación del Echo Server.
* Implementación del protocolo HTTP
  * Headers
  * Status Codes
  * Definición HTTP requests 
  * Parseo HTTP Requests (utilizando la especificación RFC2616)
  * Implementación de HTTP requests
  * Implementación de Logging
  * Retorno del response

Para la creación del servidor HTTP se comenzará creando un servidor TCP usando como base un Echo server y recibiendo un objecto de tipo Socket, el Echo server retornará la información que reciba y escuchará las peticiones realizadas por el socket, ésta será la construcción del servidor TCP.

El servidor HTTP será una modificación del servidor TCP, al cual se le integrarán todos los elementos definidos en la especificación del protocolo HTTP 1.1, se creará una clase base para los requests y los responses y una clase para realizar la interpretación del request que se envíe para que cumpla con la especificación definida anteriormente.

Finalmente se implementará un log de todos los requests que lleguen al servidor y se enviará un response con el status code (definidos en una abstracción), que finalizará el ciclo de vida de la petición / request.


### Diagrama solución ###

![picture alt](https://i.ibb.co/KxJQzmw/Mindmap-1-5.png "Title is optional")

![picture alt](https://cdn-images-1.medium.com/max/1600/1*JSnJtHpU7cWUnWIgGupu7w.png "Title is optional")

CLASES!!!

## Implementación ##

Para la implementación se utilizará `Node.js`, y se usará el paquete `net` para la implementación del servidor TCP (sockets).

## Requisitos ##

* `npm 3.10.10` o superior
* `node 6.15.0` o superior

## Instalación ##

`npm install`
`npm run build`
`node lib/index.js`

También se puede acceder a la implementación en Heroku: LINK

## Autores ##

BLA BLA BLA
BLA BLA BLA
BLA BLA BLA

## Reconocimientos ##

## Pendientes ##

Diagrama interaccion <- Sebas
Diagrama clases <- Influencer
ESLint <- Jose
STATUS_CODES <- Sebas
Log <- Jose
