import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="container p-2 w-full md:w-1/4 flex flex-col gap-2">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Usuarios</div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/newuser">Nuevo Usuario</NavLink>
              </li>
              <li>
                <NavLink to="/dash/listuser">Listar Usuarios</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Eventos</div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/newuser">Nuevo Evento</NavLink>
              </li>
              <li>
                <NavLink to="/dash/listuser">Listar Eventos</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Material</div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/newuser">Nuevo Material</NavLink>
              </li>
              <li>
                <NavLink to="/dash/listuser">Listar Materiales</NavLink>
              </li>
            </ul>
          </div>
        </div>


        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Centros de Ayuda</div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/newuser">Nuevo Centro</NavLink>
              </li>
              <li>
                <NavLink to="/dash/listuser">Listar Centros</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Denuncias</div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/listuser">Listar Denuncias</NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="container p-2 w-full lg:w-3/4">
        <div className="p-2">
            {/* Aqui mostrar el componente */}
            <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
