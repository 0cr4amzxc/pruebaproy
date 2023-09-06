import {Route, Routes} from 'react-router-dom';
import EventoPages from './pages/EventoPages'
import EventoCrear from './pages/EventoCrear'
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = { <EventoPages/>}/>
      <Route path = "/new" element = { <EventoCrear/>}/>
      <Route path = "*" element = { <NotFound/>}/>
    </Routes>
    </>
  )
}

export default App;