import React from 'react'
import {Link} from 'react-router-dom'
import Cardevent from '../components/CardEvent.jsx'

function Eventos() {
  return (
    <div className='w-full flex flex-col lg:flex-row'>
      <div className="container p-2 w-full lg:w-2/3">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li>Informacion</li> 
            <li>Eventos</li>
          </ul>
        </div>

      <Cardevent/>
      <Cardevent/>
      <Cardevent/>
      <Cardevent/>

      </div>
      <div className="container w-full lg:w-1/3 bg-blue-600">
        <h3>Article</h3>
      </div>
    </div>
  )
}

export default Eventos