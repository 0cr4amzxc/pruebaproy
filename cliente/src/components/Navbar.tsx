import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <h1>Eventos</h1>
            <ul>
                <li>
                    <Link to="/evento">Ver Eventos</Link>
                </li>
                <li>
                    <Link to="/new">Crear Evento</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar