import { pool } from "../db.js";

export const getCuests = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cuestionario");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCuest = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM cuestionario WHERE idCuestionario = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Cuestionario no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCuest = async (req, res) => {
  try {
    const { nombre, tipo } = req.body;
    const [result] = await pool.query(
      "INSERT INTO cuestionario (nombre, tipo  VALUES (?, ?)",
      [nombre, tipo]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      nombre,
      tipo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCuest = async (req, res) => {
  try {
    const { nombre, tipo } = req.body;
    const result = await pool.query(
      "UPDATE cuestionario SET nombre = ?, tipo = ? WHERE idCuestionario = ?",
      [nombre, tipo, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCuest = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM cuestionario WHERE idCuestionario = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Cuestionario no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
