import { Form, Formik, Field } from "formik";
import {createEventoRequest} from '../api/evento.api.ts';

function EventoCrear() {
  return (
    <div>
      <Formik
        initialValues={{
            nom_evento: "",
            hora_evento: "",
            fecini_evento: "",
            fecfin_evento: "",
            modalidad: "",
            link: "",
            tipo: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createEventoRequest(values);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form>
            <label htmlFor="nom_evento">Nombre del Evento</label>
            <Field
              type="text"
              id="nom_evento"
              name="nom_evento"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            <label htmlFor="hora_evento">Hora</label>
            <Field
              type="time"
              id="hora_evento"
              name="hora_evento"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            <label htmlFor="fecini_evento">Inicio</label>
            <Field
              type="date"
              id="fecini_evento"
              name="fecini_evento"
              placeholder="yyyy-mm-dd"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            <label htmlFor="fecfin_evento">Fin</label>
            <Field
              type="date"
              id="fecfin_evento"
              name="fecfin_evento"
              placeholder="yyyy-mm-dd"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            <label htmlFor="modalidad">Modalidad</label>
            <Field
              type="text"
              id="modalidad"
              name="modalidad"
              placeholder="..."
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            <label htmlFor="link">Link</label>
            <Field
              type="url"
              id="link"
              name="link"
              placeholder="https://www.linkdelevento.com"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            <label htmlFor="tipo">Tipo del Evento</label>
            <Field
              type="text"
              id="tipo"
              name="tipo"
              placeholder="tipo"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EventoCrear;
