import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IconAlertTriangleFilled } from "@tabler/icons-react";

function Denuncia() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="container p-2 min-w-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Ayuda</li>
            <li>Denuncia</li>
          </ul>
        </div>

        <h1 className="text-3xl text-center uppercase pb-2">
          realizar denuncia
        </h1>
        <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center min-w-full px-2 py-5 sm:px-8 sm:py-6">
          <div className="container flex flex-col items-center gap-3 w-full lg:w-9/12 bg-base-200 p-4 lg:p-8 rounded-xl">
            <Outlet />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="container w-full lg:w-3/12 rounded-2xl bg-error text-base-100">
            <div className="container p-6">
              <div className="flex flex-row items-center justify-center gap-3">
                <IconAlertTriangleFilled
                  className="text-base-100"
                  stroke={1.8}
                  size={45}
                />
                <p className="text-xl text-center font-bold uppercase">
                  ¡Denunciar no es un juego!
                </p>
              </div>
              <p className="text-sm text-justify">
                ¿Sabías que denunciar es un acto serio y poderoso? La denuncia
                es una herramienta crucial para la justicia y la seguridad de
                nuestra comunidad.
                <br />
                Presentar una denuncia no es un juego, es una responsabilidad
                crucial para la justicia y la seguridad de nuestra comunidad. Tu
                voz marca la diferencia. Actúa con valentía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Denuncia;
