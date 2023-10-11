import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row">
      <div className="container p-2 w-full md:w-1/4 flex flex-col gap-2">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="container flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
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
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              Usuarios
            </div>
          </div>
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
          <div className="collapse-title text-xl font-medium">
            <div className="container flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-calendar-event"
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
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M16 3l0 4"></path>
                <path d="M8 3l0 4"></path>
                <path d="M4 11l16 0"></path>
                <path d="M8 15h2v2h-2z"></path>
              </svg>
              Evento
            </div>
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/newevent">Nuevo Evento</NavLink>
              </li>
              <li>
                <NavLink to="/dash/listevent">Listar Eventos</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="container flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-file"
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
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              </svg>
              Material
            </div>
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/newmaterial">Crear Material</NavLink>
              </li>
              <li>
                <NavLink to="/dash/listedu">
                  Listar Materiales Educativos
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/listnorma">Listar Material Normas</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="container flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-building"
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
                <path d="M3 21l18 0"></path>
                <path d="M9 8l1 0"></path>
                <path d="M9 12l1 0"></path>
                <path d="M9 16l1 0"></path>
                <path d="M14 8l1 0"></path>
                <path d="M14 12l1 0"></path>
                <path d="M14 16l1 0"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
              </svg>
              Centros de Ayuda
            </div>
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/newcenter">Nuevo Centro</NavLink>
              </li>
              <li>
                <NavLink to="/dash/listcenter">Listar Centros</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="container flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-speakerphone"
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
                <path d="M18 8a3 3 0 0 1 0 6"></path>
                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
                <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
              </svg>
              Denuncias
            </div>
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                <NavLink to="/dash/listdenuncia">Listar Denuncias</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container p-2 w-full lg:w-3/4">
        <div className="p-2">
          {/* Aqui mostrar el componente */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
