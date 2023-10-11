import { pool } from "../db.js";

export const getCentros = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM centroayuda");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCentro = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM centroayuda WHERE idCentro = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Centro no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCentro = async (req, res) => {
  try {
    const { foto_cna, nombre_cna, categoria_cna, dir_cna, desc_cna } = req.body;
    const [result] = await pool.query(
      "INSERT INTO centroayuda (foto_cna, nombre_cna, categoria_cna, dir_cna, desc_cna VALUES (?, ?, ?, ?, ?)",
      [foto_cna, nombre_cna, categoria_cna, dir_cna, desc_cna]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      foto_cna,
      nombre_cna,
      categoria_cna,
      dir_cna,
      desc_cna,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCentro = async (req, res) => {
  try {
    const { foto_cna, nombre_cna, categoria_cna, dir_cna, desc_cna } = req.body;
    const result = await pool.query(
      "UPDATE centroayuda SET foto_cna = ?, nombre_cna = ?, categoria_cna = ?, dir_cna = ?, desc_cna = ? WHERE idCentro = ?",
      [foto_cna, nombre_cna, categoria_cna, dir_cna, desc_cna, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const deleteCentro = async (req, res) => {
    try {
      const [result] = await pool.query(
        "DELETE FROM centroayuda WHERE idCentro = ?",
        [req.params.id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Centro no encontrado" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
