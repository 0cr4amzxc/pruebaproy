import { pool } from "../db.js";

export const getPruebas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM prueba");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPrueba = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM prueba WHERE idPrueba = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Prueba no encontrada" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPrueba = async (req, res) => {
  try {
    const { idDenuncia, archivo_pru, des_pru, tipo_pru } = req.body;

    const [result] = await pool.query(
      "INSERT INTO prueba (idDenuncia, archivo_pru, des_pru, tipo_pru) VALUES (?, ?, ?, ?)",
      [idDenuncia, archivo_pru, des_pru, tipo_pru]
    );

    console.log(result);
    res.json({
      idPrueba: result.insertId,
      idDenuncia,
      archivo_pru,
      des_pru,
      tipo_pru,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePrueba = async (req, res) => {
  try {
    const { archivo_pru, des_pru, tipo_pru } = req.body;
    const result = await pool.query(
      "UPDATE prueba SET archivo_pru = ?, des_pru = ?, tipo_pru = ? WHERE idPrueba = ?",
      [archivo_pru, des_pru, tipo_pru, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePrueba = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM prueba WHERE idPrueba = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Prueba no encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
