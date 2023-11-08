import { pool } from "../db.js";

export const getTestigos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM testigo");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTestigo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM testigo WHERE idTestigo = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Testigo no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTest = async (req, res) => {
  try {
    const { nom_tes, ci_tes, genero_tes } = req.body;
    const [result] = await pool.query(
      "INSERT INTO testigo (nom_tes, ci_tes, genero_tes) VALUES (?, ?, ?)",
      [nom_tes, ci_tes, genero_tes]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      nom_tes,
      ci_tes,
      genero_tes,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTest = async (req, res) => {
  try {
    const { nom_test, ci_test, genero_test } = req.body;
    const result = await pool.query(
      "UPDATE testigo SET nom_tes = ?, ci_tes = ?, genero_tes = ? WHERE idTestigo = ?",
      [nom_tes, ci_tes, genero_tes, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTest = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM testigo WHERE idTestigo = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Testigo no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
