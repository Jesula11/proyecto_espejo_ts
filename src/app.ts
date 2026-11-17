import { TaskManager } from './TaskManager';
import type { Tarea, Prioridad, Filtro } from './TaskManager';

const gestor = new TaskManager();
// Filtro seleccionado actualmente
let filtroActual: Filtro = 'Todas';

// Seleccionar elementos del DOM
const formulario = document.querySelector<HTMLFormElement>('#form-tareas')!;
const inputTitulo = document.querySelector<HTMLInputElement>('#input-titulo')!;
const selectPrioridad = document.querySelector<HTMLSelectElement>('#select-prioridad')!;
const listaContenedor = document.querySelector<HTMLUListElement>('#lista-tareas')!;
const loadingState = document.querySelector<HTMLDivElement>('#loading-state')!;
const botonesFiltro = document.querySelectorAll<HTMLButtonElement>('.btn-filtro');

// Inicializar la aplicación
async function inicializarApp(): Promise<void> {

    // Simular una espera de 1,5 segundos
    await new Promise<void>(resolve => {
        setTimeout(resolve, 1500);
    });

    // Ocultar el mensaje de carga
    loadingState.style.display = 'none';

    // Mostrar las tareas
    pintarTareas();
}

// Mostrar las tareas en el HTML
function pintarTareas(): void {

    // Limpiar el contenedor de tareas
    listaContenedor.innerHTML = '';

    // Filtrar las tareas según el filtro actual
    const tareasFiltradas: Tarea[] = gestor.filtrarTareas(filtroActual);

    // Recorrer las tareas filtradas
    tareasFiltradas.forEach((tarea: Tarea) => {

        const li = document.createElement('li');

        li.classList.add('item-tarea', tarea.prioridad);

        if (tarea.completada) {
            li.classList.add('completada');
        }

        // Crear el botón para cambiar el estado de la tarea
        const botonEstado = document.createElement('button');
        botonEstado.textContent = tarea.completada
        ? 'Marcar pendiente'
        : 'Completar';


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

