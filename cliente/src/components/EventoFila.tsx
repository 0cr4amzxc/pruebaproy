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
      <p>{evento.tipo}</p>
      <p>{evento.modalidad}</p>
      <p>{evento.link}</p>
      <span><button onClick={() => navigate(`/edit/${evento.idEvento}`)}>Modificar</button></span>
      <span><button onClick={() => deleteEvento(evento.idEvento)}>Borrar</button></span>
    </div>
  );
}

export default EventoFila;
