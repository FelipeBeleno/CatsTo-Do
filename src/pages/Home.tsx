import { Fragment, useState } from "react"
import { ActividadesGatos } from "../components/ActividadesPrederterminadas/ActividadesGatos"
import { CrearActividad } from "../components/CrearActividad/CrearActividad"
import { EditarActividad } from "../components/EditarActividad/EditarActividad"
import { ListaActiidades } from "../components/ListaActividadesPendientes/ListaActiidades"
import { Actividad } from "../interfaces/Activiad"

export const Home = () => {



    const [actividades, setActividades] = useState<Actividad[]>([]);
    const [activiadaEdit, setActiviadaEdit] = useState<Actividad>({
        titulo: '',
        descripcion: ''
    });
    return (
        <Fragment>
            <div className="home" id="home">

                <div className="card home__card shadow-lg" id="card">
                    <div className="card-body">
                        <h1 className="home__card__title mb-5">To-Do App</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <CrearActividad actividades={actividades} setActividades={setActividades} />
                            </div>
                            <div className="col">
                                <ActividadesGatos setActividades={setActividades} actividades={actividades} />
                            </div>
                            {
                                activiadaEdit.titulo !== ''
                                &&
                                <div className="col">
                                    <EditarActividad activiadaEdit={activiadaEdit} setActiviadaEdit={setActiviadaEdit} setActividades={setActividades} actividades={actividades} />
                                </div>
                            }
                            <div className="col">
                                {/* Actividades pendientes */}
                                <ListaActiidades actividades={actividades} setActividades={setActividades} setActiviadaEdit={setActiviadaEdit} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
