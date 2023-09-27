import { pool } from "../db.js";

export const getLugares = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM lugar");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getLugar = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM lugar WHERE idLugar = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Lugar no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createLugar = async (req, res) => {
  try {
    const { nom_lug, desc_lug, dir_lug } = req.body;
    const [result] = await pool.query(
      "INSERT INTO lugar (nom_lug, desc_lug, dir_lug VALUES (?, ?, ?)",
      [nom_lug, desc_lug, dir_lug]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      nom_lug,
      desc_lug,
      dir_lug,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateLugar = async (req, res) => {
  try {
    const { nom_lug, desc_lug, dir_lug } = req.body;
    const result = await pool.query(
      "UPDATE lugar SET nom_lug = ?, desc_lug = ?, dir_lug = ? WHERE idLugar = ?",
      [nom_lug, desc_lug, dir_lug, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const deleteLugar = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM lugar WHERE idLugar = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Lugar no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
