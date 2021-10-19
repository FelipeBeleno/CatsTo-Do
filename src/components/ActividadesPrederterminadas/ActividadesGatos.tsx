import { Fragment, useState } from "react"
import { useEffect } from "react"
import { llamadaApi } from "../../helpers/llamdaApi"
import { Actividad, ErrorInput, PropsGatos } from "../../interfaces/Activiad"
import { Data } from "../../interfaces/Gatitos"


import './index.css'


export const ActividadesGatos: React.FC<PropsGatos> = ({ setActividades, actividades }) => {


    const [numActividades, setNumActividades] = useState<number>(0)

    const [error, setError] = useState<ErrorInput>({
        estado: false,
        mensaje: ''
    });


    const onGatito = async () => {

        if (numActividades == 0) {

            setError({ estado: true, mensaje: 'El numero debe ser mayor a 0' })
            return
        }


        const respuesta: Data[] = await llamadaApi(numActividades)
        console.log(respuesta)

        const respuestaModify: Actividad[] = respuesta.map((d, i) => {
            let r: Actividad = {
                titulo: d.fact,
                descripcion: d.fact,
                estado: true,
                id: actividades.length + i + 1
            }

            return r;
        })
        setActividades([...actividades, ...respuestaModify])

    }

    return (
        <div className="gatitosContainer">

          
            <h2 className="list__title"> ¿Llenar actividades de gatitos?</h2>


            <label>Indica la cantidad de actividades a agregar</label>
            <br />
            <input type="number" placeholder="Numero actividades" value={numActividades} onChange={(e) => {
                setNumActividades(Number(e.target.value))
            }} />
            {error.estado && <span className="alert alert-danger"> {error.mensaje}</span>}


            <button onClick={onGatito}> Llenar</button>
        </div  >
    )
}
