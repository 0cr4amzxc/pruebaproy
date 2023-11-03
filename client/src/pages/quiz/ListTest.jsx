import React from "react";

import { Link } from "react-router-dom";

function ListTest() {
  return (
    <>
      <div className="container rounded-2xl p-6 bg-primary text-base-100 ">
        <div className="container flex flex-col items-center sm:items-start gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-checkup-list"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M9 14h.01" />
              <path d="M9 17h.01" />
              <path d="M12 16l1 1l3 -3" />
            </svg>
            <span className="text-lg sm:text-2xl">
              ¿Alguna vez has sido victima de violencia en tu noviazgo?
            </span>
          </div>
          <p className="text-sm sm:text-base">
            El cuestionario se presenta como una herramienta para autoevaluación
            y reflexión, diseñada para ayudar a las personas a reconocer
            posibles señales de violencia en sus relaciones sentimentales.
          </p>
          <div className="card-actions justify-end">
            <Link to="/test/test_1" className="btn btn-accent">ver mas</Link>
          </div>
        </div>
      </div>

      <div className="container rounded-2xl p-6 bg-warning ">
        <div className="container flex flex-col items-center sm:items-start gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-checkup-list"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M9 14h.01" />
              <path d="M9 17h.01" />
              <path d="M12 16l1 1l3 -3" />
            </svg>
            <span className="text-lg sm:text-2xl">
              Fase 1 - ESTO TAMBIÉN ES VIOLENCIA ¡DESPIERTA!
            </span>
          </div>
          <p className="text-sm sm:text-base">
            A través de una serie de preguntas cuidadosamente elaboradas, el
            cuestionario invita a los participantes a reconocer y analizar
            situaciones cotidianas que pueden ser consideradas como violentas,
            pero que comúnmente se pasan por alto.
          </p>
          <div className="card-actions justify-end">
            <Link to="/test/test_2" className="btn btn-accent">ver mas</Link>
          </div>
        </div>
      </div>

      <div className="container rounded-2xl p-6 bg-[#fd823a] ">
        <div className="container flex flex-col items-center sm:items-start gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-checkup-list"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M9 14h.01" />
              <path d="M9 17h.01" />
              <path d="M12 16l1 1l3 -3" />
            </svg>
            <span className="text-lg sm:text-2xl">
              Fase 2 - ¡BUSCA AYUDA! No es tu culpa
            </span>
          </div>
          <p className="text-sm sm:text-base">
            Esta fase se centra en la importancia de buscar ayuda y apoyo cuando
            se ha sido víctima de violencia, y destaca que la responsabilidad de
            la violencia recae en el perpetrador, no en la víctima.
          </p>
          <div className="card-actions justify-end">
            <Link to="/test/test_3" className="btn btn-accent">ver mas</Link>
          </div>
        </div>
      </div>

      <div className="container rounded-2xl p-6 bg-error ">
        <div className="container flex flex-col items-center sm:items-start gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-checkup-list"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M9 14h.01" />
              <path d="M9 17h.01" />
              <path d="M12 16l1 1l3 -3" />
            </svg>
            <span className="text-lg sm:text-2xl">
              Fase 3 - ¡DENUNCIA! ¡ESTÁS EN PELIGRO!
            </span>
          </div>
          <p className="text-sm sm:text-base">
            A través de una serie de preguntas y reflexiones, este cuestionario
            aborda la toma de conciencia sobre la necesidad de denunciar
            situaciones de violencia, ya sea personalmente o en nombre de otros
            que puedan estar en riesgo.
          </p>
          <div className="card-actions justify-end">
            <Link to ="/test/test_4"className="btn btn-accent">ver mas</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListTest;
