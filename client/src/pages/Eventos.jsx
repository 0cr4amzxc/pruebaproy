import React from "react";
import { Link } from "react-router-dom";
import CardEvent from "../components/CardEvent.jsx";

import { useEffect, useState } from "react";
import { getEventRequest } from "../api/events.api.js";

function Eventos() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvent() {
      const response = await getEventRequest();
      setEvents(response.data);
    }

    loadEvent();
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="container p-2 min-w-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Informacion</li>
            <li>Eventos</li>
          </ul>
        </div>

        <h1 className="text-3xl text-center uppercase pb-2">eventos</h1>

        <div className="container grid grid-cols-1 lg:grid-cols-2 min-w-full gap-3 pb-14">
            {events.map((event) => (
              <div key={event.idEvento}>
                <CardEvent event={event} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Eventos;
