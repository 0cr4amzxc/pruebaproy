import { Form, Formik, Field } from "formik";
import { useEvento } from "../contexts/EventoProvider.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EventoCrear() {
  const { createEvento, getEvento } = useEvento();
  const [evento, setEvento] = useState({
          nom_evento: "",
          hora_evento: "",
          fecini_evento: "",
          fecfin_evento: "",
          modalidad: "",
          link: "",
          tipo: "",
  });
  const params = useParams();

  useEffect(() => {
    const unEvento = async () => {
      if (params.id) {
        const evento = await getEvento(params.id);
        setEvento({
          nom_evento: evento.nom_evento,
          hora_evento: evento.hora_evento,
          fecini_evento: evento.fecini_evento,
          fecfin_evento: evento.fecfin_evento,
          modalidad: evento.modalidad,
          link: evento.link,
          tipo: evento.tipo,
        });
        console.log(evento);
      }
    };
    unEvento();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Modificar Evento" : "Crear Evento"}</h1>

      <Formik
        initialValues={evento}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          createEvento(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form>
            <label htmlFor="nom_evento">Nombre del Evento</label>
            <Field
              type="text"
              id="nom_evento"
              name="nom_evento"
              onChange={handleChange}
              onSubmit={handleSubmit}
              values={values.nom_evento}
            />

            <label htmlFor="hora_evento">Hora</label>
            <Field
              type="time"
              id="hora_evento"
              name="hora_evento"
              onChange={handleChange}
              onSubmit={handleSubmit}
              values={values.hora_evento}
            />

            <label htmlFor="fecini_evento">Inicio</label>
            <Field
              type="date"
              id="fecini_evento"
              name="fecini_evento"
              onChange={handleChange}
              onSubmit={handleSubmit}
              values={values.fecini_evento}
            />

            <label htmlFor="fecfin_evento">Fin</label>
            <Field
              type="date"
              id="fecfin_evento"
              name="fecfin_evento"
              onChange={handleChange}
              onSubmit={handleSubmit}
              values={values.fecfin_evento}
            />

            <label htmlFor="modalidad">Modalidad</label>
            <Field
              type="text"
              id="modalidad"
              name="modalidad"
              placeholder="..."
              onChange={handleChange}
              onSubmit={handleSubmit}
              values={values.modalidad}
            />

            <label htmlFor="link">Link</label>
            <Field
              type="url"
              id="link"
              name="link"
              placeholder="https://www.linkdelevento.com"
              onChange={handleChange}
              onSubmit={handleSubmit}
              values={values.link}
            />

            <label htmlFor="tipo">Tipo del Evento</label>
            <Field
              type="text"
              id="tipo"
              name="tipo"
              placeholder="tipo"
              onChange={handleChange}
              onSubmit={handleSubmit}
              values={values.tipo}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EventoCrear;
