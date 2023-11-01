import React from "react";
import { Link, useParams } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";

import { useEffect, useState } from "react";
import { getNormaRequest } from "../api/material_norma.api";

import { formatDate } from "../js/methods.js";

function Normas() {
  const [normas, setNormas] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function loadNormas() {
      const response = await getNormaRequest(params.id);
      setNormas(response.data);
      console.log(response.data);
    }

    loadNormas();
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="container p-2 min-w-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/informate">Informate</Link>
            </li>
            <li>Material Norma</li>
          </ul>
        </div>

        <h1 className="uppercase text-3xl text-center">informate</h1>
        <div className="divider"></div>
        <div className="container min-w-full">
          <div
            className="card w-full bg-base-100 shadow-xl"
            key={params.id}
          >
            <div className="card-body flex flex-col lg:flex-row">
              <div className="container border-2 border-neutral rounded-lg p-3 max-w-full lg:w-1/4 h-fit">
                <h2 className="card-title">⚖️ Material Normativo</h2>
                <ul>
                  <li>{normas.desc_nor}</li>
                  <li>Vigencia: {formatDate(normas.vigencia_nor)}</li>
                  <li>
                    Bibliografia:{" "}
                    <a className="link text-primary" href={normas.fuente_nor}>
                      {normas.fuente_nor}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mockup-window border bg-base-300 max-w-full lg:w-3/4">
                <div className="flex flex-col justify-center px-4 py-2 gap-2 bg-base-200">
                  <div className="alert">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-file-type-pdf text-error"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                      <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                      <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
                      <path d="M17 18h2"></path>
                      <path d="M20 15h-3v6"></path>
                      <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path>
                    </svg>
                    <a
                      className="link link-neutral"
                      href={normas.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {normas.url}
                    </a>
                  </div>
                  <PDFViewer
                    className="min-h-screen rounded-lg"
                    src={normas.url}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Normas;
