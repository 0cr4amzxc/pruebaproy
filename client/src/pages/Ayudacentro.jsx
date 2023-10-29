import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getCentroRequest } from "../api/centros.api";

function Ayudacentro() {
  const [centro, setCentro] = useState([]);

  useEffect(() => {
    async function loadCentros() {
      const response = await getCentroRequest();
      setCentro(response.data);
    }

    loadCentros();
  }, []);

  return (
    <div className="w-full">
      <div className="container p-2 min-w-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Ayuda</li>
            <li>Centros de Ayuda</li>
          </ul>
        </div>

        <h1 className="text-3xl text-center uppercase pb-2">
          Centros de Ayuda
        </h1>

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-w-full p-5 gap-3">
          {centro.map((centro) => (
            <div className="card w-full bg-base-100 shadow-xl border-2" key={centro.idCentro}>
              <figure className="px-5 pt-5">
                <img
                  src={centro.foto_cna}
                  alt="img-centro"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title">
                  {centro.nomb_cna}
                </h2>
                <p>
                  {centro.desc_cna}
                </p>
                <div className="container">
                  <div className="badge badge-success text-base-100">
                    {centro.categ_cna}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ayudacentro;
