import { pool } from "../db.js";

export const getVictimas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM victima");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVictima = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM victima WHERE idVictima = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Victima no encontrada" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createVictima = async (req, res) => {
  try {
    const { nom_vic, ci_vic, ranEdad_vic, genero_vic } = req.body;
    const [result] = await pool.query(
      "INSERT INTO victima (nom_vic, ci_vic, ranEdad_vic, genero_vic) VALUES (?, ?, ?, ?)",
      [nom_vic, ci_vic, ranEdad_vic, genero_vic]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      nom_vic,
      ci_vic,
      ranEdad_vic,
      genero_vic,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateVictima = async (req, res) => {
  try {
    const { nom_vic, ci_vic, ranEdad_vic, genero_vic } = req.body;
    const result = await pool.query(
      "UPDATE victima SET nom_vic = ?, ci_vic = ?, ranEdad_vic = ?, genero_vic = ? WHERE idVictima = ?",
      [nom_vic, ci_vic, ranEdad_vic, genero_vic, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteVictima = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM victima WHERE idVictima = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Victima no encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
