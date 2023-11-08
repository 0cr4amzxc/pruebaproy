import React, { useEffect } from 'react';

import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Ayudacentro from './pages/Ayudacentro';

import Denuncia from './pages/Denuncia';
import CreateDenuncia from './pages/denuncia/CreateDenuncia.jsx';
import CreatePrueba from './pages/denuncia/CreatePrueba.jsx';
import CreateTestigo from './pages/denuncia/CreateTestigo.jsx';
import CreateVictima from './pages/denuncia/CreateVictima.jsx';
import CreateAcusado from './pages/denuncia/CreateAcusado.jsx';

import Eventos from './pages/Eventos';
import Informate from './pages/Informate';
import Normas from './pages/Normas'
import Edus from './pages/Edus'

import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Test from './pages/Test';

import ListTest from './pages/quiz/ListTest';
import Test1 from './pages/quiz/Test1';
import Test2 from './pages/quiz/Test2';
import Test3 from './pages/quiz/Test3';
import Test4 from './pages/quiz/Test4';

import Dashboard from './pages/Dashboard';
import NewAccount from './pages/NewAccount';

import ListUser from './pages/models/ListUser';
import NewUser from './pages/models/NewUser';
import ListEvent from './pages/models/ListEvent';
import NewEvent from './pages/models/NewEvent';
import ListEdu from './pages/models/ListEdu';
import ListNorma from './pages/models/ListNorma';
import NewMaterial from './pages/models/NewMaterial';
import ListCenter from './pages/models/ListHelpCenter';
import NewCenter from './pages/models/NewHelpCenter';
import ListDenuncia from './pages/models/ListDenuncia'

import ChatBotHelper from './components/ChatBotHelper';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

import { UserProvider } from './userProvider';


function App() {
  useEffect(() => {
    document.title = "Ayda";
    document.favicon = "https://i.postimg.cc/5N3RTCt5/gozu.jpg";
  }, []);

  return (
    <UserProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ayudacentro" element={<Ayudacentro/>}></Route>
        <Route path="/denuncia" element={<Denuncia/>}>
          <Route index element={<CreateDenuncia/>}></Route>
          <Route path='/denuncia/addprueba/:id' element={<CreatePrueba/>}></Route>
          <Route path='/denuncia/addtestigo/:id' element={<CreateTestigo/>}></Route>
          <Route path='/denuncia/addvictima/:id' element={<CreateVictima/>}></Route>
          <Route path='/denuncia/addacusado/:id' element={<CreateAcusado/>}></Route>
        </Route>
        <Route path="/eventos" element={<Eventos/>}></Route>
        <Route path="/informate" element={<Informate/>}></Route>
        <Route path="/informate/edu/:id" element={<Edus/>}></Route>
        <Route path="/informate/norma/:id" element={<Normas/>}></Route>
        <Route path="/signup" element={<Login/>}></Route>
        <Route path="/test" element={<Test/>}>
          <Route index element={<ListTest />} />
          <Route path='/test/test_1' element={<Test1/>}></Route>
          <Route path='/test/test_2' element={<Test2/>}></Route>
          <Route path='/test/test_3' element={<Test3/>}></Route>
          <Route path='/test/test_4' element={<Test4/>}></Route>
        </Route>
        <Route path="/dash" element={<Dashboard/>}>
          <Route path='/dash/newuser' element={<NewUser/>}></Route>
          <Route path='/dash/listuser' index element={<ListUser/>}></Route>
          <Route path='/dash/listevent' element={<ListEvent/>}></Route>
          <Route path='/dash/newevent' element={<NewEvent/>}></Route>
          <Route path='/dash/listedu' element={<ListEdu/>}></Route>
          <Route path='/dash/listnorma' element={<ListNorma/>}></Route>
          <Route path='/dash/newmaterial' element={<NewMaterial/>}></Route>
          <Route path='/dash/listcenter' element={<ListCenter/>}></Route>
          <Route path='/dash/newcenter' element={<NewCenter/>}></Route>
          <Route path='/dash/listdenuncia' element={<ListDenuncia/>}></Route>
        </Route>
        <Route path="/newaccount" element={<NewAccount/>}></Route>
        <Route path="/*" element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
      <ChatBotHelper/>
    </UserProvider>
  )
}

export default App;