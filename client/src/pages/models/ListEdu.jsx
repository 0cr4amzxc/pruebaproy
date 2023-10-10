import React from 'react'

import { useEffect, useState } from 'react'
import { getMaterialEduRequest, deleteMaterialEduRequest } from '../../api/material_edu.api'

function ListEdu() {
    const [edus, setEdus] = useState([]);

    async function loadEdus() {
      const response = await getMaterialEduRequest();
      setEdus(response.data);
      console.log(response.data);
    }
  
    useEffect(() => {
      loadEdus();
    }, []);
    
    async function deleteUser(idUsuario) {
      try {
        await deleteUsuarioRequest(idUsuario);
        loadEdus()
      } catch (error) {
        console.error(`Error al eliminar usuario con ID ${idUsuario}:`, error);
      }
    }  
  
    
    return (
      <>
        <h1 className="text-3xl text-center uppercase pb-2">usuarios</h1>
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
                </tr>
              </thead>
              <tbody>
              {edus.map((edu, index) => (
                <tr key={edu.idMaterial}>
                  <th>{index+1}</th>
                  <td>{edu.idMaterial}</td>
                  <td>{edu.url}</td>
                  <td>{edu.desc_edu}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default ListEdu