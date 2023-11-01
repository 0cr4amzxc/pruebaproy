import { pool } from "../db.js";
//import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
//import cookieparser from "cookie-parser";

//para encriptar
const salt = 10;

export const getUsuario = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT idUsuario, nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, correo_usu, genero_usu FROM usuario WHERE idUsuario = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/*export const getUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT idUsuario, nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, correo_usu, genero_usu FROM usuario");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};*/
export const getUsuarios = async (req, res) => {
  // Verifica el rol del usuario desde el cuerpo de la solicitud
  const userRole = req.body.userRole;
  console.log("mandando desde el front")
  console.log(req.body)

    // Si el usuario es un administrador, permite el acceso y realiza la operación.
    try {
      const [result] = await pool.query("SELECT idUsuario, nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, correo_usu, genero_usu FROM usuario");
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};



export const createUsuario = (req, res) => {
  try {
    const {
      nom_usu,
      pat_usu,
      mat_usu,
      ci_usu,
      alias_usu,
      password_usu,
      correo_usu,
      genero_usu,
      rol, // Nuevo atributo "rol"
    } = req.body;

    // Hashear la contraseña
    bcrypt.hash(req.body.password_usu.toString(), salt, async (err, hash) => {
      if (err) return res.json({ Error: "Error al hashear la contraseña" });
      
      // Insertar el usuario en la base de datos
      const [result] = await pool.query(
        "INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          nom_usu,
          pat_usu,
          mat_usu,
          ci_usu,
          alias_usu,
          hash,
          correo_usu,
          genero_usu,
          rol, // Agregar el valor del atributo "rol"
        ]
      );

      res.json({
        id: result.insertId,
        alias_usu,
        //hash
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const {
      nom_usu,
      pat_usu,
      mat_usu,
      ci_usu,
      alias_usu,
      correo_usu,
      genero_usu,
      rol, // Nuevo atributo "rol"
    } = req.body;

    // Verificar si el ID de usuario existe
    const [checkUser] = await pool.query(
      "SELECT idUsuario FROM usuario WHERE idUsuario = ?",
      [req.params.id]
    );

    if (checkUser.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Realizar la actualización si el ID existe
    const result = await pool.query(
      "UPDATE usuario SET nom_usu = ?, pat_usu = ?, mat_usu = ?, ci_usu = ?, alias_usu = ?, correo_usu = ?, genero_usu = ?, rol = ? WHERE idUsuario = ?",
      [
        nom_usu,
        pat_usu,
        mat_usu,
        ci_usu,
        alias_usu,
        correo_usu,
        genero_usu,
        rol, // Agregar el valor del atributo "rol"
        req.params.id,
      ]
    );

    res.json({
      nombre: alias_usu,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const deleteUsuario = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM usuario WHERE idUsuario = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};