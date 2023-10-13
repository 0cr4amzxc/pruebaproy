import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';


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

    // Generar un token de autenticación si es necesario
    const token = jwt.sign({ idUsuario }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//obtener informacion del usuario


//cerrar sesion
export const logoutUsuario = (req, res) => {
    // Verificar si hay una sesión activa
    if (req.session && req.session.userId) {
      // Destruir la sesión
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: 'Error al cerrar sesión' });
        }
        // Si la sesión se destruye con éxito, devuelve un mensaje de éxito
        res.status(200).json({ message: 'Sesión cerrada con éxito' });
      });
    } else {
      // Si no hay una sesión activa, devuelve un mensaje informativo
      res.status(200).json({ message: 'No hay una sesión activa' });
    }
  };
  

