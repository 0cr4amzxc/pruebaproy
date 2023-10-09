import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Ayudacentro from './pages/Ayudacentro';
import Denuncia from './pages/Denuncia';
import Eventos from './pages/Eventos';
import Informate from './pages/Informate';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import Test from './pages/Test';
import Dashboard from './pages/Dashboard';

import ListUser from './pages/models/ListUser';
import NewUser from './pages/models/NewUser';
import ListEvent from './pages/models/ListEvent';
import NewEvent from './pages/models/NewEvent';
import ListMaterial from './pages/models/ListMaterial';
import NewMaterial from './pages/models/NewMaterial';
import ListCenter from './pages/models/ListHelpCenter';
import NewCenter from './pages/models/NewHelpCenter';
import ListDenuncia from './pages/models/ListDenuncia'



import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ayudacentro" element={<Ayudacentro/>}></Route>
        <Route path="/denuncia" element={<Denuncia/>}></Route>
        <Route path="/eventos" element={<Eventos/>}></Route>
        <Route path="/informate" element={<Informate/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/dash" element={<Dashboard/>}>
          <Route index element={<ListUser/>}></Route>
          <Route path='/dash/newuser' element={<NewUser/>}></Route>
          <Route path='/dash/listuser' element={<ListUser/>}></Route>
          <Route path='/dash/listevent' element={<ListEvent/>}></Route>
          <Route path='/dash/newevent' element={<NewEvent/>}></Route>
          <Route path='/dash/listmaterial' element={<ListMaterial/>}></Route>
          <Route path='/dash/newmaterial' element={<NewMaterial/>}></Route>
          <Route path='/dash/listcenter' element={<ListCenter/>}></Route>
          <Route path='/dash/newcenter' element={<NewCenter/>}></Route>
          <Route path='/dash/listdenuncia' element={<ListDenuncia/>}></Route>
        </Route>
        <Route path="/*" element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App