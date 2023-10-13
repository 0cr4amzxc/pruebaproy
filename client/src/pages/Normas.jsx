import React from "react";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { getNormaRequest } from "../api/material_norma.api";

import {formatDate} from '../js/methods.js'

function Normas() {
  const [normas, setEdus] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function loadNormas() {
      const response = await getNormaRequest(params.id);
      setEdus(response.data);
      console.log(response.data);
    }

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
        <div className="divider"></div>
        <div className="container w-full">
          <div
            className="card w-full bg-base-100 shadow-xl border-2"
            key={params.id}
          >
            <div className="card-body">
              <h2 className="card-title">🎓 Material Educativo</h2>
              <p>{normas.desc_nor}</p>
              
              <div className="mockup-window border bg-base-300">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  {normas.url}
                </div>
              </div>
              <p>Vigencia:{formatDate(normas.vigencia_nor)}</p>
              <p>Bibliografia: <a className="link text-primary" href={normas.fuente_nor}>{normas.fuente_nor}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Normas;
