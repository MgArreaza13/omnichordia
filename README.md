# My Microservice Project

Este proyecto es un microservicio desarrollado en TypeScript que emplea arquitectura hexagonal, Domain-Driven Design (DDD), diseño impulsado por eventos, Docker, CI/CD con GitHub Actions, y sigue las mejores prácticas de desarrollo. Está diseñado para ser fácilmente escalable y mantenible, soportando la inyección de dependencias para facilitar la adaptabilidad a diferentes tecnologías.

## Estructura del Proyecto

- **src/**: Código fuente del proyecto.
  - **server/**: Configuración del servidor y aplicación.
    - `index.ts`: Punto de entrada del servidor.
    - `app.ts`: Configuración y exportación de la instancia Express.
    - `routes.ts`: Definición de rutas.
    - `middleware.ts`: Implementación de middlewares.
    - `environment.ts`: Configuración de variables de entorno.
    - `graceful-shutdown.ts`: Manejo del cierre gracioso.
  - **domain/**: Entidades de dominio y lógica de negocios.
    - `entities/`: Modelos de dominio.
    - `services/`: Lógica de negocios.
    - `events/`: Manejo de eventos de dominio.
  - **application/**: Casos de uso y orquestación de lógica.
    - `use-cases/`: Implementación de casos de uso.
    - `ports/`: Interfaces para adaptadores secundarios.
  - **infrastructure/**: Implementaciones técnicas y adaptadores de infraestructuras.
    - `adapters/`: Integración con infraestructuras externas.
    - `persistence/`: Persistencia de datos y repositorios.
    - `configuration/`: Archivos de configuración de infraestructura.
      - `ormconfig.ts`: Configuraciones para TypeORM.
    - `messaging/`: Sistemas de mensajería y eventos.
  - **interfaces/**: Adaptadores primarios (ej: API HTTP, CLI).
    - `http/`: Controladores REST.
    - `graphql/`: Resolvers GraphQL.
    - `cli/`: Comandos de línea de comandos.
    - `message-handlers/`: Manejadores de eventos.

- **tests/**: Pruebas de todo el proyecto.
  - `unit/`: Pruebas unitarias.
  - `integration/`: Pruebas de integración.
  - `e2e/`: Pruebas de extremo a extremo (E2E).

- **scripts/**: Scripts útiles para tareas de desarrollo y despliegue.
  - `docker/`: Scripts relacionados con Docker.
  - `ci-cd/`: Scripts para CI/CD.
  - `misc/`: Scripts varios.

- **.github/workflows/**: Configuración de GitHub Actions para automatización.

- **docker/**: Configuraciones Docker para desarrollo y despliegue.
  - `Dockerfile`: Construcción de la imagen Docker.
  - `docker-compose.yml`: Orquestación con Docker Compose.

- **Makefile**: Tareas automatizadas para desarrollo y despliegue.
- **package.json**: Dependencias y scripts del proyecto.
- **tsconfig.json**: Configuración del compilador TypeScript.

## Comenzando

Para iniciar con este proyecto, sigue los pasos a continuación:

1. Clona este repositorio: `git clone https://github.com/tu-usuario/my-microservice-project.git`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno adecuadas en el archivo `.env`
4. Compila y ejecuta el proyecto con los scripts de `package.json`.

### Scripts Útiles

- `npm run build`: Compila el código TypeScript.
- `npm start`: Inicia el servidor en modo producción.
- `npm test`: Ejecuta todas las pruebas unitarias.
- `npm run test:integration`: Ejecuta pruebas de integración.
- `npm run test:e2e`: Ejecuta pruebas E2E con Cucumber y Gherkin.

## Health Check

Un endpoint de verificación de estado está disponible en `/health` para comprobar la disponibilidad del servicio. Este devuelve información sobre el estado actual del servicio.

## Configuración de Base de Datos

La aplicación utiliza TypeORM para gestionar la base de datos. La configuración se encuentra en `src/infrastructure/configuration/ormconfig.ts`. Gracias a la inyección de dependencias, es sencillo adaptar el proyecto para trabajar con diferentes bases de datos.

## Pruebas

Este proyecto incluye un conjunto completo de pruebas para garantizar la calidad del código y el correcto comportamiento del sistema.

### Tipos de Pruebas

- **Unitarias**: Verifican la funcionalidad de componentes individuales.
- **Integración**: Aseguran que los diferentes módulos o servicios funcionen juntos como se espera.
- **Extremo a Extremo (E2E)**: Prueban el sistema completo desde la perspectiva de un usuario, asegurando que los flujos de trabajo críticos funcionen como se espera.

### Ejecución de las Pruebas

Puedes ejecutar las pruebas utilizando el `Makefile` para simplificar las acciones:

- `make test`: Ejecuta todas las pruebas definidas en el proyecto.

Asegúrate de que todos los servicios necesarios estén funcionando antes de ejecutar las pruebas E2E para obtener resultados precisos.

## Comandos de Makefile Útiles

El `Makefile` proporciona comandos automatizados que facilitan el manejo del entorno de desarrollo y despliegue.

- `make dev`: Inicia los servicios para el entorno de desarrollo.
- `make local`: Inicia los servicios para el entorno local.
- `make qa`: Inicia los servicios para el entorno de calidad (QA).
- `make staging`: Inicia los servicios para el entorno de staging.
- `make prod`: Inicia los servicios para el entorno de producción.
- `make up`: Arranca los contenedores Docker usando Docker Compose.
- `make down`: Detiene y elimina los contenedores de Docker actuales.
- `make build`: Construye las imágenes de Docker para el entorno actual.
- `make test`: Ejecuta todas las pruebas para el entorno actual.
- `make help`: Muestra ayuda y documentación para todos los comandos disponibles en el `Makefile`.

## Health Check

Un endpoint de verificación de estado está disponible en `/health` para comprobar la disponibilidad del servicio. Este endpoint devuelve información sobre el estado actual del servicio y asegura que todas las dependencias críticas estén funcionando correctamente.

## Configuración de Base de Datos

La aplicación utiliza TypeORM para gestionar la conexión y las operaciones en la base de datos. La configuración se encuentra en `src/infrastructure/configuration/ormconfig.ts`. Gracias a la inyección de dependencias, el proyecto está diseñado para ser fácilmente ajustable a diferentes sistemas de bases de datos si es necesario en el futuro.

## Contribuciones

Contribuciones al proyecto son bienvenidas y deben seguir las mejores prácticas de desarrollo. Por favor, asegúrate de incluir pruebas relevantes al implementar una nueva característica o un arreglo de bugs.

## Autor

Miguel Arreaza

Para preguntas o discusiones sobre este proyecto, no dudes en abrir un issue en este repositorio.

```
my-microservices-project
├── .dockerignore
├── .editorconfig
├── .env
├── .env.dev
├── .env.local
├── .env.prod
├── .env.qa
├── .env.staging
├── .eslintrc.json
├── .github
│   └── workflows
├── .gitignore
├── .nvmrc
├── .prettierrc
├── .vscode
│   └── settings.json
├── Makefile
├── README.md
├── app
├── babel.config.js
├── docker
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── docker-compose.base.yml
│   ├── docker-compose.dev.yml
│   ├── docker-compose.local.yml
│   ├── docker-compose.prod.yml
│   ├── docker-compose.qa.yml
│   └── docker-compose.staging.yml
├── jest.config.js
├── package-lock.json
├── package.json
├── scripts
│   ├── ci-cd
│   ├── docker
│   └── misc
├── src
│   ├── application
│   │   ├── ports
│   │   └── use-cases
│   │       ├── health-check-database.use-case.ts
│   │       └── health-check.use-case.ts
│   ├── config
│   ├── domain
│   │   ├── entities
│   │   ├── events
│   │   └── services
│   ├── index.ts
│   ├── infrastructure
│   │   ├── adapters
│   │   │   └── TypeORMDataSource.ts
│   │   ├── configuration
│   │   │   └── ormconfig.ts
│   │   ├── messaging
│   │   └── persistence
│   ├── interfaces
│   │   ├── http
│   │   │   └── health-check.controller.ts
│   │   └── message-handlers
│   └── server
│       ├── app.ts
│       ├── environment.ts
│       ├── graceful-shutdown.ts
│       ├── middleware.ts
│       └── routes.ts
├── tests
│   ├── e2e
│   │   ├── features
│   │   │   └── health-check.feature
│   │   └── steps
│   │       └── health-check.steps.ts
│   ├── integration
│   │   └── health-check.integration.test.ts
│   └── unit
│       └── health-check.use-case.test.ts
└── tsconfig.json



```
