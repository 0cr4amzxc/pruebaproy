import React from "react";
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="container p-2 w-full md:w-1/4 flex flex-col gap-2">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2"/>
          <div className="collapse-title text-xl font-medium">
            Usuarios
          </div>
          <div className="collapse-content">
            <ul>
                <li><Link to="/dash">Nuevo Usuario</Link></li>
                <li><Link to="/dash">Listar Usuarios</Link></li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Material
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Centros de Ayuda
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Eventos
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Denuncias
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>

      <div className="container p-2 w-full lg:w-3/4">
        <h2>hosj</h2>
      </div>
    </div>
  );
}

export default Dashboard;
