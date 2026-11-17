export class TaskManager {
    // Array privado que almacenará todas las tareas
    tareas = [];
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
    obtenerTareas() {
        return [...this.tareas];
    }
    // Añadir una nueva tarea
    agregarTarea(titulo, prioridad) {
        const nuevaTarea = {
            id: Date.now(),
            titulo: titulo,
            prioridad: prioridad,
            completada: false
        };
        this.tareas = [...this.tareas, nuevaTarea];
    }
    // Cambiar el estado de una tarea
    cambiarEstado(id) {
        this.tareas = this.tareas.map((tarea) => {
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
    filtrarTareas(filtro) {
        if (filtro === 'Pendientes') {
            return this.tareas.filter((tarea) => {
                return !tarea.completada;
            });
        }
        if (filtro === 'Completadas') {
            return this.tareas.filter((tarea) => {
                return tarea.completada;
            });
        }
        return this.obtenerTareas();
    }
}
//# sourceMappingURL=TaskManager.js.map