import { pool } from "../db.js";
//import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
//import cookieparser from "cookie-parser";

//para encriptar
const salt = 10;

export const getUsuario = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM usuario WHERE idUsuario = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM usuario");
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
    } = req.body;
    //hasheamos:

    bcrypt.hash(req.body.password_usu.toString(), salt, async (err, hash) => {
      //if(err) return res.json({Error: "Error al hashear la pass"});
      //console.log("Hash: "+ hash);
      const [result] = await pool.query(
        "INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          nom_usu,
          pat_usu,
          mat_usu,
          ci_usu,
          alias_usu,
          hash,
          correo_usu,
          genero_usu,
        ]
      );
      console.log(result);
      res.json({
        id: result.insertId,
        alias_usu,
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
    } = req.body;
    const result = await pool.query(
      "UPDATE usuario SET nom_usu = ?, pat_usu = ?, mat_usu = ?, ci_usu = ?, alias_usu = ?, correo_usu = ?, genero_usu = ? WHERE idUsuario = ?",
      [
        nom_usu,
        pat_usu,
        mat_usu,
        ci_usu,
        alias_usu,
        correo_usu,
        genero_usu,
        req.params.id,
      ]
    );
    res.json({
      nombre: alias_usu
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