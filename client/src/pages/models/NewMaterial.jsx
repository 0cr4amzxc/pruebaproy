import { Form, Formik } from "formik";

import { createMaterialEduRequest } from "../../api/material_edu.api";
import { createMaterialNormaRequest } from "../../api/material_norma.api";

function NewMaterialEdu() {
  return (
    <>
      <h1 className="text-3xl text-center uppercase">
        crear material educativo
      </h1>
      <div className="divider"></div>
      <Formik
        initialValues={{
          url: "",
          desc_edu: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createMaterialEduRequest(values);
            window.alert("Se añadio con exito");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form className="card-body p-2" onSubmit={handleSubmit}>
            <fieldset>
              <div className="container grid grid-cols-1  gap-3">
                <div className="form-control lg:col-span-2">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Archivo</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    name="url"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control col-span-full">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Descripcion</span>
                  </label>
                  <textarea
                    type="text"
                    name="desc_edu"
                    placeholder="Escribe mas detalles sobre el material educativo"
                    onChange={handleChange}
                    className="input input-bordered textarea-primary p-2 min-h-[5rem]"
                    required
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-base-100" type="submit">
                crear material
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="divider">OR</div>

      <h1 className="text-3xl text-center uppercase">crear material norma</h1>
      <div className="divider"></div>
      <Formik
        initialValues={{
          url: "",
          desc_nor: "",
          fuente_nor: "",
          vigencia_nor: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createMaterialNormaRequest(values);
            window.alert("Se añadio con exito");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form className="card-body p-2" onSubmit={handleSubmit}>
            <fieldset>
              <div className="container grid grid-cols-1 lg:grid-cols-2  gap-3">
              <div className="form-control ">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Fuente</span>
                  </label>
                  <input
                    type="text"
                    name="fuente_nor"
                    placeholder="www.fuentedelanorma.com"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="fechaEventoIn" className="label">
                    <span className="label-text">Fecha de Vigencia</span>
                  </label>
                  <input
                    type="date"
                    name="vigencia_nor"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:col-span-2">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Archivo</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    name="url"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control col-span-full">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Descripcion</span>
                  </label>
                  <textarea
                    type="text"
                    name="desc_nor"
                    placeholder="Escribe mas detalles sobre el material educativo"
                    onChange={handleChange}
                    className="input input-bordered textarea-primary p-2 min-h-[5rem]"
                    required
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-base-100" type="submit">
                crear material
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default NewMaterialEdu;
