# Variables generales
ROOT_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
ENVIRONMENT ?= local
COMPOSE_BASE = $(ROOT_DIR)docker/docker-compose.base.yml
COMPOSE_FILE = $(ROOT_DIR)docker/docker-compose.$(ENVIRONMENT).yml
ENV_FILE = $(ROOT_DIR).env.$(ENVIRONMENT)

# Ayuda sobre cada tarea disponible
.PHONY: help dev local qa staging prod up down build test

define PRINT_HELP_PYSCRIPT
import re, sys

for line in sys.stdin:
    match = re.match(r'^([a-zA-Z_-]+):.*?## (.*)$$', line)
    if match:
        target, help = match.groups()
        print("  \033[36m%-20s\033[0m %s" % (target, help))
endef
export PRINT_HELP_PYSCRIPT

# Tasks

## Run services in development environment
dev: ENVIRONMENT = dev
dev: up

## Run services in local environment
local: ENVIRONMENT = local
local: up

## Run services in QA environment
qa: ENVIRONMENT = qa
qa: up

## Run services in staging environment
staging: ENVIRONMENT = staging
staging: up

## Run services in production environment
prod: ENVIRONMENT = prod
prod: up

## Start services using Docker Compose
up:
	@echo "Iniciando servicios para el entorno $(ENVIRONMENT)..."
	docker-compose --env-file $(ENV_FILE) -f $(COMPOSE_BASE) -f $(COMPOSE_FILE) up -d

## Stop services
down:
	@echo "Deteniendo servicios..."
	docker-compose --env-file $(ENV_FILE) -f $(COMPOSE_BASE) -f $(COMPOSE_FILE) down

## Build Docker images
build:
	@echo "Construyendo imágenes para entorno $(ENVIRONMENT)..."
	docker-compose --env-file $(ENV_FILE) -f $(COMPOSE_BASE) -f $(COMPOSE_FILE) build

## Run tests
test:
	@echo "Running tests for environment $(ENVIRONMENT)"
	# Aquí podrías agregar comandos para ejecutar tus pruebas unitarias, por ejemplo:
	docker-compose --env-file $(ENV_FILE) -f $(COMPOSE_BASE) -f $(COMPOSE_FILE) run app npm test


help:
	@echo "Comandos disponibles:"
	@echo "  dev        - Iniciar servicios para el entorno de desarrollo (dev)"
	@echo "  local      - Iniciar servicios para el entorno local"
	@echo "  qa         - Iniciar servicios para el entorno de calidad (QA)"
	@echo "  staging    - Iniciar servicios para el entorno de staging"
	@echo "  prod       - Iniciar servicios para el entorno de producción"
	@echo "  up         - Iniciar servicios usando Docker Compose"
	@echo "  down       - Detener y eliminar los servicios actuales"
	@echo "  build      - Construir imágenes de Docker del entorno actual"
	@echo "  test       - Ejecutar pruebas para el entorno actual"
	@echo "  help       - Mostrar esta ayuda"
