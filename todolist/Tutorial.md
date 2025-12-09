# 📚 Tutorial: Cómo Crear un Proyecto Web como SIMELA

## Introducción para Principiantes

¿Alguna vez te preguntaste cómo se hacen las páginas web? En este tutorial, te lo explicaré de forma simple y directa. Usaremos el proyecto SIMELA como ejemplo.

> **Sin miedo:** No necesitas saber nada de programación. Solo necesitas entender algunas ideas básicas.

---

## 🎯 Parte 1: Los Tres Ingredientes de una Página Web

Toda página web está hecha de **3 cosas fundamentales**:

### 1️⃣ **HTML** - La Estructura (esqueleto)

**¿Qué es?** Es el contenido de la página.

- Textos
- Títulos
- Botones
- Formularios
- Tablas

**Analogía:** Es como los planos de una casa. Define dónde va cada cosa.

```html
<h1>Mi Primer Conversor</h1>
<button>Convertir</button>
```

### 2️⃣ **CSS** - La Presentación (ropa y maquillaje)

**¿Qué es?** Es cómo se ve la página.

- Colores
- Tamaños
- Espacios
- Fuentes
- Posiciones

**Analogía:** Si HTML es la estructura, CSS es la decoración. Hace que se vea bonito.

```css
h1 {
  color: blue;
  size: 24px;
}
```

### 3️⃣ **JavaScript** - La Interactividad (el cerebro)

**¿Qué es?** Es la lógica que hace que funcione.

- Cálculos
- Responde a clicks
- Guarda información
- Genera resultados

**Analogía:** Es el cerebro que piensa y actúa.

```javascript
if (usuario hace click en botón) {
    hacer conversión
}
```

---

## 📁 Parte 2: Estructura de Carpetas

Imagina que tu proyecto es una casa. Necesitas organizar las habitaciones:

```
simela/
├── index.html          ← El "centro" de tu casa (la sala)
├── css/
│   └── styles.css      ← "Salón de belleza" (decoración)
├── js/
│   ├── app.js          ← "Cerebro" principal
│   ├── logic.js        ← Lógica de cálculos
│   └── storage.js      ← Memoria (guarda datos)
└── assets/
    └── logo.svg        ← Fotos/Imágenes
```

**¿Por qué así?** Para mantener todo organizado y fácil de encontrar.

---

## 🔨 Parte 3: El Proceso Paso a Paso

### PASO 1: Crear la Estructura (HTML)

Primero, escribimos el "esqueleto" de la página:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Conversor</title>
  </head>
  <body>
    <h1>Bienvenido</h1>
    <input type="number" placeholder="Ingresa un número" />
    <button>Convertir</button>
    <p id="resultado"></p>
  </body>
</html>
```

**¿Qué significa cada cosa?**

- `<h1>`: Título grande
- `<input>`: Campo para escribir
- `<button>`: Botón que se puede presionar
- `<p id="resultado">`: Párrafo donde mostraremos el resultado

**Importante:** Los `id` (como `resultado`) son como etiquetas que permiten encontrar elementos después.

---

### PASO 2: Hacer que se Vea Bonito (CSS)

Ahora decoramos. Creamos un archivo `styles.css`:

```css
body {
  background-color: #f0f0f0;
  font-family: Arial;
  padding: 20px;
}

h1 {
  color: #1e3a8a;
  text-align: center;
}

input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 200px;
}

button {
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1e3a8a;
}

#resultado {
  margin-top: 20px;
  font-size: 18px;
  color: green;
}
```

**¿Qué significa?**

- `background-color`: Color de fondo
- `padding`: Espacio interno
- `border`: Borde
- `cursor: pointer`: Cambiar cursor cuando pases el mouse

Y vinculamos el CSS en el HTML:

```html
<link rel="stylesheet" href="css/styles.css" />
```

---

### PASO 3: Hacer que Funcione (JavaScript)

Ahora le damos "inteligencia". Creamos `js/app.js`:

```javascript
// Obtener referencias a elementos HTML
const inputValue = document.getElementById("inputValue");
const convertBtn = document.getElementById("convertBtn");
const resultadoDiv = document.getElementById("resultado");

// Función para convertir km a metros
function convertirKmAMetros(km) {
  return km * 1000;
}

// Escuchar cuando el usuario hace click
convertBtn.addEventListener("click", function () {
  // Obtener el valor que escribió
  const valor = inputValue.value;

  // Validar que sea un número
  if (valor === "" || isNaN(valor)) {
    resultadoDiv.textContent = "Por favor ingresa un número válido";
    return;
  }

  // Convertir
  const resultado = convertirKmAMetros(valor);

  // Mostrar resultado
  resultadoDiv.textContent = valor + " km = " + resultado + " m";
});
```

**¿Qué significa?**

- `document.getElementById()`: "Busca en la página un elemento con este id"
- `addEventListener('click')`: "Escucha si alguien hace click aquí"
- `function()`: Un bloque de código que hace una tarea
- `return`: Devuelve un resultado

Y vinculamos en HTML:

```html
<script src="js/app.js"></script>
```

---

## 📊 Parte 4: Concepto de Variables y Datos

### ¿Qué es una Variable?

Una variable es como una "caja" donde guardamos información.

```javascript
// Nombre de la caja = Contenido
let nombre = "Juan";
let edad = 25;
let altura = 1.75;
```

### Tipos de Datos Básicos

```javascript
// Números
let numero = 5;

// Textos
let texto = "Hola";

// Verdadero o Falso
let esDia = true;

// Listas
let numeros = [1, 2, 3, 4, 5];

// Objetos (colecciones de información)
let persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Buenos Aires",
};
```

### Operaciones Básicas

```javascript
// Matemática
let suma = 5 + 3; // 8
let resta = 10 - 4; // 6
let multiplicacion = 4 * 3; // 12
let division = 20 / 5; // 4

// Texto
let saludo = "Hola " + "Juan"; // "Hola Juan"

// Comparación
let esIgual = 5 === 5; // true
let esMayor = 10 > 5; // true
```

---

## 🧠 Parte 5: Lógica Básica

### Condicionales (If/Else)

Es como tomar decisiones:

```javascript
let edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

**Traducción:** "Si edad es mayor o igual a 18, imprime A, sino imprime B"

### Bucles (For)

Repetir algo muchas veces:

```javascript
// Repetir 5 veces
for (let i = 1; i <= 5; i++) {
  console.log("Número: " + i);
}

// Resultado:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5
```

### Funciones

Agrupar código que hace una tarea específica:

```javascript
// Definir una función
function saludar(nombre) {
  return "Hola, " + nombre;
}

// Usar la función
let mensaje = saludar("Juan");
console.log(mensaje); // "Hola, Juan"
```

---

## 💾 Parte 6: Guardar Datos (LocalStorage)

¿Cómo guardamos información en el navegador?

### Guardar

```javascript
// Guardar un dato
localStorage.setItem("miNombre", "Juan");

// Guardar un número
localStorage.setItem("miEdad", "25");
```

### Recuperar

```javascript
// Recuperar un dato
let nombre = localStorage.getItem("miNombre");
console.log(nombre); // "Juan"
```

### Borrar

```javascript
// Borrar un dato específico
localStorage.removeItem("miNombre");

// Borrar todo
localStorage.clear();
```

**Caso Real en SIMELA:**

```javascript
// Guardar una conversión en el historial
function guardarEnHistorial(texto) {
  let historial = localStorage.getItem("historial") || "[]";
  let array = JSON.parse(historial);
  array.push(texto);
  localStorage.setItem("historial", JSON.stringify(array));
}
```

---

## 🎬 Parte 7: Flujo de Ejecución

¿En qué orden sucede todo?

### Ejemplo: Usar SIMELA

```
1. Usuario abre index.html
   ↓
2. Se cargan los archivos CSS (se ve bonito)
   ↓
3. Se cargan los archivos JavaScript
   ↓
4. JavaScript busca los elementos HTML (inputs, botones)
   ↓
5. JavaScript espera a que el usuario haga algo
   ↓
6. Usuario escribe un número y presiona Convertir
   ↓
7. JavaScript ejecuta la función
   ↓
8. Calcula el resultado
   ↓
9. Muestra el resultado en la página
   ↓
10. Guarda en localStorage
```

---

## 🛠️ Parte 8: Validación de Datos

Es importante asegurarse que el usuario escriba lo correcto:

```javascript
// Validación básica
function validarNumero(valor) {
  // ¿Es un número?
  if (isNaN(valor)) {
    return "Error: No es un número";
  }

  // ¿Es mayor a 0?
  if (valor < 0) {
    return "Error: Debe ser positivo";
  }

  // ¿No está vacío?
  if (valor === "") {
    return "Error: Completa el campo";
  }

  return "Válido";
}
```

---

## 🎨 Parte 9: Buenas Prácticas

### 1. Nombres Claros

```javascript
// ❌ Malo
let x = 5;
let y = document.getElementById("z");

// ✅ Bueno
let cantidadConversiones = 5;
let inputValor = document.getElementById("inputValor");
```

### 2. Comentarios

```javascript
// Explicar qué hace el código
function calcularConversion(valor, factor) {
  // Multiplicamos el valor por el factor de conversión
  return valor * factor;
}
```

### 3. Evitar Repetición

```javascript
// ❌ Repetición
convertBtn.addEventListener("click", function () {
  console.log("Cálculo realizado");
});

// ✅ Función reutilizable
function manejarConversion() {
  console.log("Cálculo realizado");
}

convertBtn.addEventListener("click", manejarConversion);
```

### 4. Organización

```javascript
// Agrupar funciones por tema

// VALIDACIÓN
function validarEntrada(valor) { ... }

// CONVERSIÓN
function convertir(valor, unidad) { ... }

// ALMACENAMIENTO
function guardarEnHistorial(conversion) { ... }

// INTERFAZ
function mostrarResultado(valor) { ... }
```

---

## 📝 Parte 10: Creando tu Propio Proyecto

### Plan de Trabajo

**SEMANA 1: Estructura**

- [ ] Crear carpetas (css/, js/, assets/)
- [ ] Escribir HTML básico
- [ ] Crear archivo styles.css vacío
- [ ] Crear archivo app.js vacío

**SEMANA 2: Diseño**

- [ ] Agregar colores y fuentes
- [ ] Hacer responsive (móvil/desktop)
- [ ] Probar en navegador

**SEMANA 3: Funcionalidad**

- [ ] Agregar event listeners
- [ ] Escribir funciones de cálculo
- [ ] Probar cada función

**SEMANA 4: Refinamiento**

- [ ] Agregar validación
- [ ] Implementar localStorage
- [ ] Pulir interfaz

### Checklist para tu Proyecto

```
ANTES DE EMPEZAR:
[ ] Tengo un editor de texto (VS Code)
[ ] Tengo una carpeta para el proyecto
[ ] Entiendo HTML, CSS y JavaScript básico

DURANTE EL DESARROLLO:
[ ] Mi código está organizado
[ ] Usé nombres claros para variables
[ ] Agregué comentarios
[ ] Probé todo en el navegador

ANTES DE ENTREGAR:
[ ] No hay errores en la consola (F12)
[ ] Funciona en móvil
[ ] Funciona en desktop
[ ] La documentación está completa
```

---

## 🐛 Parte 11: Debugging (Encontrar Errores)

### Abrir la Consola

Presiona **F12** en tu navegador:

```
Chrome/Firefox/Edge: F12 → Pestaña "Console"
```

### Ver Mensajes

```javascript
// Imprime un mensaje
console.log("Hola, mundo");

// Imprime un valor
console.log(miVariable);

// Muestra una advertencia
console.warn("Cuidado");

// Muestra un error
console.error("Algo salió mal");
```

### Encontrar Problemas

```javascript
// PROBLEMA: ¿Por qué no funciona?
function convertir(valor) {
  console.log("Función llamada con:", valor); // Ver qué recibe
  let resultado = valor * 1000;
  console.log("Resultado:", resultado); // Ver qué calcula
  return resultado;
}
```

---

## 🌐 Parte 12: Diferencia entre Frontend y Backend

### Frontend (Lo que ves)

- HTML, CSS, JavaScript
- Se ejecuta en tu navegador
- El usuario ve los cambios
- **Ejemplo SIMELA:** La interfaz, los botones, los colores

### Backend (Lo que no ves)

- Servidores, bases de datos
- Se ejecuta en computadoras remotas
- El usuario no ve el código
- **Ejemplo:** Si SIMELA tuviera usuarios registrados, el Backend guardaría sus datos

**Para este proyecto:** Solo necesitamos **Frontend** ✅

---

## 📚 Parte 13: Recursos para Aprender Más

### Sitios Web

- **MDN (Mozilla):** https://developer.mozilla.org/es/
- **W3Schools:** https://www.w3schools.com/
- **Codecademy:** https://www.codecademy.com/

### Canales de YouTube

- Traversy Media
- FreeCodeCamp
- Fazt Code

### Libros

- "JavaScript para Niños"
- "Aprende a Programar con JavaScript"

---

## ✅ Resumen: Los Pasos Básicos

Para crear un proyecto web como SIMELA:

1. **Planifica** - ¿Qué quiero hacer?
2. **Estructura** - Escribe HTML
3. **Decora** - Escribe CSS
4. **Anima** - Escribe JavaScript
5. **Valida** - Asegúrate que funcione
6. **Documenta** - Explica tu código
7. **Entrega** - Comparte tu proyecto

---

## 🎓 Conclusión

Felicidades si llegaste hasta aquí. Ahora entiendes:

✓ Qué es HTML, CSS y JavaScript  
✓ Cómo se organizan los archivos  
✓ Qué es una variable y una función  
✓ Cómo guardar datos  
✓ Cómo encontrar errores

**Próximo paso:** Abre VS Code y crea tu primer proyecto.

**Recuerda:** Todo programador comenzó como principiante. La práctica hace al maestro.

---

## 💡 Ejemplo Completo Mínimo

**index.html:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi Conversor Simple</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Conversor de Metros</h1>
    <input id="metros" type="number" placeholder="Ingresa metros" />
    <button id="btn">Convertir a CM</button>
    <p id="resultado"></p>

    <script src="app.js"></script>
  </body>
</html>
```

**style.css:**

```css
body {
  font-family: Arial;
  padding: 20px;
  background-color: #f0f0f0;
}

input {
  padding: 10px;
  border: 2px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
}

#resultado {
  margin-top: 20px;
  font-size: 18px;
}
```

**app.js:**

```javascript
const metrosInput = document.getElementById("metros");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", function () {
  const metros = metrosInput.value;

  if (metros === "" || isNaN(metros)) {
    resultado.textContent = "Ingresa un número válido";
    return;
  }

  const centimetros = metros * 100;
  resultado.textContent = metros + " m = " + centimetros + " cm";
});
```

**¡Eso es todo lo que necesitas para empezar!**

---

**Creado para:** Estudiantes sin experiencia en programación  
**Nivel:** Principiante  
**Tiempo de lectura:** 20 minutos  
**Última actualización:** Diciembre 2025
