import { pool } from "../db.js";

export const getEducativo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT url, desc_edu FROM material as m, educativo as e WHERE m.idMaterial = e.idMaterial AND e.idMaterial = ?;",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Material no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getEducativos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT m.idMaterial, url, desc_edu FROM material as m, educativo as e WHERE m.idMaterial = e.idMaterial;");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEducativo = async (req, res) => {
  try {
    const {
        url, desc_edu
    } = req.body;
    const [result1] = await pool.query("INSERT INTO material (url) VALUES (?)",[url]);
    console.log(result1);

    const [result2] = await pool.query(
        "INSERT INTO educativo (idMaterial, desc_edu) VALUES (?, ?)",
        [result1.insertId, desc_edu]
      );

    console.log(result2);
    res.json({
      id: result1.insertId,
      desc_edu,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEducativo = async (req, res) => {
  try {
    const {
        url, desc_edu
    } = req.body;
    const result1 = await pool.query(
      "UPDATE material SET url = ? WHERE idMaterial = ?;",
      [url, req.params.id]
    );
    const result2 = await pool.query(
        "UPDATE educativo SET desc_edu = ? WHERE idMaterial = ?;",
        [desc_edu, req.params.id]
      );
    res.json({
      desc_edu,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEducativo = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM material WHERE idMaterial = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Material no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};