import React from "react";
import { Link } from "react-router-dom";

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
      <div className="container p-2 w-full lg:w-2/3">
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
        <div>
          {normas.map((norma) => (
            <div
              className="card w-96 bg-base-100 shadow-xl border-2"
              key={norma.idMaterial}
            >
              <div className="card-body">
                <h2 className="card-title">Material Normativo</h2>
                <p>{norma.desc_nor}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary text-base-100">
                    Leer mas ...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container w-full lg:w-1/3 bg-base-200"></div>
    </div>
  );
}

export default Informate;
