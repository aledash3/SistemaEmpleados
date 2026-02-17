##🧑‍💼 Sistema de Gestión de Empleados

Sistema web desarrollado con arquitectura **MEAN Stack (MongoDB,
Express, Angular, Node.js)** para la administración y gestión de
empleados dentro de una organización.

------------------------------------------------------------------------

## 📌 Descripción

El proyecto permite realizar operaciones CRUD (Crear, Leer, Actualizar y
Eliminar) sobre empleados mediante una aplicación web moderna con
separación clara entre:

-   🔹 Backend (API REST)
-   🔹 Frontend (Aplicación Angular)

El sistema está diseñado con arquitectura cliente-servidor, siguiendo
buenas prácticas de desarrollo web.

------------------------------------------------------------------------

## 🏗️ Arquitectura del Proyecto

SistemaEmpleados/ │ ├── backend/ → API REST con Node.js y Express\
├── frontend/ → Aplicación Angular\
├── package.json\
└── package-lock.json

------------------------------------------------------------------------

## 🚀 Tecnologías Utilizadas

### Backend

-   Node.js\
-   Express\
-   MongoDB\
-   Mongoose\
-   Cors\
-   Nodemon

### Frontend

-   Angular\
-   TypeScript\
-   HTML5\
-   CSS3\
-   Bootstrap (si aplica)

### Base de Datos

-   MongoDB Atlas (Base de datos en la nube)

------------------------------------------------------------------------

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

``` bash
git clone https://github.com/aledash3/SistemaEmpleados.git
cd SistemaEmpleados
```

------------------------------------------------------------------------

## 🔹 Backend

### Instalar dependencias

``` bash
cd backend
npm install
```

### Ejecutar servidor

``` bash
npm run dev
```

O si no existe script dev:

``` bash
node index.js
```

Servidor en:

http://localhost:4000

------------------------------------------------------------------------

## 🔹 Frontend

### Instalar dependencias

``` bash
cd frontend
npm install
```

### Ejecutar aplicación Angular

``` bash
ng serve
```

Disponible en:

http://localhost:4200

------------------------------------------------------------------------

## 🔗 Endpoints Principales (Ejemplo)

  Método   Endpoint             Descripción
  -------- -------------------- -----------------------------
  GET      /api/empleados       Obtener todos los empleados
  GET      /api/empleados/:id   Obtener empleado por ID
  POST     /api/empleados       Crear nuevo empleado
  PUT      /api/empleados/:id   Actualizar empleado
  DELETE   /api/empleados/:id   Eliminar empleado

------------------------------------------------------------------------

## 📊 Funcionalidades

-   ✔️ Registro de empleados\
-   ✔️ Listado de empleados\
-   ✔️ Edición de información\
-   ✔️ Eliminación de empleados\
-   ✔️ Conexión a base de datos MongoDB Atlas\
-   ✔️ Arquitectura separada frontend/backend

------------------------------------------------------------------------

## 🧠 Modelo de Datos (Ejemplo)

``` js
{
  nombre: String,
  cargo: String,
  salario: Number,
  departamento: String,
  fechaIngreso: Date
}
```

------------------------------------------------------------------------

## 🔐 Configuración de Variables de Entorno

Crear un archivo `.env` en la carpeta backend:

MONGODB_URI=tu_cadena_de_conexion\
PORT=4000

------------------------------------------------------------------------

## 👨‍💻 Autor
David Alejandro Cruz Palacios 
Proyecto académico -- Ingeniería en Ciencias de la Computación
------------------------------------------------------------------------

## 📄 Licencia

Proyecto desarrollado con fines académicos.

