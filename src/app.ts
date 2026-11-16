// Tipos de prioridad que puede tener una tarea
type Prioridad = 'Alta' | 'Media' | 'Baja';

// Estructura de una tarea
interface Tarea {
    id: number;
    titulo: string;
    prioridad: Prioridad;
    completada: boolean;
}