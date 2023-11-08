import { pool } from "../db.js";

export const getDenTestigos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM den_testigo");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const createDenTest = async (req, res) => {
  try {
    const { idDenuncia, idTestigo } = req.body;
    const [result] = await pool.query(
      "INSERT INTO den_testigo (idDenuncia, idTestigo) VALUES (?, ?)",
      [idDenuncia, idTestigo]
    );

    console.log(result);
    res.json({
        idDenuncia,
        idTestigo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
