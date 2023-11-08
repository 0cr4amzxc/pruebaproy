import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  IconChevronLeft,
  IconPlus,
  IconChevronRight,
} from "@tabler/icons-react";

import { createDenunciaRequest } from "../../api/denuncia.api";

function CreateAcusado() {
  const navigate = useNavigate();
  const params = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate(`/denuncia`);
  };
  return (
    <Formik
      initialValues={{
        idDenuncia: params.id,
        nom_acu: "",
        ci_acu: "",
        ranEdad_acu: "",
        genero_acu: "",
        dir_acu: "",
        foto_acu: "",
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
          <h1 className="text-3xl text-center uppercase">añadir acusado</h1>
          <fieldset>
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div className="form-control md:col-span-3">
                <label htmlFor="nombre" className="label">
                  <span className="label-text">Nombre del Acusado</span>
                </label>
                <input
                  type="text"
                  name="nom_acu"
                  placeholder="Carlos Juan Mamani Mamani"
                  onChange={handleChange}
                  className="input input-bordered"
                  value={values.nom_acu}
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="nombre" className="label">
                  <span className="label-text">C.I.</span>
                </label>
                <input
                  type="text"
                  name="ci_acu"
                  placeholder="123456 L.P."
                  onChange={handleChange}
                  className="input input-bordered"
                  value={values.ci_acu}
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Genero</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="genero_acu"
                  onChange={handleChange}
                  value={values.genero_acu}
                  required
                >
                  <option defaultValue={"other"}>Seleccionar una opcion</option>
                  <option value={"Femenino"}>Femenino</option>
                  <option value={"Masculino"}>Masculino</option>
                  <option value={"other"}>Otro</option>
                </select>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Rango aproximado de edad</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="ranEdad_acu"
                  onChange={handleChange}
                  value={values.ranEdad_acu}
                  required
                >
                  <option defaultValue={"other"}>Seleccionar una opcion</option>
                  <option value={"menor_edad"}>{" < 18 años"}</option>
                  <option value={"juvenil"}>{" 18 - 25 años"}</option>
                  <option value={"adulto"}>{" 25 - 60 años"}</option>
                  <option value={"adulto_mayor"}>{" > 60 años"}</option>
                </select>
              </div>
              <div className="form-control md:col-span-3">
                <label htmlFor="nombre" className="label">
                  <span className="label-text">Direccion del acusado</span>
                </label>
                <input
                  type="text"
                  name="dir_acu"
                  placeholder="Carlos Juan Mamani Mamani"
                  onChange={handleChange}
                  className="input input-bordered"
                  value={values.dir_acu}
                />
              </div>
              <div className="form-control col-span-full">
                <label htmlFor="nickname" className="label">
                  <span className="label-text">Adjuntar foto del acusado</span>
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
            </div>
          </fieldset>

          <div className="flex justify-center">
            <ul className="steps min-w-full sm:w-4/5">
              <li className="step step-info" data-content="●" />
              <li className="step step-info" data-content="●" />
              <li className="step step-info" data-content="●" />
              <li className="step step-info" />
            </ul>
          </div>

          <div className="form-control mt-6 grid grid-cols-3 gap-4">
            <Link
              to={`/denuncia/addtestigo/${params.id}`}
              className="btn btn-primary text-base-100"
            >
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
              <span className="hidden sm:block">Finalizar</span>
              <IconChevronRight />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateAcusado;
