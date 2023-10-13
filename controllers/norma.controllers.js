import { pool } from "../db.js";

export const getNorma = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT url, desc_nor, fuente_nor, vigencia_nor FROM material as m, norma as n WHERE m.idMaterial = n.idMaterial AND n.idMaterial = ?;",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getNormas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT m.idMaterial, url, desc_nor, fuente_nor, vigencia_nor FROM material as m, norma as n WHERE m.idMaterial = n.idMaterial;");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createNorma = async (req, res) => {
  try {
    const {
        url, desc_nor, fuente_nor, vigencia_nor
    } = req.body;
    const [result1] = await pool.query("INSERT INTO material (url) VALUES (?)",[url]);
    console.log(result1);

    const [result2] = await pool.query(
        "INSERT INTO norma(idMaterial, vigencia_nor, fuente_nor, desc_nor) VALUES (?, ?, ?, ?)",
        [result1.insertId, vigencia_nor, fuente_nor, desc_nor]
      );

    console.log(result2);
    res.json({
      id: result1.insertId,
      desc_nor,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateNorma = async (req, res) => {
  try {
    const {
        url, desc_nor, fuente_nor, vigencia_nor
    } = req.body;
    const result1 = await pool.query(
      "UPDATE material SET url = ? WHERE idMaterial = ?;",
      [url, req.params.id]
    );
    const result2 = await pool.query(
        "UPDATE norma SET vigencia_nor = ?, fuente_nor = ?, desc_nor = ? WHERE idMaterial = ?;",
        [vigencia_nor, fuente_nor, , desc_nor, req.params.id]
      );
    res.json({
      desc_nor,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteNorma = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM material WHERE idMaterial = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};