import {Route, Routes} from 'react-router-dom';
import EventoPages from './pages/EventoPages'
import EventoCrear from './pages/EventoForm'
import NotFound from './pages/NotFound';
import Inicio from './pages/Inicio';
import Register from './pages/RegistroUsu';
import Navbar from './components/Navbar';
import {EventoContextProvider} from './contexts/EventoProvider';
import LoginUsu from './pages/loginUsu';


function App(){
  return (
    <EventoContextProvider>
    <Navbar/>
    <Routes>
      <Route path = "/" element = { <Inicio/>}/>
      <Route path = "/registro" element = { <Register/>}/>
      <Route path = "/login" element = { <LoginUsu/>}/>
      <Route path = "/evento" element = { <EventoPages/>}/>
      <Route path = "/new" element = { <EventoCrear/>}/>
      <Route path = "/edit/:id" element = { <EventoCrear/>}/>
      <Route path = "*" element = { <NotFound/>}/>
    </Routes>
    </EventoContextProvider>
  )
}

export default App;