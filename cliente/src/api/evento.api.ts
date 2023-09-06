import Axios from 'axios';

export const createEventoRequest = async (evento: { nom_evento: string; hora_evento: string; fecini_evento: string; fecfin_evento: string; modalidad: string; link: string; tipo: string; }) => 
    await Axios.post('http://localhost:4000/evento', evento);
