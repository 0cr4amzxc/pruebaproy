import React from 'react'

function CardEvent() {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-2 m-3 p-2 rounded-xl shadow border '>
        <div className='w-full lg:w-1/2'>
            <img className=' rounded-lg h-full w-auto' src="https://cdn2.hubspot.net/hubfs/4223303/organizar-eventos-academicos.jpg" alt="img"/>
        </div>
        <div className='flex flex-col justify-between gap-5 p-2'>
            <div>
                <h3 className='text-3xl'>Titulo</h3>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit nisi laborum impedit voluptatem at placeat distinctio. Inventore est aliquid voluptate recusandae possimus veniam exercitationem.</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div className="badge badge-secondary text-base-100">Tipo</div>
                <p className='text-info'>dd/mm/yy - 23:59</p>
            </div>
        </div>
    </div>
  )
}

export default CardEvent