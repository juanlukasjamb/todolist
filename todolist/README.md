# TO DO LIST - Gestor de Tareas

**Aplicación educativa para la gestión de tareas diarias**

## 📋 Información del Proyecto

- **Título**: Conversor SIMELA - Sistema Métrico Legal Argentino (Herramienta educativa)
- **Tipo**: Aplicación web sin frameworks
- **Autor**: Juan Lucas Damus Jambrina
- **Materia**: Taller de Programación 1
- **Institución**: Instituto Superior Santa María - 4to año Robótica
- **Año**: 2025

## ✨ Características Principales

### Tecnología
- **HTML5** semántico
- **CSS3** moderno (Flexbox/Grid)
- **JavaScript ES6+** con programación orientada a objetos
- **Responsive Design** (mobile-first: 320px+)
- **Sin dependencias externas**

### Funcionalidades
- ✅ Agregar nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas individuales
- ✅ Filtrado por estado (todas, pendientes, completadas)
- ✅ Limpiar todas las tareas completadas
- ✅ Estadísticas en tiempo real
- ✅ Persistencia de datos con localStorage
- ✅ Validación de entrada
- ✅ Interfaz accesible (WCAG)

## 📱 Diseño Responsivo

- **Móvil** (320px - 480px): Interfaz optimizada para pantallas pequeñas
- **Tablet** (481px - 768px): Diseño adaptado para dispositivos medianos
- **Desktop** (769px+): Experiencia completa en pantallas grandes

## 🏗️ Estructura del Proyecto

```
todolist/
├── index.html              # Archivo HTML principal
├── css/
│   └── styles.css         # Estilos CSS con variables y media queries
├── js/
│   └── app.js             # Lógica JavaScript con clase TodoApp
├── assets/
│   └── logo-placeholder.svg # Logo de la institución
└── README.md              # Este archivo
```

## 📖 Cómo Usar

### 1. Abrir la Aplicación
Abre el archivo `index.html` en tu navegador web preferido.

### 2. Agregar Tareas
1. Escribe una tarea en el campo de entrada
2. Haz clic en el botón "Agregar" o presiona Enter
3. La tarea aparecerá en la lista

### 3. Gestionar Tareas
- **Completar tarea**: Marca el checkbox junto a la tarea
- **Eliminar tarea**: Haz clic en el botón "Eliminar"
- **Filtrar**: Usa los botones de filtro (Todas, Pendientes, Completadas)
- **Limpiar completadas**: Haz clic en "Limpiar completadas"

### 4. Datos Persistentes
Tus tareas se guardan automáticamente en el localStorage del navegador.

## 🎨 Cabecera Institucional

La cabecera incluye:
- Logo de Instituto Superior Santa María
- Título: "Conversor SIMELA - Sistema Métrico Legal Argentino"
- Subtítulo: "Herramienta educativa para conversiones métricas"
- Información del autor y curso
- Datos de la institución

## 🔧 Validaciones

- Campo de entrada no permite envíos vacíos
- Máximo de 200 caracteres por tarea
- Prevención de XSS mediante escape de HTML
- Confirmación antes de limpiar completadas

## 📊 Estadísticas

La aplicación muestra en tiempo real:
- Total de tareas
- Tareas pendientes
- Tareas completadas

## 🌐 Compatibilidad

Funciona en todos los navegadores modernos:
- Chrome/Edge (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Navegadores móviles

## ♿ Accesibilidad

- Semántica HTML5 correcta
- Atributos ARIA implementados
- Navegación con teclado
- Colores con suficiente contraste
- Soporte para modo oscuro
- Respeta preferencia de movimiento reducido

## 💾 Almacenamiento Local

Los datos se almacenan en `localStorage` bajo la clave `todos`:
```javascript
[
  {
    id: timestamp,
    text: "Descripción de la tarea",
    completed: false,
    createdAt: "fecha y hora"
  }
]
```

## 📝 Notas de Desarrollo

### Variables CSS
El proyecto utiliza variables CSS personalizadas para:
- Colores (primarios, secundarios, estados)
- Espaciado (escala de 8px)
- Tipografía (tamaños y pesos)
- Sombras y bordes
- Transiciones

### Clase TodoApp
La lógica está encapsulada en la clase `TodoApp` con métodos para:
- Gestión de tareas (CRUD)
- Filtrado y búsqueda
- Renderizado de interfaz
- Persistencia de datos
- Validación de entrada

### Media Queries
Tres puntos de quiebre optimizados para experiencia responsiva:
1. Mobile: 320px - 480px
2. Tablet: 481px - 768px
3. Desktop: 769px+

## 🚀 Mejoras Futuras

- Edición de tareas existentes
- Búsqueda y etiquetas
- Prioridades en tareas
- Fechas de vencimiento
- Exportar/importar tareas
- Modo oscuro manual
- Sincronización con servidor

## 📄 Licencia

Proyecto educativo para fines académicos.

## 👨‍💻 Autor

Juan Lucas Damus Jambrina  
Instituto Superior Santa María - 4to año Robótica  
Taller de Programación 1

---

**Última actualización**: Diciembre 2025
