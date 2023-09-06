import Axios from 'axios';

export const getEventoRequest = async()=>
    await Axios.get('http://localhost:4000/evento');

export const createEventoRequest = async (evento: { nom_evento: string; hora_evento: string; fecini_evento: string; fecfin_evento: string; modalidad: string; link: string; tipo: string; }) => 
    await Axios.post('http://localhost:4000/evento', evento);

export const deleteEventoRequest =async (id: any) => 
    await Axios.delete(`http://localhost:4000/evento/${id}`);