import { pool } from "../db.js";

export const getAcusados = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM acusado");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAcusado = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM acusado WHERE idAcusado = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Acusado no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Falta modificar el atributo "foto_acu", para que reciba una imagen
export const createAcu = async (req, res) => {
  try {
    const { nom_acu, ci_acu, ranEdad_acu, genero_acu, dir_acu, foto_acu } =
      req.body;
    const [result] = await pool.query(
      "INSERT INTO acusado (nom_acu, ci_acu, ranEdad_acu, genero_acu, dir_acu, foto_ac VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nom_acu, ci_acu, ranEdad_acu, genero_acu, dir_acu, foto_acu]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      nom_acu,
      ci_acu,
      ranEdad_acu,
      genero_acu,
      dir_acu,
      foto_acu,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateAcu = async (req, res) => {
  try {
    const { nom_acu, ci_acu, ranEdad_acu, genero_acu, dir_acu, foto_acu } =
      req.body;
    const result = await pool.query(
      "UPDATE acusado SET nom_acu = ?, ci_acu = ?, ranEdad_acu = ?, genero_acu = ?, dir_acu = ?, foto_acu = ? WHERE idAcusado = ?",
      [
        nom_acu,
        ci_acu,
        ranEdad_acu,
        genero_acu,
        dir_acu,
        foto_acu,

        req.params.id,
      ]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteAcu = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM acusado WHERE idAcusado = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Acusado no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
