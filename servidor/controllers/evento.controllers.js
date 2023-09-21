import { pool } from "../db.js";
export const getEvt = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM evento WHERE id_evento = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getEvts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM evento");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEvt = async (req, res) => {
  try {
    const {
      nom_evento,
      hora_evento,
      fecini_evento,
      fecfin_evento,
      modalidad,
      link,
      tipo,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO evento (nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      nom_evento,
      modalidad,
      link,
      tipo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEvt = async (req, res) => {
  try {
    const {
      nom_evento,
      hora_evento,
      fecini_evento,
      fecfin_evento,
      modalidad,
      link,
      tipo,
    } = req.body;
    const result = await pool.query(
      "UPDATE evento SET nom_evento = ?, hora_evento = ?, fecini_evento = ?, fecfin_evento = ?, modalidad = ?, link = ?, tipo = ? WHERE id_evento = ?",
      [
        nom_evento,
        hora_evento,
        fecini_evento,
        fecfin_evento,
        modalidad,
        link,
        tipo,
        req.params.id,
      ]
    );
    res.json({
      nom_evento,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEvt = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM evento WHERE id_evento = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};