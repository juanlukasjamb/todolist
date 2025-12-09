# 📚 Tutorial: Cómo Crear una Aplicación TO DO LIST

**Para estudiantes sin experiencia en programación**

---

## 📖 Índice
1. [Conceptos Básicos](#conceptos-básicos)
2. [Estructura de Carpetas](#estructura-de-carpetas)
3. [Paso a Paso: Crear el Proyecto](#paso-a-paso)
4. [Entender cada Archivo](#entender-cada-archivo)
5. [Explicación del Código](#explicación-del-código)

---

## 📝 Conceptos Básicos

Antes de empezar, necesitas entender tres lenguajes de programación web:

### 🏗️ HTML (HyperText Markup Language)
- **¿Qué es?** El "esqueleto" de la página web
- **¿Qué hace?** Define la estructura: títulos, botones, campos de texto, listas, etc.
- **Ejemplo:** `<button>Haz clic aquí</button>`

### 🎨 CSS (Cascading Style Sheets)
- **¿Qué es?** Las "ropas" de la página web
- **¿Qué hace?** Define los colores, tamaños, formas y disposición de los elementos
- **Ejemplo:** El botón es rojo, grande y tiene esquinas redondeadas

### ⚙️ JavaScript
- **¿Qué es?** El "cerebro" de la página web
- **¿Qué hace?** Hace que la página sea interactiva: responde a clics, guarda datos, etc.
- **Ejemplo:** Cuando haces clic en "Agregar", la tarea se añade a la lista

---

## 📁 Estructura de Carpetas

Una aplicación web bien organizada se ve así:

```
todolist/                    ← Carpeta principal del proyecto
│
├── index.html              ← El archivo HTML principal
├── README.md               ← Documentación
├── TUTORIAL.md             ← Este archivo
│
├── css/                    ← Carpeta para estilos CSS
│   └── styles.css          ← Los estilos de la página
│
├── js/                     ← Carpeta para código JavaScript
│   └── app.js              ← La lógica de la aplicación
│
└── assets/                 ← Carpeta para imágenes y logos
    └── logo.svg            ← El logo de la escuela
```

**¿Por qué organizar así?**
- Es más fácil encontrar archivos
- Otro programador entiende rápidamente la estructura
- Es una buena práctica profesional

---

## 🚀 Paso a Paso: Crear el Proyecto

### Paso 1: Crear la Carpeta del Proyecto

1. Abre el Explorador de Archivos (Windows)
2. Ve a: `C:\Users\tu_usuario\Desktop` (o donde prefieras)
3. Haz clic derecho → "Nueva carpeta"
4. Llámala: `todolist`
5. Abre la carpeta y crea estas subcarpetas:
   - `css`
   - `js`
   - `assets`

### Paso 2: Crear los Archivos

1. Abre VS Code
2. Arrastra la carpeta `todolist` a VS Code
3. Crea estos archivos:
   - `index.html` (en la raíz)
   - `css/styles.css`
   - `js/app.js`
   - `README.md`

### Paso 3: Completar cada Archivo

Sigue los ejemplos en las secciones que vienen a continuación...

---

## 🔍 Entender cada Archivo

### 📄 1. index.html - La Estructura

El HTML define QUÉ aparece en la página.

#### Estructura Básica

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Aplicación TO DO LIST</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Aquí va el contenido visible -->
    
    <script src="js/app.js"></script>
</body>
</html>
```

#### Explicación de Etiquetas

| Etiqueta | ¿Qué significa? | Ejemplo |
|----------|---|---|
| `<h1>` | Título grande | `<h1>Mi Aplicación</h1>` |
| `<input>` | Campo de texto | `<input type="text">` |
| `<button>` | Botón clickeable | `<button>Agregar</button>` |
| `<ul>` `<li>` | Lista de elementos | `<ul><li>Tarea 1</li></ul>` |
| `<div>` | Contenedor (caja) | `<div>Contenido</div>` |

#### Ejemplo Completo Mínimo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <title>TO DO LIST</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Mi Lista de Tareas</h1>
    
    <!-- Formulario para agregar tareas -->
    <input type="text" id="todoInput" placeholder="Escribe una tarea...">
    <button id="addBtn">Agregar</button>
    
    <!-- Lista de tareas -->
    <ul id="todoList">
        <!-- Las tareas se agregan aquí -->
    </ul>
    
    <script src="js/app.js"></script>
</body>
</html>
```

---

### 🎨 2. styles.css - La Apariencia

El CSS define CÓMO se ve la página (colores, tamaños, posiciones).

#### Conceptos Básicos CSS

```css
/* Los selectores apuntan a elementos HTML */

/* Por ID (con #) - para elementos únicos */
#miBoton {
    background-color: blue;      /* Fondo azul */
    color: white;                /* Texto blanco */
    padding: 10px;               /* Espacio interior */
    border-radius: 5px;          /* Esquinas redondeadas */
}

/* Por clase (con .) - para múltiples elementos */
.item {
    margin: 10px;                /* Espacio exterior */
    border: 1px solid gray;      /* Borde gris */
}

/* Por etiqueta - todos los de ese tipo */
h1 {
    font-size: 32px;             /* Tamaño del texto */
    color: #2563eb;              /* Color azul */
}
```

#### Ejemplo Completo Mínimo

```css
/* Variables de color (reutilizables) */
:root {
    --color-primary: #2563eb;
    --color-white: #ffffff;
}

/* Estilos básicos */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
}

h1 {
    color: var(--color-primary);
}

#todoInput {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
}

#addBtn {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#addBtn:hover {
    background-color: #1e40af;  /* Azul más oscuro al pasar ratón */
}

#todoList {
    list-style: none;   /* Quita los puntos de la lista */
    padding: 0;
}

.todo-item {
    background: white;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
```

---

### ⚙️ 3. app.js - La Lógica e Interactividad

El JavaScript hace que la página responda a acciones (clics, escritura, etc.).

#### Conceptos Básicos JavaScript

```javascript
// 1. VARIABLES: Contenedores para guardar información
let nombre = "Juan";
let edad = 15;
let tareas = [];  // Array (lista) vacía

// 2. FUNCIONES: Bloques de código reutilizables
function saludar() {
    console.log("¡Hola, " + nombre + "!");
}
saludar();  // Ejecutar la función

// 3. OBJETOS: Agrupar datos relacionados
let persona = {
    nombre: "Juan",
    edad: 15,
    ciudad: "Buenos Aires"
};

// 4. CLASES: Plantillas para crear objetos similares
class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.completada = false;
    }
}

// 5. EVENTOS: Responder a acciones del usuario
document.getElementById("miBoton").addEventListener("click", function() {
    console.log("¡Hiciste clic!");
});
```

#### Ejemplo Completo Mínimo

```javascript
class TodoApp {
    constructor() {
        this.tareas = [];
        this.inicializar();
    }
    
    // Buscar elementos HTML
    inicializar() {
        this.input = document.getElementById("todoInput");
        this.boton = document.getElementById("addBtn");
        this.lista = document.getElementById("todoList");
        
        // Agregar evento al botón
        this.boton.addEventListener("click", () => this.agregarTarea());
    }
    
    // Agregar una nueva tarea
    agregarTarea() {
        const texto = this.input.value;  // Obtener lo que escribió el usuario
        
        if (texto === "") {
            alert("¡Por favor escribe una tarea!");
            return;
        }
        
        // Crear objeto tarea
        const tarea = {
            id: Date.now(),
            texto: texto,
            completada: false
        };
        
        this.tareas.push(tarea);  // Agregar a la lista
        this.mostrarTareas();      // Actualizar la pantalla
        this.input.value = "";     // Limpiar el campo
    }
    
    // Mostrar todas las tareas
    mostrarTareas() {
        this.lista.innerHTML = "";  // Limpiar la lista
        
        this.tareas.forEach(tarea => {
            const li = document.createElement("li");
            li.className = "todo-item";
            li.innerHTML = `
                <span>${tarea.texto}</span>
                <button onclick="app.eliminarTarea(${tarea.id})">
                    Eliminar
                </button>
            `;
            this.lista.appendChild(li);
        });
    }
    
    // Eliminar una tarea
    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.mostrarTareas();
    }
}

// Crear la aplicación cuando la página carga
window.addEventListener("DOMContentLoaded", () => {
    window.app = new TodoApp();
});
```

---

## 📚 Explicación del Código

### ¿Qué pasa cuando ejecutas la aplicación?

```
1. El navegador carga index.html
   ↓
2. Lee y aplica styles.css (los estilos)
   ↓
3. Ejecuta app.js (la lógica)
   ↓
4. El usuario ve la página lista para usar
   ↓
5. Cuando el usuario hace clic en "Agregar":
   - JavaScript detects el clic (evento)
   - Lee lo que escribió en el input
   - Crea un objeto con la tarea
   - Lo agrega a la lista
   - Actualiza la pantalla
```

### Analicemos línea por línea

```javascript
// Definir una clase (plantilla para objetos)
class TodoApp {
    // El constructor se ejecuta cuando creas un objeto
    constructor() {
        // this = este objeto en particular
        this.tareas = [];  // Crear una lista vacía para las tareas
        this.inicializar();  // Ejecutar el método inicializar
    }
    
    // Método: función dentro de una clase
    inicializar() {
        // Buscar elementos en el HTML usando sus IDs
        this.input = document.getElementById("todoInput");
        // Ahora podemos acceder al campo de texto con this.input
        
        // Agregar un "escuchador" de eventos
        this.boton.addEventListener("click", () => {
            // Cuando hacen clic en el botón, ejecutar la función agregarTarea
            this.agregarTarea();
        });
    }
    
    agregarTarea() {
        // Obtener el texto que el usuario escribió
        const texto = this.input.value;
        
        // Validar que no esté vacío
        if (texto === "") {
            alert("¡Por favor escribe una tarea!");
            return;  // Salir de la función
        }
        
        // Crear un objeto tarea
        const tarea = {
            id: Date.now(),      // ID único basado en la fecha/hora
            texto: texto,        // El texto que escribió
            completada: false    // Inicialmente no completada
        };
        
        // Agregar la tarea a la lista
        this.tareas.push(tarea);
        
        // Actualizar lo que ve el usuario
        this.mostrarTareas();
        
        // Limpiar el campo de texto
        this.input.value = "";
    }
}
```

---

## 💡 Consejos Prácticos

### Para Evitar Errores

1. **Verifica los IDs:** Si tu HTML tiene `id="todoInput"`, en JavaScript debe ser exactamente igual
2. **Abre la consola:** Presiona F12 → Console (muestra errores)
3. **Usa console.log():** Para ver qué está pasando
   ```javascript
   console.log(this.tareas);  // Ver qué tareas hay
   ```

### Para Mejorar tu Código

1. **Comenta tu código:** Explica qué hace cada sección
   ```javascript
   // Agregar un nuevo elemento a la lista
   this.tareas.push(tarea);
   ```

2. **Usa nombres descriptivos:**
   ```javascript
   // Malo ❌
   let x = 5;
   
   // Bueno ✅
   let cantidadDeTareas = 5;
   ```

3. **Mantén la estructura limpia:** Una carpeta = un propósito

---

## 🎯 Resumen de lo Aprendido

| Archivo | Responsabilidad | Lenguaje |
|---------|---|---|
| **index.html** | Define QUÉ aparece | HTML |
| **styles.css** | Define CÓMO se ve | CSS |
| **app.js** | Define CÓMO funciona | JavaScript |

---

## 🚀 Próximos Pasos

1. **Crea el proyecto** siguiendo la estructura
2. **Copia el código** de los ejemplos
3. **Prueba en Live Server** (abre index.html)
4. **Modifica los colores** en CSS
5. **Agrega más funciones** en JavaScript

---

## 📖 Recursos Adicionales

- [MDN Web Docs](https://developer.mozilla.org/es/) - Documentación oficial
- [W3Schools](https://www.w3schools.com/) - Tutoriales interactivos
- [Khan Academy](https://www.khanacademy.org/) - Cursos gratuitos

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo cambiar los colores?**
A: Sí, modifica los valores en CSS. Por ejemplo: `color: red;` o `color: #FF0000;`

**P: ¿Por qué aparece un error en la consola?**
A: Lee el error con cuidado. Generalmente es un typo (error de escritura) o un ID que no coincide.

**P: ¿Cómo guardo las tareas?**
A: Necesitas localStorage (avanzado). Por ahora, se borran al recargar la página.

**P: ¿Puedo agregar imágenes?**
A: Sí, con `<img src="ruta/imagen.jpg">` en HTML.

---

## ✍️ Autor

**Juan Lucas Damus Jambrina**
Instituto Superior Santa María - 4to año Robótica
Taller de Programación 1

---

**Última actualización:** Diciembre 2025

