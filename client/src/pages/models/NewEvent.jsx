import { Form, Formik } from "formik";

import { createEventRequest } from "../../api/events.api";

function NewEvent() {
  return (
    <>
      <h1 className="text-3xl text-center uppercase">crear evento</h1>
      <div className="divider"></div>
      <Formik
        initialValues={{
          nom_evento: "",
          hora_evento: "",
          fecini_evento: "",
          fecfin_evento: "",
          modalidad: "",
          link: "",
          tipo: "",
          descripcion: "",
          dir_imagen: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createEventRequest(values);
            window.alert("Se añadio con exito");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form className="card-body p-2" onSubmit={handleSubmit}>
            <fieldset>
              <div className="container grid grid-cols-1 lg:grid-cols-3  gap-3">
                <div className="form-control">
                  <label htmlFor="nombreEvento" className="label">
                    <span className="label-text">Nombre de Evento</span>
                  </label>
                  <input
                    type="text"
                    name="nom_evento"
                    placeholder="Concientizacion sobre la violencia"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="fechaEventoIn" className="label">
                    <span className="label-text">Fecha de Inicio</span>
                  </label>
                  <input
                    type="date"
                    name="fecini_evento"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="fechaEventoFin" className="label">
                    <span className="label-text">Fecha de Finalizacion</span>
                  </label>
                  <input
                    type="date"
                    name="fecfin_evento"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="horaEvento" className="label">
                    <span className="label-text">Hora de Evento</span>
                  </label>
                  <input
                    type="time"
                    name="hora_evento"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="tipoEvento" className="label">
                    <span className="label-text">Tipo</span>
                  </label>
                  <input
                    type="text"
                    name="tipo"
                    placeholder="Conferencia"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Modalidad</span>
                  </label>
                  <select
                    className="select select-bordered w-full lg:max-w-xs"
                    name="modalidad"
                    onChange={handleChange}
                    required
                  >
                    <option disabled selected>
                      Seleccionar una opcion
                    </option>
                    <option>Vitual</option>
                    <option>Presencial</option>
                  </select>
                </div>
                <div className="form-control">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Enlace</span>
                  </label>
                  <input
                    type="text"
                    name="link"
                    placeholder="www.siguenos.com"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Descripcion</span>
                  </label>
                  <textarea
                    type="text"
                    name="descripcion"
                    placeholder="Escribe mas detalles sobre el evento aqui"
                    onChange={handleChange}
                    className="input input-bordered textarea-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Imagen del Evento</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                    name="dir_imagen"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-base-100" type="submit">
                Crear cuenta
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default NewEvent;
