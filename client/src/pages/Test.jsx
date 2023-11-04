import React from "react";
import { Link, Outlet } from "react-router-dom";

function Test() {
  const rule_parts = [
    "Chantajear",
    "Mentir, Engañar",
    "Ignorar, Ley del hielo",
    "Celar",
    "Culpabilizar",
    "Descalificar",
    "Ridicularizar, ofender",
    "Humillar en publico",
    "Intimidar, amenazar",
    "Controlar, prohibir",
    "Destruir articulos personales",
    "Manosear",
    "Caricias agresivas",
    "Golpear (jugando)",
    "Pellizcar, arañar",
    "Empujar, jalonear",
    "Cachetear",
    "Patear",
    "Encerrar, aislar",
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="container p-2 min-w-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Informacion</li>
            <li>Eventos</li>
          </ul>
        </div>

        <h1 className="text-3xl text-center uppercase pb-2">Test</h1>
        <div className="container flex flex-col lg:flex-row items-start justify-center min-w-full px-8 py-6">
          <div className="flex flex-col gap-3">
            <Outlet />
          </div>

          <div className="divider lg:divider-horizontal"></div>
          <div className="container w-full lg:w-5/12 rounded-2xl bg-gradient-to-b from-warning from-30% to-error to-85%">
            <div className="container p-6">
              <h4 className="text-2xl text-center font-bold uppercase">
                Violentómetro
              </h4>
              <p className="text-sm text-justify">
                Un <span className="font-bold">Violentómetro</span> contiene una
                clasificación de las diversas manifestaciones de violencia en la
                pareja, un material gráfico y didáctico en forma de regla que
                consiste en visualizar las diferentes manifestaciones de
                violencia que se encuentran ocultas en la vida cotidiana y que
                muchas veces se confunden o desconocen.
              </p>
            </div>
            <div className="w-full pb-6">
              {rule_parts.map((part, index) => (
                <div className="flex flex-row pl-6 justify-between">
                  <div className="">{part}</div>
                  <div className="flex flex-row gap-3 font-bold items-center">
                    {index}
                    <div className="bg-black h-1 w-10 rounded-l"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
