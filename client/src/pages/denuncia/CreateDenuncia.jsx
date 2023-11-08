import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { createDenunciaRequest } from "../../api/denuncia.api";

function CreateDenuncia() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        idUsuario: "301",
        tipo_den: "",
        fec_den: "",
        desc_den: "",
      }}
      onSubmit={async (values, actions) => {
        console.log(values);
        try {
          const response = await createDenunciaRequest(values);
          console.log(response);
          window.alert(response.data.message)
          navigate(`/denuncia/addprueba/${response.data.id}`);
          actions.resetForm();
        } catch (error) {
          window.alert("Algo salio mal");
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values}) => (
        <Form
          className="card-body px-4 sm:px-6 lg:p-8 card flex-shrink-0 w-full lg:w-3/4 shadow-2xl bg-base-100"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-center uppercase">
            formulario de registro
          </h1>
          <fieldset>
            <div className="container grid grid-cols-1 lg:grid-cols-2  gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tipo de violencia</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="tipo_den"
                  onChange={handleChange}
                  value={values.tipo_den}
                  required
                >
                  <option>
                    Seleccionar una opcion
                  </option>
                  <option value={"fisica"}>Violencia fisica</option>
                  <option value={"psicologia"}>Violencia psicologia</option>
                  <option value={"emocional"}>Violencia emocional</option>
                  <option value={"sexual"}>Violencia sexual</option>
                  <option value={"verbal"}>Violencia verbal</option>
                  <option value={"economia"}>Violencia economia</option>
                  <option value={"institucional"}>
                    Violencia institucional
                  </option>
                  <option value={"genero"}>Violencia de genero</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="fechaDenuncia" className="label">
                  <span className="label-text">Fecha del suceso</span>
                </label>
                <input
                  type="date"
                  name="fec_den"
                  onChange={handleChange}
                  className="input input-bordered"
                  value={values.fec_den}
                  required
                />
              </div>
              <div className="form-control col-span-full">
                <label htmlFor="nickname" className="label">
                  <span className="label-text">Declaracion escrita</span>
                </label>
                <textarea
                  type="text"
                  name="desc_den"
                  placeholder="Escriba detalladamente los sucesos su denuncia procure proporcionar detalles completos y precisos sobre los eventos que denuncia."
                  onChange={handleChange}
                  className="input input-bordered textarea-primary p-2 min-h-[10rem]"
                  value={values.desc_den}
                  required
                />
              </div>
            </div>
          </fieldset>

          <div className="my-4 flex justify-center">
            <ul className="steps min-w-full sm:w-4/5">
              <li className="step step-info" />
              <li className="step" />
              <li className="step" />
              <li className="step" />
            </ul>
          </div>

          <div className="form-control mt-6 grid grid-cols-3 gap-4">
            <button className="btn btn-primary text-base-100 hidden">
              <IconChevronLeft />
              <span className="hidden sm:block">Anterior</span>
            </button>
            <button
              className="btn btn-primary text-base-100 col-start-2"
              type="submit"
            >
              <span className="hidden sm:block">Siguiente</span>
              <IconChevronRight />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateDenuncia;
