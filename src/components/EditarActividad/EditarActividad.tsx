import { Fragment, useState } from "react"
import { PropsEdit } from "../../interfaces/Activiad"
import './index.css';






export const EditarActividad: React.FC<PropsEdit> = ({ activiadaEdit, setActiviadaEdit, setActividades, actividades }) => {



    const handleUpdate = () => {

        let newActividadStates = actividades.map(act => {

            act.descripcion = act.id === activiadaEdit.id ? activiadaEdit.descripcion : act.descripcion;
            return act;
        })

        setActividades(newActividadStates)
        setActiviadaEdit({
            titulo: '',
            descripcion: ''
        })

    }

    return (
        <div className="edit__container">
            <h4>Editar Actividad</h4>
            <h5>Titulo: {activiadaEdit.titulo}</h5>
            <label>Descripción</label>
            <textarea value={activiadaEdit.descripcion} onChange={(e) => {

                setActiviadaEdit({
                    ...activiadaEdit,
                    descripcion: e.target.value
                })
            }} />
            <button onClick={handleUpdate}> Editar</button>

        </div >
    )
}
