# Usa una imagen base de Node.js
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos de configuración y de dependencias al contenedor
COPY package*.json ./
COPY tsconfig.json ./

# Instala los módulos necesarios y herramientas globales en una sola capa
RUN apk add --no-cache bash \
    && npm install \
    && npm install -g typescript tsx

# Copia el código fuente al contenedor (excluye node_modules para permitir el cacheo efectivo)
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE $APP_PORT
