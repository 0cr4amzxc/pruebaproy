import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import { useUserContext, useUserToggleContext } from '../userProvider';
//import { userContext } from '../App';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 

  //const user = useContext(userContext);
  const user = useUserContext();
  const cambiaLogin = useUserToggleContext();

  useEffect(() => {
    if (user) {
      // La actualización del estado ha tenido lugar
      console.log("Actualización del estado realizada: hola " + user.rol);
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      // Define la URL del punto final de inicio de sesión
      const apiUrl = 'http://localhost:4000/login';

      // Crea un objeto con los datos de inicio de sesión
      const loginData = {
        correo_usu: email,
        password_usu: password,
      };

      // Realiza una solicitud POST a la API utilizando Axios
      const response = await axios.post(apiUrl, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const userRol = response.data.rol;
      console.log("el rol al logearse")
      console.log(userRol);
      //console.log(user.rol);

      if (response.status === 200) {
        // La solicitud de inicio de sesión fue exitosa
        // Ahora puedes utilizar userRol según tus necesidades, por ejemplo, redirigir a una página específica
        console.log("entra al estado 200")
        cambiaLogin(userRol);
        navigate('/dash', { state: { userRol } });
      } else if (response.status === 401) {
        // Las credenciales son incorrectas
        console.log('Credenciales incorrectas');
      } else {
        // Otro estado de respuesta (no manejado)
        console.log('Error desconocido');
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <>
    <div>
      {user && <p>¡ Usted es {user.rol} !</p>}
    </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col items-center justify-center">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="text-center text-4xl font-bold underline">Iniciar Sesión</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="contraseña"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-base-100" onClick={handleLogin}>
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useUserRole } from '../UserContext.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 

  const { userRole, setUserRole } = useUserRole();

  const handleLogin = async () => {
    try {
      // Define la URL del punto final de inicio de sesión
      const apiUrl = 'http://localhost:4000/login';

      // Crea un objeto con los datos de inicio de sesión
      const loginData = {
        correo_usu: email,
        password_usu: password,
      };

      // Realiza una solicitud POST a la API utilizando Axios
      const response = await axios.post(apiUrl, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const userRol = response.data.rol;
      console.log("el rol al logearse")
      console.log(userRol);

      if (response.status === 200) {
        // La solicitud de inicio de sesión fue exitosa
        // Ahora puedes utilizar userRol según tus necesidades, por ejemplo, redirigir a una página específica
        setUserRole(userRol);
        if (userRol === 'admin') {
          navigate('/dash', { state: { userRol } });
        } else {
          navigate('/user-dashboard');
        }
      } else if (response.status === 401) {
        // Las credenciales son incorrectas
        console.log('Credenciales incorrectas');
      } else {
        // Otro estado de respuesta (no manejado)
        console.log('Error desconocido');
      }


    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col items-center justify-center">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="text-center text-4xl font-bold underline">Iniciar Sesión</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="contraseña"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-base-100" onClick={handleLogin}>
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
*/
