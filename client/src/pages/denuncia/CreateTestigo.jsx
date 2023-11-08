import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  IconChevronLeft,
  IconPlus,
  IconChevronRight,
} from "@tabler/icons-react";

import { createDenunciaRequest } from "../../api/denuncia.api";

function CreateTestigo() {
  const navigate = useNavigate();
  const params = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate(`/denuncia/addvictima/${params.id}`);
  };

  return (
    <Formik
      initialValues={{
        idDenuncia: "301",
        nom_tes: "",
        ci_tes: "",
        genero_tes: "",
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
          <h1 className="text-3xl text-center uppercase">añadir testigo</h1>
          <fieldset>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="form-control md:col-span-2">
                <label htmlFor="nombre" className="label">
                  <span className="label-text">Nombre Completo</span>
                </label>
                <input
                  type="text"
                  name="nom_tes"
                  placeholder="Carlos Juan Mamani Mamani"
                  onChange={handleChange}
                  className="input input-bordered"
                  value={values.nom_tes}
                  required
                />
              </div>
              <div className="form-control">
              <label htmlFor="nombre" className="label">
                  <span className="label-text">C.I.</span>
                </label>
                <input
                  type="text"
                  name="ci_tes"
                  placeholder="123456 L.P."
                  onChange={handleChange}
                  className="input input-bordered"
                  value={values.ci_tes}
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Genero</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="genero_tes"
                  onChange={handleChange}
                  value={values.genero_tes}
                  required
                >
                  <option defaultValue={"other"}>Seleccionar una opcion</option>
                  <option value={"Femenino"}>Femenino</option>
                  <option value={"Masculino"}>Masculino</option>
                  <option value={"other"}>Otro</option>
                </select>
              </div>
            </div>
          </fieldset>

          <div className="flex justify-center">
            <ul className="steps min-w-full sm:w-4/5">
              <li className="step step-info" data-content="●" />
              <li className="step step-info" data-content="✓" />
              <li className="step step-info" />
              <li className="step" />
            </ul>
          </div>

          <div className="form-control mt-6 grid grid-cols-3 gap-4">
            <Link to={`/denuncia/addprueba/${params.id}`} className="btn btn-primary text-base-100">
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

export default CreateTestigo;
