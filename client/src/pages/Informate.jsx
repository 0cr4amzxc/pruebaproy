import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { getMaterialNormaRequest } from "../api/material_norma.api";
import { getMaterialEduRequest } from "../api/material_edu.api.js";

function Informate() {
  const [normas, setNormas] = useState([]);
  const [edus, setEdus] = useState([]);

  useEffect(() => {
    async function loadNormas() {
      const response = await getMaterialNormaRequest();
      setNormas(response.data);
      console.log(response.data);
    }

    async function loadEdus() {
      const response = await getMaterialEduRequest();
      setEdus(response.data);
      console.log(response.data);
    }

    loadEdus();
    loadNormas();
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="container p-2 w-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Informacion</li>
            <li>Material</li>
          </ul>
        </div>

        <h1 className="uppercase text-3xl text-center">informate</h1>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full m-3 p-2 gap-3">
          {normas.map((norma) => (
            <div
              className="card w-full bg-base-100 shadow-xl border-2"
              key={norma.idMaterial}
            >
              <div className="card-body">
                <h2 className="card-title">⚖️ Material Normativo</h2>
                <p>{norma.desc_nor}</p>
                <div className="card-actions justify-end">
                <NavLink to={`/informate/norma/${norma.idMaterial}`} className="btn btn-primary text-base-100">
                    Leer mas ...
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
          {edus.map((edu) => (
            <div
              className="card w-full bg-base-100 shadow-xl border-2"
              key={edu.idMaterial}
            >
              <div className="card-body">
                <h2 className="card-title">🎓 Material Educativo</h2>
                <p>{edu.desc_edu}</p>
                <div className="card-actions justify-end">
                  <NavLink to={`/informate/edu/${edu.idMaterial}`} className="btn btn-primary text-base-100">
                    Leer mas ...
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Informate;
