import { pool } from "../db.js";

export const getDenuncias = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM denuncia");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDenuncia = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM denuncia WHERE idDenuncia = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Denuncia no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDenuncia = async (req, res) => {
  try {
    const { idUsuario, tipo_den, fec_den, desc_den } = req.body;

    const [result] = await pool.query(
      "INSERT INTO denuncia (idUsuario, tipo_den, fec_den, desc_den) VALUES (?, ?, ?, ?)",
      [idUsuario, tipo_den, fec_den, desc_den]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      idUsuario,
      tipo_den,
      fec_den,
      desc_den,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDenuncia = async (req, res) => {
  try {
    const { tipo_den, fec_den } = req.body;
    const result = await pool.query(
      "UPDATE denuncia SET tipo_den = ?, fec_den = ? WHERE idDenuncia = ?",
      [tipo_den, fec_den, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteDenuncia = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM denuncia WHERE idDenuncia = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Denuncia no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
