import React from "react";
import { Link, useParams } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";

import { useEffect, useState } from "react";
import { getEduRequest } from "../api/material_edu.api.js";


function Edus() {
  const [edus, setEdus] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function loadEdus() {
      const response = await getEduRequest(params.id);
      setEdus(response.data);
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
            <li>
              <Link to="/informate">Informate</Link>
            </li>
            <li>Material Educativo</li>
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
                    <a className="link link-neutral" href={edus.url} target="_blank" rel="noopener noreferrer">{edus.url}</a>
                  </div>
                  <PDFViewer className="min-h-screen rounded-lg" src={edus.url}/>
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
