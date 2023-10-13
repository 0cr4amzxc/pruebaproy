import React from 'react'

import { useEffect, useState } from 'react'
import {getDenunciaRequest, deleteDenunciaRequest} from '../../api/denuncia.api'

import {formatDate} from '../../js/methods.js'

function ListDenuncia() {
  const [denuncias, setDenuncias] = useState([]);

  async function loadDenuncia() {
    const response = await getDenunciaRequest();
    setDenuncias(response.data);
  }

  useEffect(() => {
    loadDenuncia();
  }, []);

  async function deleteDenuncia(idDenuncia) {
    try {
      await deleteDenunciaRequest(idDenuncia);
      loadDenuncia()
    } catch (error) {
      console.error(`Error al eliminar usuario con ID ${idDenuncia}:`, error);
    }
  }

  return (
    <>
      <h1 className="text-3xl text-center uppercase pb-2">denuncias</h1>
      <div className="divider"></div>
      <div className="container p-2">
      <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {denuncias.map((denuncia, index) => (
                <tr key={denuncia.idDenuncia}>
                  <th>{index+1}</th>
                  <td>{denuncia.idDenuncia}</td>
                  <td>{denuncia.tipo_den}</td>
                  <td>{formatDate(denuncia.fec_den)}</td>
                  <td>
                    <button className="btn btn-error text-base-100 text-xs" onClick={() => deleteDenuncia(denuncia.idDenuncia)}>eliminar</button>
                  </td>
                  <td>
                    <button className="btn btn-success text-base-100 text-xs">modificar</button>
                  </td>
                  <td>
                    <button className="btn btn-neutral text-base-100 text-xs">ver mas</button>
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

export default ListDenuncia