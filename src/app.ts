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

type Filtro = 'Todas' | 'Pendientes' | 'Completadas';

let filtroActual: Filtro = 'Todas';