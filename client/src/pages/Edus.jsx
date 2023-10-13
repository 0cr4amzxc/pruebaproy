import React from "react";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { getEduRequest } from "../api/material_edu.api.js";

function Edus() {
  const [edus, setEdus] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function loadEdus() {
      const response = await getEduRequest(params.id);
      setEdus(response.data);
      console.log(response.data);
    }

    loadEdus();
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
              <p>{edus.desc_edu}</p>
              <div className="mockup-window border bg-base-300">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  {edus.url}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edus;
