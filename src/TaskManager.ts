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

    // Obtener todas las tareas
    public obtenerTareas(): Tarea[] {
        return [...this.tareas];
    }

    // Añadir una nueva tarea
    public agregarTarea(titulo: string, prioridad: Prioridad): void {

        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo: titulo,
            prioridad: prioridad,
            completada: false
        };

        this.tareas = [...this.tareas, nuevaTarea];
    }

    // Cambiar el estado de una tarea
    public cambiarEstado(id: number): void {

        this.tareas = this.tareas.map((tarea: Tarea) => {

            if (tarea.id === id) {
                return {
                    ...tarea,
                    completada: !tarea.completada
                };
            }

            return tarea;
        });
    }

    // Filtrar las tareas según su estado
    public filtrarTareas(filtro: Filtro): Tarea[] {

        if (filtro === 'Pendientes') {
            return this.tareas.filter((tarea: Tarea) => {
                return !tarea.completada;
            });
        }

        if (filtro === 'Completadas') {
            return this.tareas.filter((tarea: Tarea) => {
                return tarea.completada;
            });
        }

        return this.obtenerTareas();
    }

}