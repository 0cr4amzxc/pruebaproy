import {useEvento} from '../contexts/EventoProvider';
import {useNavigate} from 'react-router-dom'

function EventoFila({ evento }) {

  const {deleteEvento} = useEvento();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{evento.nom_evento}</h2>
      <p>{evento.hora_evento}</p>
      <p>{evento.fecini_evento}</p>
      <p>{evento.fecfin_evento}</p>
      <p>{evento.modalidad}</p>
      <p>{evento.link}</p>
      <p>{evento.tipo}</p>
      <span><button onClick={() => navigate(`/edit/${evento.id_evento}`)}>Modificar</button></span>
      <span><button onClick={() => deleteEvento(evento.id_evento)}>Borrar</button></span>
    </div>
  );
}

export default EventoFila;
