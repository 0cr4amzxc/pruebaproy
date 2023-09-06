import { deleteEventoRequest } from "../api/evento.api";
import {useEvento} from '../contexts/EventoContext'

function EventoFila({ evento }) {

  //const {} = useEvento()****AQUI

  const handleDelete = async (id: any) => {
    try {
      const response = await deleteEventoRequest(id);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr>
      <td>{evento.nom_evento}</td>
      <td>{evento.hora_evento}</td>
      <td>{evento.fecini_evento}</td>
      <td>{evento.fecfin_evento}</td>
      <td>{evento.modalidad}</td>
      <td>{evento.link}</td>
      <td>
        <button>Modificar</button>
      </td>
      <td>
        <button onClick={() => handleDelete(evento.id_evento)}>Borrar</button>
      </td>
    </tr>
  );
}

export default EventoFila;
