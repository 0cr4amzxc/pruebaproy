import { useContext, useState} from 'react';
import { getEventoRequest, deleteEventoRequest,createEventoRequest, getEvRequest, updateEventoRequest } from '../api/evento.api';
import { EventoContext } from './EventoContext';

export const useEvento = () => {
    const context = useContext(EventoContext);
    if(!context){
        throw new Error("useEvento no esta en EventoProvider")
    }
    return context
}

export const EventoContextProvider = ({ children }) => {
    
    const [eventos, setEventos] = useState([]);

    //CARGAR/listar EVENTOS
    async function cargarEvento() {
        const response = await getEventoRequest();
        setEventos(response.data)
    }

    //ELIMINAR EVENTO
    const deleteEvento = async (id: any) => {
        try {
          const response = await deleteEventoRequest(id);
          setEventos(eventos.filter(evento => evento.id_evento !== id))
          //console.log(response)
        } catch (error) {
          console.error(error);
        }
      };
    
    //CREAR EVENTO
    const createEvento = async (evento:any) => {
      try {
        const response = await createEventoRequest(evento);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    //OBETENER 1 EVENTO POR ID
    const getEvento = async (id: any) => {
      try{
        const response = await getEvRequest(id);
        return response.data
      }
      catch(error){
        console.error(error);
      }
      
    }

    //EDITANDO EVENTO
    const updateEvento = async(id:any, newFields:any) => {
      try{
        const response = await updateEventoRequest(id, newFields);
        console.log(response);
      }
      catch(error){
        console.error(error);
      }
    }

    return (
    <EventoContext.Provider value={{ eventos, cargarEvento, deleteEvento, createEvento, getEvento,updateEvento }}>
        {children}
    </EventoContext.Provider>
    );
};