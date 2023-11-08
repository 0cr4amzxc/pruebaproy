import React from "react";
import { Link } from "react-router-dom";

import { useUserContext, useUserToggleContext } from "../userProvider";

function NavBar() {

  const user = useUserContext();

  const userRole = user.rol

  return (
    <>
      <div className="navbar sticky top-0 z-10 drop-shadow-2xl bg-primary text-base-100">
        <div className="flex-1 ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
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
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-primary rounded-box w-52"
            >
              <li>
                <Link to="/dash">Dashboard</Link>
              </li>
              <li>
                <a>Información</a>
                <ul className="p-2">
                  <li>
                    <Link to="/informate">Informate</Link>
                  </li>
                  <li>
                    <Link to="/eventos">Eventos</Link>
                  </li>
                  <li>
                    <Link to="/test">Test</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Ayuda</a>
                <ul className="p-2">
                  <li>
                    <Link to="/ayudacentro">Centros de Ayuda</Link>
                  </li>
                  <li>
                    <Link to="/denuncia">Denuncia</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            AYDA
          </Link>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {userRole === "admin" && (
              <li>
              <Link to="/dash">Dashboard</Link>
            </li>
            )}
            
            <li tabIndex={0}>
              <details>
                <summary>Información</summary>
                <ul className="p-2 text-primary">
                  <li>
                    <Link to="/informate">Informate</Link>
                  </li>
                  <li>
                    <Link to="/eventos">Eventos</Link>
                  </li>
                  <li>
                    <Link to="/test">Test</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Ayuda</summary>
                <ul className="p-2 text-primary">
                  <li>
                    <Link to="/ayudacentro">Centros de Ayuda</Link>
                  </li>
                  <li>
                    <Link to="/denuncia">Denuncia</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex-none ">
          <Link to="/signup" className="btn">
            <label className="hidden lg:block">Log in</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-login-2"
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
              <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
              <path d="M3 12h13l-3 -3"></path> <path d="M13 15l3 -3"></path>{" "}
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
