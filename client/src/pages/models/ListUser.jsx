import React from "react";

import { useEffect, useState } from "react";
import { getUserRequest, deleteUsuarioRequest } from "../../api/users.api";


function ListUser() {

  const [users, setUsers] = useState([]);

  async function loadUser() {
    const response = await getUserRequest();
    setUsers(response.data);
  }

  useEffect(() => {
    loadUser();
  }, []);
  
  async function deleteUser(idUsuario) {
    try {
      await deleteUsuarioRequest(idUsuario);
      loadUser()
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
                <th></th>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Ci</th>
                <th>Nickname</th>
                <th>Correo</th>
                <th>Genero</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.idUsuario}>
                  <th>{index+1}</th>
                  <td>{user.idUsuario}</td>
                  <td>{user.nom_usu}</td>
                  <td>{`${user.pat_usu} ${user.mat_usu}`}</td>
                  <td>{user.ci_usu}</td>
                  <td>{user.alias_usu}</td>
                  <td>{user.correo_usu}</td>
                  <td>{user.genero_usu}</td>
                  <td>
                    <button className="btn btn-error text-base-100 text-xs" onClick={() => deleteUser(user.idUsuario)}>eliminar</button>
                  </td>
                  <td>
                    <button className="btn btn-success text-base-100 text-xs">modificar</button>
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

export default ListUser;
