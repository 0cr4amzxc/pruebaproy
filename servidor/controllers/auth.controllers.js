import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';


export const signUp = async (req, res) => {
  const {nombre, alias_usu, email, password, rol} = req.body;
  consol.log(req.body);

  res.json("sig up");
}

export const signIn = async (req, res) => {
  res.json("sig in");
}


//iniciar sesion dando su rol respectivo
export const loginUsuario = async (req, res) => {
  // Verificar si ya existe una sesión activa
  if (req.session && req.session.userId) {
    return res.status(200).json({ message: 'Ya tienes una sesión activa' });
  }

  const { correo_usu, password_usu } = req.body;

  try {
    // Buscar al usuario por su correo electrónico
    const [result] = await pool.query(
      'SELECT idUsuario, password_usu, rol FROM usuario WHERE correo_usu = ?',
      [correo_usu]
    );

    //console.log(result);

    if (result.length === 0) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    const { idUsuario, password_usu: hashedPassword, rol } = result[0];

    // Comparar la contraseña proporcionada con la contraseña encriptada en la base de datos
    const passwordMatch = await bcrypt.compare(password_usu, hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    // Iniciar sesión
    req.session.userId = idUsuario;

    // Establecer el rol del usuario en la sesión
    req.session.role = rol;
    console.log(req.session.role);

    // Generar un token de autenticación si es necesario
    const token = jwt.sign({ idUsuario, rol }, 'secret_key', { expiresIn: '1h' });

    //console.log(idUsuario);

    res.status(200).json({ message: 'Inicio de sesión exitoso', token, rol });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//obtener informacion del usuario


//cerrar sesion
// Cerrar sesión
export const logoutUsuario = (req, res) => {
  // Verificar si hay una sesión activa
  if (req.session && req.session.userId) {
    // Destruir la sesión
    req.session.destroy((err) => {
      if (err) {
        // Si hay un error al destruir la sesión, devuelve un mensaje de error
        return res.status(500).json({ message: 'Error al cerrar sesión: ' + err.message });
      }
      // Si la sesión se destruye con éxito, devuelve un mensaje de éxito
      res.status(200).json({ message: 'Sesión cerrada con éxito' });
    });
  } else {
    // Si no hay una sesión activa, devuelve un mensaje informativo
    res.status(200).json({ message: 'No hay una sesión activa' });
  }
};


//obtener datos de usuario
export const datosUsuario = async(req, res) => {

      // Verificar si hay una sesión activa
      if (req.session && req.session.userId) {
        
        

        const { correo_usu, password_usu, idUsuario } = req.body;
        const [result] = await pool.query(
          'SELECT nom_usu, idUsuario, password_usu, correo_usu, rol FROM usuario WHERE idUsuario = ?',
          [idUsuario]
          );
        console.log(correo_usu);
        console.log(result);
        console.log(password_usu);

        // Buscar al usuario por su correo electrónico
        try {
          const [result] = await pool.query(
            'SELECT nom_usu, idUsuario, password_usu, correo_usu, rol FROM usuario WHERE idUsuario = ?',
            [idUsuario]
            );
            
            res.status(200).json({ message: 'Datos de usuario', result });
          } catch (error) {
            return res.status(500).json({ message: error.message });
          }
      } else {
        // Si no hay una sesión activa, devuelve un mensaje informativo
        res.status(200).json({ message: 'No hay una sesión activa' });
      }

  
};