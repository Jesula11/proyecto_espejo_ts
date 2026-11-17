import { TaskManager } from './TaskManager.js';
// Creamos una instancia de TaskManager
const gestor = new TaskManager();
// Filtro seleccionado actualmente
let filtroActual = 'Todas';
// Seleccionamos los elementos del HTML
const formulario = document.querySelector('#form-tareas');
const inputTitulo = document.querySelector('#input-titulo');
const selectPrioridad = document.querySelector('#select-prioridad');
const listaContenedor = document.querySelector('#lista-tareas');
const loadingState = document.querySelector('#loading-state');
const botonesFiltro = document.querySelectorAll('.btn-filtro');
// Función para mostrar las tareas
function pintarTareas() {
    listaContenedor.innerHTML = '';
    // Obtenemos las tareas filtradas desde TaskManager
    const tareasFiltradas = gestor.filtrarTareas(filtroActual);
    tareasFiltradas.forEach((tarea) => {
        const li = document.createElement('li');
        li.classList.add('item-tarea', tarea.prioridad);
        if (tarea.completada) {
            li.classList.add('completada');
        }
        // Creamos el botón para cambiar el estado
        const botonEstado = document.createElement('button');
        botonEstado.textContent = tarea.completada ? 'Marcar pendiente' : 'Completar';
        botonEstado.addEventListener('click', () => {
            gestor.cambiarEstado(tarea.id);
            pintarTareas();
        });
        // Creamos el título de la tarea
        const titulo = document.createElement('span');
        titulo.textContent = tarea.titulo;
        if (tarea.completada) {
            titulo.classList.add('completada');
        }
        li.appendChild(titulo);
        li.appendChild(botonEstado);
        // Añadimos la tarea a la lista HTML
        listaContenedor.appendChild(li);
    });
}
// Simulamos la carga inicial de la aplicación
async function inicializarApp() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
    loadingState.style.display = 'none';
    pintarTareas();
}
// Evento para añadir nuevas tareas
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const titulo = inputTitulo.value.trim();
    const prioridad = selectPrioridad.value;
    if (titulo === '') {
        return;
    }
    // Delegamos la creación de la tarea a TaskManager
    gestor.agregarTarea(titulo, prioridad);
    pintarTareas();
    formulario.reset();
});
// Eventos de los botones de filtrado
botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
        filtroActual = boton.dataset.filtro;
        pintarTareas();
    });
});
// Iniciamos la aplicación
inicializarApp();
//# sourceMappingURL=app.js.map