import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  IconChevronLeft,
  IconPlus,
  IconChevronRight,
} from "@tabler/icons-react";

import { createDenunciaRequest } from "../../api/denuncia.api";

function CreatePrueba() {
  const navigate = useNavigate();
  const params = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate(`/denuncia/addtestigo/${params.id}`);
  };

  return (
    <Formik
      initialValues={{
        idDenuncia: "301",
        archivo_pru: "",
        tipo_pru: "",
        des_pru: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        try {
          //const response = await createDenunciaRequest(values);
          //console.log(response);
          window.alert("Se añadio con exito");
          resetForm();
          setFormSubmitted(true);
          //navigate(`/denuncia/addprueba/${response.data.id}`);
        } catch (error) {
          window.alert("Algo salio mal");
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Form
          className="card-body px-4 sm:px-6 lg:p-8 card flex-shrink-0 w-full lg:w-3/4 shadow-2xl bg-base-100"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-center uppercase">añadir prueba</h1>
          <fieldset>
            <div className="container grid grid-cols-1 gap-3">
              <div className="form-control">
                <label htmlFor="nickname" className="label">
                  <span className="label-text">Adjuntar prueba</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  name="archivo_pru"
                  onChange={handleChange}
                  value={values.archivo_pru}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tipo de prueba</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="tipo_pru"
                  onChange={handleChange}
                  value={values.tipo_pru}
                  required
                >
                  <option defaultValue={"other"}>Seleccionar una opcion</option>
                  <option value={"comunicacion_digital"}>
                    Comunicaciones digitales
                  </option>
                  <option value={"multimedia"}>Archivos multimedia</option>
                  <option value={"retro_transacciones"}>
                    Datos de registro y transacciones
                  </option>
                  <option value={"files"}>Archivos y documentos</option>
                  <option value={"other"}>Otro</option>
                </select>
              </div>
              <div className="form-control col-span-full">
                <label htmlFor="nickname" className="label">
                  <span className="label-text">
                    Descripcion de la prueba adjuntada
                  </span>
                </label>
                <textarea
                  type="text"
                  name="des_pru"
                  placeholder="Escriba detalladamente y de forma clara la descripcion de la prueba adjuntada"
                  onChange={handleChange}
                  className="input input-bordered textarea-primary p-2 min-h-[5rem]"
                  value={values.des_pru}
                  required
                />
              </div>
            </div>
          </fieldset>

          <div className="flex justify-center">
            <ul className="steps min-w-full sm:w-4/5">
              <li className="step step-info" data-content="✓" />
              <li className="step step-info" />
              <li className="step" />
              <li className="step" />
            </ul>
          </div>

          <div className="form-control mt-6 grid grid-cols-3 gap-4">
            <Link to="/denuncia" className="btn btn-primary text-base-100">
              <IconChevronLeft />
              <span className="hidden sm:block">Anterior</span>
            </Link>
            <button className="btn btn-primary text-base-100" type="submit">
              <IconPlus className="block sm:hidden" />
              <span className="hidden sm:block">Añadir mas</span>
            </button>
            <button
              className="btn btn-primary text-base-100"
              type="button"
              onClick={() => {
                handleSubmit();
                handleNext();
              }}
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

export default CreatePrueba;
