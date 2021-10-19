import { Fragment, useState } from "react"
import { Check2 } from "../../icons/Check2"
import { Pen } from "../../icons/Pen"
import { X } from "../../icons/X"
import { Actividad, Props } from "../../interfaces/Activiad"

import './index.css'

export const ListaActiidades: React.FC<Props> = ({ actividades, setActividades, setActiviadaEdit }) => {


    const [cache, setCache] = useState<Actividad[]>([]);

    const onCheck = (id: number | undefined) => {
        let newStateActiviades: Actividad[] = actividades.map(act => {
            act.estado = act.id === id ? !act.estado : act.estado
            return act
        })

        setActividades(newStateActiviades);
    }

    const handleDelete = (id: number | undefined) => {
        let newStateActiviades: Actividad[] = actividades.filter(act => {
            return act.id !== id
        })
        setActividades(newStateActiviades);
    }

    const onEdit = (a: Actividad) => {

        setActiviadaEdit(a);

    }

    const onSearch = (value: string) => {

        if (cache.length === 0) {

            setCache(actividades);
        }
        if (cache.length > 0) {

            setActividades(cache)
        }


        if (value.length > 0) {


            setTimeout(() => {

                let actividadFilter: Actividad[] = actividades.map(a => {

                    if (a.descripcion.includes(value)) {
                        return a
                    }
                })
                actividadFilter = actividadFilter.filter(act => {
                    return act !== undefined
                })
                setActividades(actividadFilter);

            }, 0);
        } else {
            setActividades(cache)
        }

    }

    return (
        <Fragment>

            <h2 className="list__title">Actividades Pendientes</h2>

            <input

                placeholder="Busqueda por descripción"
                onChange={e => {
                    onSearch(e.target.value)

                }} />

            <ul className="list">
                {actividades.map((a, i) => {
                    return <li key={i} className={a.estado ? `list__li mb-3 alert ` : `list__li alert mb-3 alert-success`}>
                        <b>{a.id}</b>
                        <p className="list__li__title">{a.titulo}</p>
                        <div className="list__li__actioncontainer   ">
                            <b onClick={() => { onCheck(a.id) }}>
                                <Check2 />
                            </b>
                            <b onClick={() => { onEdit(a) }}>
                                <Pen />
                            </b>
                            <b onClick={() => { handleDelete(a.id) }}>
                                <X />
                            </b>
                        </div>
                    </li>
                })}

            </ul>

        </Fragment>
    )
}
