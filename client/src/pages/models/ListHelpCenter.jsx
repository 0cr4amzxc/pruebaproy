import React from "react";

import { useEffect, useState } from "react";
import { getCentroRequest, deleteCentroRequest } from "../../api/centros.api";

function ListHelpCenter() {
  const [centros, setCentros] = useState([]);

  async function loadCentro() {
    const response = await getCentroRequest();
    setCentros(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    loadCentro();
  }, []);

  async function deleteCentro(idCentro) {
    try {
      await deleteCentroRequest(idCentro);
      loadCentro();
    } catch (error) {
      console.error(`Error al eliminar usuario con ID ${idCentro}:`, error);
    }
  }

  return (
    <>
      <h1 className="text-3xl text-center uppercase pb-2">Centros de Ayuda</h1>
      <div className="divider"></div>
      <div className="container p-2">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Direccion</th>
                <th>Descripcion</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {centros.map((centro, index) => (
                <tr key={centro.idCentro}>
                  <th>{index + 1}</th>
                  <td>{centro.idCentro}</td>
                  <td>
                    <figure className="w-24 h-auto p-1 border-2 border-primary rounded-lg">
                      <img
                        className="rounded-md"
                        src={centro.foto_cna}
                        alt={centro.idCentro}
                      />
                    </figure>
                  </td>
                  <td>
                    {centro.nomb_cna}
                  </td>
                  <td>
                    {centro.categ_cna}
                  </td>
                  <td>
                    {centro.dir_cna}
                  </td>
                  <td>
                    {centro.desc_cna}
                  </td>
                  <td>
                    <button className="btn btn-error text-base-100 text-xs" onClick={() => deleteCentro(centro.idCentro)}>eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListHelpCenter;
