import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className="navbar bg-primary text-base-100">
        <div className="flex-1 ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-primary rounded-box w-52">
              {/* <li><Link to="/">Item 1</Link></li> */}
              <li>
                <a>Información</a>
                <ul className="p-2">
                  <li><Link to="/informate">Informate</Link></li>
                  <li><Link to="/eventos">Eventos</Link></li>
                  <li><Link to="/test">Test</Link></li>
                </ul>
              </li>
              <li>
                <a>Ayuda</a>
                <ul className="p-2">
                  <li><Link to="/ayudacentro">Centros de Ayuda</Link></li>
                  <li><Link to="/denuncia">Denuncia</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">AYDA</Link>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li><Link to="/">Item 1</Link></li> */}
            <li tabIndex={0}>
              <details>
                <summary>Información</summary>
                <ul className="p-2 text-primary">
                  <li><Link to="/informate">Informate</Link></li>
                  <li><Link to="/eventos">Eventos</Link></li>
                  <li><Link to="/test">Test</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Ayuda</summary>
                <ul className="p-2 text-primary">
                  <li><Link to="/ayudacentro">Centros de Ayuda</Link></li>
                  <li><Link to="/denuncia">Denuncia</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex-none ">
          <Link to="/signup" className='btn'>Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar