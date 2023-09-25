import { pool } from "../db.js";
//import jwt from "jsonwebtoken"; //ver para que usar
import bcrypt, { hash } from "bcrypt";
//import cookieparser from "cookie-parser";  //paracookies

export const getAdmin = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM administrador WHERE idAdmin = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Administrador no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getAdmins = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM administrador");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createAdmin = async (req, res) => {
  try {
    const {
      idUsuario,
      dir_adm,
      cargo_adm
    } = req.body;
    
    const [result] = await pool.query(
        "INSERT INTO administrador (idUsuario, dir_adm, cargo_adm) VALUES (?, ?, ?)",
        [
            idUsuario,
            dir_adm,
            cargo_adm
        ]
      );
      console.log(result);
      res.json({
        id: result.insertId,
        idUs: idUsuario,
      });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateAdmin = async (req, res) => {
  try {
    const {
        dir_adm,
        cargo_adm,
    } = req.body;
    const result = await pool.query( "UPDATE administrador SET  dir_adm, cargo_adm WHERE idAdmin = ?",
      [
        dir_adm,
        cargo_adm,
        req.params.id,
      ]
    );
    res.json({
      Idmod: req.params.id
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteAdmin = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM administrador WHERE idAdmin = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Administrador no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};