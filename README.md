SportClub - Aplicación ecommerce generada para el curso de React en Coderhouse.

En esta simulamos un store de maquinaria orientada a la musculacion y el bienestar fisico.

## Scripts ejecutables

En este proyecto puedes ejecutar:

### `npm start` 

Ejecuta el app en entorno de Desarrollo y muestra el proyecto en el navegador

## Dependencias utilizadas

- `React Router`: Linkeo de enlaces internos
- `Firebase`: Base de datos del backend. Servicio de google.

Nota: una vez clonado el proyecto a tu carpeta, ejecuta en tu terminal "npm install" para que se te descarguen estas dependencias y el proyecto funciones correctamente, "npm install react-router-dom" para instalar los enrutadores, y "npm install firebase" para instalar los archivos necesarios de conexión con la base de datos de Google.

## Pre-requisitos
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js > 16](https://nodejs.org) y npm.

## Estructura de carpetas
- `src`: Es la carpeta contenedora de todo nuestro codigo dentro de la aplicacion de React y contiene todas las funcionalidades.
    - `components`: Es la carpeta que contiene todos los componentes de nuestra aplicacion.
    - `styles.css`: Contiene los archivos css de los componentes linkeados al punto exacto de codeo.
- `App.js`: Componente principal donde se ejecuta la lógica madre de la aplicación.
- `context`: Es la carpeta que contiene la lógica relacionada a los estados de la aplicación.
- `services`: Contiene las funciones que solicitan los datos a firebase (base de datos).
- `images`: En este caso contiene solamente el logo de la marca, posicionado en el NavBar.

## Estilos
Se utiliza la forma de nombrar archivos de estilos como "styles.css" exportandolos e importandolos en cada componente, nos crea un estilo único para cada uso, y además nos facilita el trabajo al momento de la búsqueda del mismo para realizar modificaciones. 