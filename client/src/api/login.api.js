import axios from "axios";

// Función para iniciar sesión
async function iniciarSesion(correo, contrasena) {
  try {
    // Realizar una solicitud POST al endpoint de inicio de sesión en el backend
    const response = await axios.post('http://localhost:4000/login', {
      correo_usu: correo,
      password_usu: contrasena,
    });

    // Verificar la respuesta del servidor
    if (response.status === 200) {
      console.log("Inicio de sesión exitoso");
      // Puedes manejar la respuesta según tus necesidades
      const data = response.data;
      // Aquí podrías guardar el token de autenticación u otra información de sesión
    } else {
      console.error("Error en el inicio de sesión");
      // Puedes manejar los errores de inicio de sesión
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    // Manejar cualquier error en la solicitud
  }
}

// Ejemplo de uso
iniciarSesion('usuario@example.com', 'contrasena123');
