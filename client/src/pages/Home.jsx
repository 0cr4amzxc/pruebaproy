import React from "react";

function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-[url('https://i.postimg.cc/qq7Cxnzy/banner.jpg')] bg-cover bg-bottom">
        <div className="hero-overlay bg-black bg-opacity-20"></div>
        <div className="hero-content max-w-[20rem] sm:max-w-[80rem] p-8 text-center text-base-300 bg-black rounded-xl bg-opacity-60">
          <div className="max-w-md">
            <div>
              {/* aqui es el logo */}
              <h1 className="mb-5 text-5xl font-bold">Bienvenido a AIDA 👋</h1>
            </div>
            <p className="mb-5 text-justify">
              Estamos aquí para proporcionarte apoyo, recursos y guía en
              momentos difíciles. Juntos, daremos paso hacia un futuro libre de
              violencia. Tu bienestar es nuestra misión.
            </p>
            <button className="btn btn-info bg-base-100">Ver mas</button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Informate 📢</h1>
            <p className="py-6">
            AIDA te brinda información crucial y experta sobre la violencia en todas sus formas: desde consejos prácticos hasta recursos legales y psicológicos. Nuestro objetivo es capacitarte con el conocimiento necesario para tomar decisiones informadas.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img className="card-body" src="https://i.postimg.cc/Hkx119hF/anuncio.jpg" alt="image-anuncio" />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-primary flex flex-col justify-evenly items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-base-100 text-center mt-5">Quieres Informarte 🤔 ?</h1>
        <div className="container flex flex-row justify-between flex-wrap gap-6 m-5 p-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/zDKdt2q0/information.jpg"
                alt="Events"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Eventos</h2>
              <p>Accede a charlas y simposios sobre la violencia. Únete para aprender y crecer juntos en nuestra lucha contra la violencia.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Ver mas</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/gk4xGdYj/eventos.jpg"
                alt="Information"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Informate</h2>
              <p>Lee artículos educativos y normativas para comprender y abordar la violencia. Estamos aquí para tu conocimiento y seguridad.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Ver mas</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/Gmmn1n2c/test.jpg"
                alt="Test"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Test</h2>
              <p>Realiza pruebas para evaluar situaciones de violencia y obtener orientación adecuada.Tu bienestar es nuestra prioridad.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Ver mas</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Ayuda 🤝</h1>
            <p className="py-6">
            Te ofrecemos un espacio seguro para compartir tu experiencia y hacer denuncias online si has sido víctima de violencia. También te brindamos información sobre centros de ayuda cercanos, donde profesionales capacitados están listos para acompañarte, brindarte apoyo y asesoramiento personalizado.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img className="card-body" src="https://i.postimg.cc/5tsHNg4v/ayuda.jpg" alt="ayuda-image" />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-primary flex flex-col justify-evenly items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-base-100 text-center mt-5">Necesitas Ayuda 🤔 ?</h1>
        <div className="container flex flex-row justify-between flex-wrap gap-6 m-5 p-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/htWQCMPb/denuncia.jpg"
                alt="Denuncia"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Denuncia</h2>
              <p>Puedes reportar casos de violencia de forma confidencial y segura. Estamos aquí para apoyarte y tomar medidas para garantizar tu seguridad</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Ver mas</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/h48GDgSx/centro.jpg"
                alt="CentroAyuda"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Centro de Ayuda</h2>
              <p>Encontraras apoyo profesional y recursos para superar la violencia. Juntos, podemos enfrentar la violencia y buscar justicia.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Ver mas</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/ydBTws1j/chatbot.jpg"
                alt="Chatbot"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">ChatBot</h2>
              <p>Nuestro chatbot  ofrece un espacio seguro para expresar tus emociones y recibir apoyo comprensivo. Conversa con nosotros y encuentra orientación emocional.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Ver mas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
