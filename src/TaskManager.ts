interface Tarea {
    id: number;
    titulo: string;
    prioridad: Prioridad;
    completada: boolean;
}

type Prioridad = 'Alta' | 'Media' | 'Baja';

export class TaskManager {

    // Array privado que almacenará todas las tareas
    private tareas: Tarea[] = [];

}

constructor() {
    this.tareas = [
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
}