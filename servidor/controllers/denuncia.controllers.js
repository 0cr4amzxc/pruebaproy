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

// PARA REPORTES:
//--------------------------------------------
export const getDenunciaCartesiano = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT d.idDenuncia as Id, d.tipo_den as tipo, d.fec_den as fecha, d.desc_den as descripcion, dv.nom_vic as Victima, dv.ci_vic, dv.ranEdad_vic, dv.genero_vic, dt.nom_tes as Testigo, dt.genero_tes, da.nom_acu as Acusado, da.ci_acu, da.ranEdad_acu, da.genero_acu, da.dir_acu FROM denuncia d, (SELECT v.nom_vic, v.ci_vic, v.ranEdad_vic, v.genero_vic, vd.idDenuncia FROM victima v, victima_den vd WHERE v.idVictima = vd.idVictima) dv, (SELECT t.nom_tes, t.ci_tes, t.genero_tes, td.idDenuncia FROM testigo t, den_testigo td WHERE t.idTestigo = td.idTestigo) dt, (SELECT a.nom_acu, a.ci_acu, a.ranEdad_acu, a.genero_acu, a.dir_acu, ad.idDenuncia FROM acusado a, acusado_den ad WHERE a.idAcusado = ad.idAcusado) da WHERE d.idDenuncia = dv.idDenuncia AND d.idDenuncia = dt.idDenuncia AND d.idDenuncia = da.idDenuncia AND d.idDenuncia = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Denuncia no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};