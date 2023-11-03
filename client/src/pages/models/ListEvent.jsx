import React from "react";

import { useEffect, useState } from "react";
import { getEventRequest, deleteEventRequest } from "../../api/events.api";

import { formatDate, reduceText } from "../../js/methods.js";

function ListEvent() {
  const [events, setEvents] = useState([]);

  async function loadEvent() {
    const response = await getEventRequest();
    setEvents(response.data);
  }

  useEffect(() => {
    loadEvent();
  }, []);

  async function deleteEvent(idEvento) {
    try {
      await deleteEventRequest(idEvento);
      loadEvent();
    } catch (error) {
      console.error(`Error al eliminar usuario con ID ${idEvento}:`, error);
    }
  }

  return (
    <>
      <h1 className="text-3xl text-center uppercase pb-2">eventos</h1>
      <div className="divider"></div>
      <div className="container p-2">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>Imagen</th>
                <th>id</th>
                <th>Nombre</th>
                <th>Hora</th>
                <th>Fechas</th>
                <th>Modalidad</th>
                <th>Enlace</th>
                <th>Tipo</th>
                <th>Descripcion</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event.idEvento}>
                  <th>{index + 1}</th>
                  <td>
                    <figure className="w-24 h-auto p-1 border-2 border-primary rounded-lg">
                      <img
                        className="rounded-md"
                        src={event.dir_imagen}
                        alt={event.idEvento}
                      />
                    </figure>
                  </td>
                  <td>{event.idEvento}</td>
                  <td>{reduceText(event.nom_evento, 3)}</td>
                  <td>{event.hora_evento}</td>
                  <td>{`${formatDate(event.fecini_evento)}  ${formatDate(
                    event.fecfin_evento
                  )}`}</td>
                  <td>{event.modalidad}</td>
                  <td>
                    <a className="link link-neutral" href={event.link}>
                      {event.link}
                    </a>
                  </td>
                  <td>{event.tipo}</td>
                  <td>{reduceText(event.descripcion, 5)}</td>
                  <td>
                    <button
                      className="btn btn-error text-base-100 text-xs"
                      onClick={() => deleteEvent(event.idEvento)}
                    >
                      eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListEvent;
