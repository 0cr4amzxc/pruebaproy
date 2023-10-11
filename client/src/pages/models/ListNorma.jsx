import React from 'react'
import { useEffect, useState } from 'react'

import { getMaterialNormaRequest, deleteMaterialNormaRequest } from '../../api/material_norma.api'

import { formatDate } from '../../js/methods.js'

function ListNorma() {
  const [normas, setNormas] = useState([]);

  async function loadNormas() {
    const response = await getMaterialNormaRequest();
    setNormas(response.data);
  }

  useEffect(() => {
    loadNormas();
  }, []);

  async function deleteNorma(idMaterial) {
    try {
      await deleteMaterialNormaRequest(idMaterial);
      loadNormas()
    } catch (error) {
      console.error(`Error al eliminar usuario con ID ${idMaterial}:`, error);
    }
  }

  return (
    <>
      <h1 className="text-3xl text-center uppercase pb-2">Normas</h1>
      <div className="divider"></div>
      <div className="container p-2">
      <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>Material</th>
                <th>Descripcion</th>
                <th>Fuente</th>
                <th>Fecha vigencia</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {normas.map((norma, index) => (
                <tr key={norma.idMaterial}>
                <th>{index + 1}</th>
                <td>{norma.idMaterial}</td>
                <td>{norma.url}</td>
                <td>{norma.desc_nor}</td>
                <td>{norma.fuente_nor}</td>
                <td>{formatDate(norma.vigencia_nor)}</td>
                <td>
                  <button
                    className="btn btn-error text-base-100 text-xs"
                    onClick={() => deleteNorma(norma.idMaterial)}
                  >
                    eliminar
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListNorma