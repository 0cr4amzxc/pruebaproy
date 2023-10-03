import React from 'react'
import {Link} from 'react-router-dom'
import CardEvent from '../components/CardEvent.jsx'

import { useEffect, useState } from 'react'
import {getEventRequest} from '../api/events.api.js'

function Eventos() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    
    async function loadEvent() {
      const response = await getEventRequest()
      setEvents(response.data)
    }

    loadEvent()
  }, [])


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

      <div>
        {
          events.map(event => (
            <div key={event.idEvento}>
              <CardEvent event={event}/>
            </div>
          ))
        }
      </div>

      </div>
      <div className="container w-full lg:w-1/3 bg-base-200">
      </div>
    </div>
  )
}

export default Eventos