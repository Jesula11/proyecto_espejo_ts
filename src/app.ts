// Tipos de prioridad que puede tener una tarea
type Prioridad = 'Alta' | 'Media' | 'Baja';

// Estructura de una tarea
interface Tarea {
    id: number;
    titulo: string;
    prioridad: Prioridad;
    completada: boolean;
}

// Array inicial de tareas
let tareas: Tarea[] = [
    {
        id: 1,
        titulo: 'Aprender la sintaxis de ES6',
        prioridad: 'Alta',
        completada: true
    },
    {
        id: 2,
        titulo: 'Dominar la asincronía y Fetch',
        prioridad: 'Media',
        completada: false
    },
    {
        id: 3,
        titulo: 'Migrar el proyecto a Angular',
        prioridad: 'Baja',
        completada: false
    }
];

// Tipos de filtros disponibles
type Filtro = 'Todas' | 'Pendientes' | 'Completadas';

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
    const tareasFiltradas: Tarea[] = tareas.filter((tarea: Tarea) => {

        if (filtroActual === 'Pendientes') {
            return !tarea.completada;
        }

        if (filtroActual === 'Completadas') {
            return tarea.completada;
        }

        return true;
    });

}

// Recorrer las tareas filtradas
tareasFiltradas.forEach((tarea: Tarea) => {

    // Crear un elemento <li>
    const li = document.createElement('li');

    // Añadir las clases CSS según la tarea
    li.classList.add('item-tarea', tarea.prioridad);

    // Si la tarea está completada, añadir la clase correspondiente
    if (tarea.completada) {
        li.classList.add('completada');
    }

});