function CardEvent({event}) {
    return (
      <div className='flex flex-col lg:flex-row items-center gap-2 m-3 p-2 rounded-xl shadow border '>
          <div className='w-full lg:w-1/2'>
              <img className=' rounded-lg h-full w-auto' src={event.dir_imagen} alt="img"/>
          </div>
          <div className='flex flex-col justify-between gap-5 p-2'>
              <div>
                  <h3 className='text-3xl'>{event.nom_evento}</h3>
                  <p className='text-justify'>{event.descripcion}</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                  <div>
                    <div className="badge badge-success text-base-100">{event.tipo}</div>
                    <div className="badge badge-neutral text-base-100">{event.modalidad}</div>
                  </div>
                  <p className='text-info'>{event.fecini_evento} - {event.hora_evento}</p>
              </div>
          </div>
      </div>
    )
  }
  
  export default CardEvent