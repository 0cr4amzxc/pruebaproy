import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useUserContext, useUserToggleContext } from "../userProvider";
//import { userContext } from '../App';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const apiUrl = "https://pruebaproy-production.up.railway.app/login";

      // Crea un objeto con los datos de inicio de sesión
      const loginData = {
        correo_usu: email,
        password_usu: password,
      };

      // Realiza una solicitud POST a la API utilizando Axios
      const response = await axios.post(apiUrl, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userRol = response.data.rol;
      const userId = response.data.idUsuario;
      console.log("el rol al logearse");
      console.log(userRol);
      //console.log(user.rol);

      if (response.status === 200) {
        // La solicitud de inicio de sesión fue exitosa
        // Ahora puedes utilizar userRol según tus necesidades, por ejemplo, redirigir a una página específica
        console.log("entra al estado 200");
        cambiaLogin(userRol, userId);
        if(userRol === "admin"){navigate("/dash", { state: { userRol } });}
        else if(userRol === "usuario"){navigate("/");}
        else {console.log("ROL NO ENCONTRADO!")}
        
      } else if (response.status === 401) {
        // Las credenciales son incorrectas
        console.log("Credenciales incorrectas");
      } else {
        // Otro estado de respuesta (no manejado)
        console.log("Error desconocido");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <div>{user && <p>¡ Usted es {user.rol} !</p>}</div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:w-2/4 p-6 lg:text-left">
            <h1 className="text-5xl font-bold">Inicia sesion ahora!</h1>
            <p className="py-6">
              La puerta a infinitas posibilidades espera tu paso. Inicia sesion
              en nuestra plataforma y adéntrate en un mundo de descubrimientos y
              aprendizaje en esta lucha contra la violencia.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
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
                <label className="label">
                  <Link to="/newaccount" className="link link-primary">
                    Crear cuenta nueva
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary text-base-100"
                  onClick={handleLogin}
                >
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