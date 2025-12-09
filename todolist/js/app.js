/**
 * TO DO LIST - Aplicación de gestión de tareas
 * Autor: Juan Lucas Damus Jambrina
 * Materia: Taller de Programación 1
 * Escuela: Instituto Superior Santa María - 4to año Robótica
 * 
 * Funcionalidades:
 * - Agregar, editar y eliminar tareas
 * - Marcar tareas como completadas
 * - Filtrado de tareas (todas, pendientes, completadas)
 * - Persistencia de datos en localStorage
 * - Estadísticas en tiempo real
 */

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.init();
    }

    /**
     * Inicializa la aplicación
     */
    init() {
        this.loadTodos();
        this.setupEventListeners();
        this.render();
    }

    /**
     * Configura los event listeners
     */
    setupEventListeners() {
        // Formulario
        const form = document.getElementById('todoForm');
        form.addEventListener('submit', (e) => this.handleAddTodo(e));

        // Botones de filtro
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleFilterChange(btn));
        });

        // Botón limpiar completadas
        const clearBtn = document.getElementById('clearCompletedBtn');
        clearBtn.addEventListener('click', () => this.clearCompleted());

        // Delegación de eventos para lista de tareas
        const todoList = document.getElementById('todoList');
        todoList.addEventListener('change', (e) => {
            if (e.target.classList.contains('todo-checkbox')) {
                this.handleToggleTodo(e.target);
            }
        });

        todoList.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-delete')) {
                this.handleDeleteTodo(e.target);
            }
        });
    }

    /**
     * Maneja la adición de una nueva tarea
     * @param {Event} e - Evento del formulario
     */
    handleAddTodo(e) {
        e.preventDefault();
        const input = document.getElementById('todoInput');
        const text = input.value.trim();
        const feedback = document.getElementById('inputFeedback');

        if (!text) {
            this.showFeedback(feedback, 'Por favor, ingresa una tarea');
            return;
        }

        if (text.length > 200) {
            this.showFeedback(feedback, 'La tarea no puede exceder 200 caracteres');
            return;
        }

        // Crear nueva tarea
        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString('es-AR')
        };

        this.todos.push(todo);
        this.saveTodos();
        this.render();

        // Limpiar input
        input.value = '';
        feedback.classList.remove('show');
        input.focus();
    }

    /**
     * Maneja el toggle de una tarea
     * @param {HTMLElement} checkbox - El checkbox clickeado
     */
    handleToggleTodo(checkbox) {
        const todoId = parseInt(checkbox.closest('.todo-item').dataset.todoId);
        const todo = this.todos.find(t => t.id === todoId);

        if (todo) {
            todo.completed = checkbox.checked;
            this.saveTodos();
            this.render();
        }
    }

    /**
     * Maneja la eliminación de una tarea
     * @param {HTMLElement} btn - Botón de eliminar clickeado
     */
    handleDeleteTodo(btn) {
        const todoId = parseInt(btn.closest('.todo-item').dataset.todoId);
        this.todos = this.todos.filter(t => t.id !== todoId);
        this.saveTodos();
        this.render();
    }

    /**
     * Maneja el cambio de filtro
     * @param {HTMLElement} btn - Botón de filtro clickeado
     */
    handleFilterChange(btn) {
        // Remover clase active de todos los botones
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });

        // Agregar clase active al botón clickeado
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        this.currentFilter = btn.dataset.filter;
        this.render();
    }

    /**
     * Limpia las tareas completadas
     */
    clearCompleted() {
        if (this.todos.some(t => t.completed)) {
            const confirmDelete = confirm('¿Deseas eliminar todas las tareas completadas?');
            if (confirmDelete) {
                this.todos = this.todos.filter(t => !t.completed);
                this.saveTodos();
                this.render();
            }
        }
    }

    /**
     * Obtiene las tareas filtradas
     * @returns {Array} Array de tareas filtradas
     */
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'pending':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            case 'all':
            default:
                return this.todos;
        }
    }

    /**
     * Actualiza las estadísticas
     */
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const pending = total - completed;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('pendingTasks').textContent = pending;
    }

    /**
     * Renderiza la lista de tareas
     */
    render() {
        const todoList = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filteredTodos = this.getFilteredTodos();

        // Limpiar lista
        todoList.innerHTML = '';

        // Mostrar/ocultar estado vacío
        if (filteredTodos.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }

        // Renderizar tareas
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.dataset.todoId = todo.id;
            li.setAttribute('role', 'listitem');

            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    aria-label="Marcar tarea como completada"
                >
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <div class="todo-actions">
                    <button class="btn btn-delete btn-small" aria-label="Eliminar tarea">
                        Eliminar
                    </button>
                </div>
            `;

            todoList.appendChild(li);
        });

        // Actualizar estadísticas
        this.updateStats();

        // Habilitar/deshabilitar botón limpiar completadas
        const clearBtn = document.getElementById('clearCompletedBtn');
        clearBtn.disabled = !this.todos.some(t => t.completed);
    }

    /**
     * Muestra un mensaje de retroalimentación
     * @param {HTMLElement} feedback - Elemento de feedback
     * @param {string} message - Mensaje a mostrar
     */
    showFeedback(feedback, message) {
        feedback.textContent = message;
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 3000);
    }

    /**
     * Escapa caracteres HTML para prevenir XSS
     * @param {string} text - Texto a escapar
     * @returns {string} Texto escapado
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Guarda las tareas en localStorage
     */
    saveTodos() {
        try {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        } catch (error) {
            console.error('Error al guardar tareas:', error);
        }
    }

    /**
     * Carga las tareas desde localStorage
     */
    loadTodos() {
        try {
            const stored = localStorage.getItem('todos');
            this.todos = stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error al cargar tareas:', error);
            this.todos = [];
        }
    }
}

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
