




export interface Actividad {

    id?: number,
    titulo: string,
    descripcion: string,
    estado?: boolean

}

export interface ErrorInput {
    estado: boolean,
    mensaje: string
}

export interface Props {
    actividades: Actividad[],
    setActividades: (actividade: Actividad[]) => void;
    setActiviadaEdit?: (actividad: Actividad) => void;
}



export interface PropsEdit {
    setActividades: (actividade: Actividad[]) => void;
    activiadaEdit: Actividad;
    setActiviadaEdit: (actividad: Actividad) => void;
    actividades: Actividad[],
}


export interface PropsGatos {
    setActividades: (actividade: Actividad[]) => void;
    actividades: Actividad[],


}