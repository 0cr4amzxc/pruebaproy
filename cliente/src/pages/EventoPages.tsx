import { useEffect} from "react";
import EventoFila from './../components/EventoFila';
import {useEvento} from '../contexts/EventoProvider.tsx'

function EventoPages() {
    //aqui precargamos los datos antes de mostrarlos
    const { eventos, cargarEvento } = useEvento();

    useEffect(() => { 
        cargarEvento();
    }, [])


    function renderMain(){
        if (eventos.length === 0) return <h1>Lista de eventos vacia</h1>
        return eventos.map((evento) => <EventoFila evento = {evento} key={evento.id_evento}/>);
    }

    return (
        <div>
            <h1>Lista de Eventos</h1>
                { renderMain() }
        </div>

    )
}

export default EventoPages