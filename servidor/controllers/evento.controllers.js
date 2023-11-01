import { pool } from "../db.js";

export const getEvt = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM evento WHERE idEvento = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getEvts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM evento");
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEvt = async (req, res) => {
  try {
    const {
      //idAdmin,//agragando para la ralacion
      nom_evento,
      hora_evento,
      fecini_evento,
      fecfin_evento,
      modalidad,
      link,
      descripcion,
      tipo,
      dir_imagen, //ruta imagencargada(aun por ver)
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO evento (nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen]
    );

    console.log(result);
    res.status(201).json({
      id: result.insertId,
      nom_evento,
      hora_evento,
      fecini_evento,
      fecfin_evento,
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
      descripcion,
      dir_imagen,
    } = req.body;
    const result = await pool.query(
      "UPDATE evento SET nom_evento = ?, hora_evento = ?, fecini_evento = ?, fecfin_evento = ?, modalidad = ?, link = ?, tipo = ?, descripcion =?, dir_imagen = ? WHERE idEvento = ?",
      [
        nom_evento,
        hora_evento,
        fecini_evento,
        fecfin_evento,
        modalidad,
        link,
        tipo,
        descripcion,
        dir_imagen,
        req.params.id,
      ]
    );
    res.status(200).json({
      nom_evento,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEvt = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM evento WHERE idEvento = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    return res.status(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const imgEvt = async(req , res)=>{
  console.log(req.files);
};