export type Prioridad = 'Alta' | 'Media' | 'Baja';
export interface Tarea {
    id: number;
    titulo: string;
    prioridad: Prioridad;
    completada: boolean;
}
export type Filtro = 'Todas' | 'Pendientes' | 'Completadas';
export declare class TaskManager {
    private tareas;
    constructor();
    obtenerTareas(): Tarea[];
    agregarTarea(titulo: string, prioridad: Prioridad): void;
    cambiarEstado(id: number): void;
    filtrarTareas(filtro: Filtro): Tarea[];
}
//# sourceMappingURL=TaskManager.d.ts.map