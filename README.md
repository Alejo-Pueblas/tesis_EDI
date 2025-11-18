# Catálogo Biggete - Sistema de Gestión de Productos Cosméticos

Un sistema web completo para gestión de productos cosméticos y de belleza, desarrollado con Angular 18. Incluye tanto un **catálogo público** accesible para revendedores y clientes finales, como un **panel administrativo** para gestionar inventario, clientes y pedidos.

## 📋 Problemática Resuelta

La empresa Biggete, dedicada a la venta de productos cosméticos y de cuidado personal por catálogo, gestionaba manualmente sus procesos de manera ineficiente. Esta aplicación digital automatiza completamente:

- ✅ **Catálogo público** visible para clientes/revendedores
- ✅ **Búsqueda y filtrado** avanzado de productos
- ✅ **Gestión administrativa** completa del inventario
- ✅ **Interfaz intuitiva** y moderna
- ✅ **Subida de imágenes** para productos

## 🚀 Características Principales

### 🛍️ **Catálogo Público**
- Vista de productos en tarjetas modernas y atractivas
- Búsqueda en tiempo real por nombre, descripción o categoría
- Filtros por categoría y rango de precios
- Indicación de stock y disponibilidad
- Diseño responsive para móviles y tablets

### ⚡ **Panel Administrativo**
- Gestión completa de productos con formularios validados
- Administración de clientes
- Control de pedidos y órdenes
- Dashboard con estadísticas en tiempo real
- Subida y gestión de imágenes de productos

### 🎨 **Personalizaciones Implementadas**
- **Catálogo público** con vista hermosa (no solo administración)
- **Función de búsqueda avanzada** con múltiples filtros
- **Subida de imágenes** para productos
- **Diseño modernizado** con gradientes violetas elegantes
- **Animaciones y transiciones** suaves
- **Separación clara** entre vista pública y administración
- **Layout mejorado** con productos en cuadrícula organizada
- **Tema visual consistente** sin emojis para mayor elegancia

## 🛠️ Tecnologías Utilizadas

- **Framework:** Angular 18
- **Lenguaje:** TypeScript
- **Estilos:** CSS3 con diseño responsive
- **Gestión de Estado:** RxJS/BehaviorSubject
- **Componentes:** Standalone Components
- **Ruteo:** Angular Router con Lazy Loading

## 📦 Instalación y Uso

```bash
# Clona el repositorio
git clone [URL_DEL_REPOSITORIO]
cd biggete-catalog-manager

# Instala dependencias
npm install

# Ejecuta el servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── catalog/              # Catálogo público (*Nueva funcionalidad*)
│   │   │   ├── catalog.component.html
│   │   │   ├── catalog.component.ts
│   │   │   └── catalog.component.css
│   │   ├── products-list/        # Gestión administrativa de productos
│   │   ├── clients-list/         # Gestión de clientes
│   │   ├── orders-list/          # Gestión de pedidos
│   │   └── dashboard/            # Dashboard administrativo
│   ├── models/                   # Interfaces TypeScript
│   ├── services/                 # Servicios de datos
│   ├── app.routes.ts            # Configuración de rutas
│   ├── app.component.*          # Componente raíz
│   └── app.config.ts           # Configuración de la app
```

## 🎯 Funcionalidades Clave

### Catálogo Público
- **Búsqueda Inteligente:** Busca por nombre, descripción o categoría
- **Filtros Avanzados:** Por categoría y rangos de precio
- **Vista de Productos:** Tarjetas modernas con hover effects
- **Indicadores Visuales:** Stock disponible, precios y categorías
- **Botones de Acción:** Para solicitar productos (simulado)

### Gestión Administrativa
- **CRUD Completo:** Crear, Leer, Actualizar, Eliminar productos
- **Subida de Imágenes:** Soporte para archivos de imagen y URLs
- **Validación de Formularios:** Campos requeridos y formato válido
- **Mapas de Datos:** Clientes, productos y pedidos interconectados

## 🔍 Cambios Personales Implementados

Respecto al proyecto grupal base, personalicé con:

1. **🆕 Vista de Catálogo Público** - Catálogo visible para clientes en cuadrícula organizada
2. **🆕 Función de Búsqueda Avanzada** - Búsqueda en tiempo real con múltiples filtros
3. **🆕 Subida de Imágenes** - Sistema completo de imágenes para productos
4. **🎨 Rediseño Visual Completo** - Transición a tema violeta elegante sin emojis
5. **📱 Layout Mejorado** - Productos organizados en cuadrícula de 3 columnas
6. **⚡ Animaciones y Efectos** - Hover effects, transiciones suaves
7. **🔄 Personalización Visual** - Remoción completa de emojis para estética profesional
8. **📊 Contenido Expandido** - Adición de 5+ productos más para catálogo completo

## 📊 Dashboard Estadístico

El dashboard incluye métricas en tiempo real de:
- Total de productos
- Total de clientes
- Total de pedidos
- Revenue total

## 🌐 Publicación Web

Este proyecto está preparado para publicación en plataformas de hosting estático como:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

Para publicar:
```bash
# Build optimizado para producción
npm run build

# Los archivos se generan en dist/biggete-catalog-manager
```

## 👨‍💻 Autor

**Trabajo Final Individual - EDI 2024**

- **Institución:** [Nombre de la institución]
- **Materia:** EDI (Enfoque en Desarrollo Web)
- **Tecnologías:** HTML, CSS, TypeScript, Angular
- **Fecha:** Diciembre 2024

## ✨ Características personales destacadas
- Tema de color violeta profesional
- Interfaz sin emojis para mayor seriedad
- Layout responsivo en cuadrícula
- Catálogo expandido con 10 productos
+ Footer sticky que se adapta al contenido
- Animaciones suaves
+ Navegación personalizada

---

**Biggete** - Transformando el cuidado personal con tecnología moderna
