### PSONRIE
El proyecto fue estructurado de la siguiente forma ya que es mas fácil  de manipular componentes
y servicios dentro del proyecto simplemente copiando y pegando, y realizandolo una unica vez.

Tenemos la estructura a continuación:
* **Common** : Esta carpeta alojara los archivos "Utilities" para logicas y centralización de negocio. Adicional, tendra nuestro archivo de alertas que seran utilizadas para informar al usuario sobre procesos.

* **Components** : Esta carpeta alojará todos los componentes globales que se utilizaran como el navbar, el footer, etc.

* **Models** : Acá guardaremos todos los modelos que se necesiten para interactuar con la aplicación y los servicios que
se vayan a consumir.

* **Modules** : Dentro de esta carpeta se crearan cada una de las vistas de negocio dependiendo del menu lateral o navbar
el cual nos brindara la estructura de esta carpeta. Se crea una carpeta por cada opcion del menu; con su respectivo routing
y module; esto puesto que mejora la interacción del usuario con cada vista. El routing dentro de cada uno es para una comunicación mas rápida y fácil de entender cuando un proyecto crece bastante. Por ultimo tendremos un modulo global que alojará todos los componentes hijos que se repetiran más de lo normal dentro del proyecto y tendremos que utilizarlos en varias vistas.

* **Store** : En esta carpeta habra un store nos ayudará a tener un contenedor siempre disponible con todos los datos de la aplicación; esto porque normalmente, en una aplicación Angular tenemos varios servicios para mantener los datos, cuando la aplicación crece puede hacerse difícil conocer qué servicio es el que está realizando determinados cambios



### Pre-requisitos 📋

**Debera tener instalado:**
* **Angular (Angular CLI)** : ^8.2.2
* **Angular Framework**     : ^8.2.2
* **NodeJS**                : v12.16.3
* **npm**                   : 6.4.1


### Instalación 🔧

Al momento de tener nuestro ambiente configurado y clonar nuestro codigo, ejecutamos en una ventana
de comandos **npm install** para descargar nuestras dependencias. El portal despliegara por el puerto 4201.


## Autores ✒️

* **Diego Mesa** - *Desarrollo Front-end*


## Expresiones de Gratitud 🎁

* Invita una cerveza 🍺 a alguien del equipo.
