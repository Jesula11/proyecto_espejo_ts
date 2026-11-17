import { TaskManager } from './TaskManager.js';
import type { Tarea, Prioridad, Filtro } from './TaskManager.js';

// Creamos una instancia de TaskManager
const gestor = new TaskManager();

// Filtro seleccionado actualmente
let filtroActual: Filtro = 'Todas';

// Seleccionamos los elementos del HTML
const formulario = document.querySelector<HTMLFormElement>('#form-tareas')!;
const inputTitulo = document.querySelector<HTMLInputElement>('#input-titulo')!;
const selectPrioridad = document.querySelector<HTMLSelectElement>('#select-prioridad')!;
const listaContenedor = document.querySelector<HTMLUListElement>('#lista-tareas')!;
const loadingState = document.querySelector<HTMLDivElement>('#loading-state')!;
const botonesFiltro = document.querySelectorAll<HTMLButtonElement>('.btn-filtro');

// Función para mostrar las tareas
function pintarTareas(): void {
    listaContenedor.innerHTML = '';

    // Obtenemos las tareas filtradas desde TaskManager
    const tareasFiltradas: Tarea[] = gestor.filtrarTareas(filtroActual);

    tareasFiltradas.forEach((tarea: Tarea) => {
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
async function inicializarApp(): Promise<void> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1500);
    });

    loadingState.style.display = 'none';
    pintarTareas();
}

// Evento para añadir nuevas tareas
formulario.addEventListener('submit', (evento: SubmitEvent) => {
    evento.preventDefault();

    const titulo = inputTitulo.value.trim();
    const prioridad = selectPrioridad.value as Prioridad;

    if (titulo === '') {
        return;
    }

    // Delegamos la creación de la tarea a TaskManager
    gestor.agregarTarea(titulo, prioridad);

    pintarTareas();
    formulario.reset();
});

// Eventos de los botones de filtrado
botonesFiltro.forEach((boton: HTMLButtonElement) => {
    boton.addEventListener('click', () => {
        filtroActual = boton.dataset.filtro as Filtro;
        pintarTareas();
    });
});

// Iniciamos la aplicación
inicializarApp();