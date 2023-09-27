import { pool } from "../db.js";

export const getContsEmer = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM contactoemergencia");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getContEmer = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM contactoemergencia WHERE idContacto = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Contacto no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCont = async (req, res) => {
  try {
    const { nom_cont, tel_cont } = req.body;
    const [result] = await pool.query(
      "INSERT INTO contactoemergencia (nom_cont, tel_cont  VALUES (?, ?)",
      [nom_cont, tel_cont]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      nom_cont,
      tel_cont,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCont = async (req, res) => {
  try {
    const { nom_cont, tel_cont } = req.body;
    const result = await pool.query(
      "UPDATE contactoemergencia SET nom_cont = ?, tel_cont = ? WHERE idContacto = ?",
      [nom_cont, tel_cont, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCont = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM contactoemergencia WHERE idContacto = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Contacto no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
