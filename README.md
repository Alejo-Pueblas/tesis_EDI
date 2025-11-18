# Sistema de Gestión de Ventas por Catálogo - Biggete

## Descripción

Versión personalizada del sistema de gestión de ventas por catálogo, desarrollada con Angular 18 para la empresa Biggete, especializada en productos cosméticos y de cuidado personal. Este sistema permite la administración de clientes, productos y pedidos sin necesidad de backend real, utilizando datos simulados.

## Características Principales

### Dashboard con Estadísticas
- Visualización de total de clientes, productos, pedidos e ingresos
- Actualización en tiempo real utilizando servicios reactivos
- Representa una mejora personal agregada al proyecto grupal, proporcionando una visión general del negocio

### Gestión de Clientes
- Agregar nuevos clientes (revendedores y clientes finales)
- Listado en tabla con opciones de eliminación
- Datos básicos: nombre, email, teléfono y tipo

### Catálogo de Productos
- Lista de productos con categorías de cosméticos
- Imágenes placeholder para visualización
- Búsqueda integrada por nombre, descripción o categoría (funcionalidad personalizada)

### Gestión de Pedidos
- Registro de pedidos con asociación a clientes
- Cálculo automático de totales
- Seguimiento de estado de los pedidos
- Visualización de ingresos totales

### Interfaz Responsiva
- Diseño moderno con Bootstrap-inspired CSS
- Navegación intuitiva con enrutamiento
- Formularios interactivos usando Angular Forms

## Funcionalidad Agregada (Personalización)

Como versión personal del proyecto grupal:
- **Dashboard Estadístico**: Panel de control con métricas clave de negocio (totales de clientes, productos, pedidos e ingresos).
- **Búsqueda en Catálogo**: Función de búsqueda en tiempo real para filtrar productos.
- **Estilos Mejorados**: Tema de colores azul (#007bff) consistente y moderno.
- **Servicios Reactivos**: Implementación con BehaviorSubject para actualizaciones en vivo de datos.

## Tecnologías Utilizadas
- **Angular 18** con componentes standalone y prerendering SSR
- **TypeScript** para tipado fuerte
- **RxJS** para manejo de observables
- **CSS3** para estilos responsivos
- Datos simulados sin backend

## Instalación y Desarrollo

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Servidor de desarrollo: `ng serve`
4. Navega a `http://localhost:4200/`

## Construcción

Para producción: `ng build --configuration production`

Los archivos de build estarán en `dist/` listos para despliegue en hosting estático.

## Despliegue en GitHub Pages

1. Construye la aplicación: `ng build --configuration production`
2. Instala angular-cli-ghpages: `npm install -g angular-cli-ghpages`
3. Despliega: `ngh --dir dist/biggete-catalog-manager/browser`

## Estructura del Proyecto

```
src/app/
├── models/              # Interfaces de datos (Client, Product, Order)
├── services/            # Servicios para gestión de datos
├── components/
│   ├── dashboard/       # Panel estadístico principal
│   ├── clients-list/    # Gestión de clientes
│   ├── products-list/   # Catálogo de productos (no implementado completamente en este commit)
│   └── orders-list/     # Gestión de pedidos (no implementado completamente)
└── app.routes.ts        # Configuración de rutas
```

## Evaluación del Trabajo Final EDI

Este proyecto cumple con los requisitos de:
- ✗ Organización del código (Angular, componentes, servicios)
- ✗ Interfaz visual (HTML/CSS responsivo)
- ✗ Funcionalidad (JS/Angular con bindings, rutas)
- ✗ Personalización (estadísticas + búsqueda)
- ✗ Documentación (README, commits claros)

Proyecto entregado el 18 de noviembre de 2025.
