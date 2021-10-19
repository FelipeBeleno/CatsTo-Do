import { Fragment, useState } from "react"
import { Actividad, ErrorInput, Props } from "../../interfaces/Activiad";

import './index.css';




export const CrearActividad: React.FC<Props> = ({ actividades, setActividades }) => {

    const [inputForm, setInputForm] = useState<Actividad>({
        titulo: '',
        descripcion: '',
        estado: true
    });

    const [error, setError] = useState<ErrorInput>({
        estado: false,
        mensaje: ''
    });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError({ mensaje: '', estado: false })

        if (inputForm.titulo.trim().length <= 3) {

            setError({ mensaje: 'El titulo debe superar los tres caracteres', estado: true })
            return;
        }

        if (inputForm.descripcion.trim().length <= 3) {
            setError({ mensaje: 'La descripción debe superar los tres caracteres', estado: true })
            return;
        }

        setActividades([...actividades, {
            id: actividades.length + 1,
            descripcion: inputForm.descripcion,
            estado: inputForm.estado,
            titulo: inputForm.titulo
        }])


        setInputForm({
            descripcion: '',
            titulo: '',
            estado: true
        })

    }

    return (
        <Fragment>
            <h2 className="list__title"> Nueva Actividad</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>Titulo</label>
                <input onChange={handleChangeInput} className="form__input" name="titulo" placeholder="Ingresa el Titulo" value={inputForm.titulo} />
                <label>Descripción</label>
                <input onChange={handleChangeInput} className="form__input" name="descripcion" placeholder="Ingresa la Descripción" value={inputForm.descripcion} />
                {error.estado && <span className="alert alert-danger"> {error.mensaje}</span>}
                <button type="submit">enviar </button>
            </form>

        </Fragment>
    )
}
