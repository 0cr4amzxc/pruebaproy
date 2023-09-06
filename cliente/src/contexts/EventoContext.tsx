import {createContext, useContext, useState} from 'react';
import { getEventoRequest } from '../api/evento.api';

export const EventoContext = createContext();

export const useEvento = () => {
    const context = useContext(EventoContext);
    if(!context){
        throw new Error("useEvento no esta en EventoProvider")
    }
    return context
}


export const EventoContextProvider = ({ children }) => {
    const [eventos, setEventos] = useState([]);

    async function cargarEvento() {
        const response = await getEventoRequest();
        setEventos(response.data)
    }

    return (
    <EventoContext.Provider value={{eventos, cargarEvento}}>
        {children}
    </EventoContext.Provider>
    );
};