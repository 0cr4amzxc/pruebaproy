import { Form, Formik } from "formik";

import { createCentroRequest } from "../../api/centros.api";

function NewHelpCenter() {
  return (
    <>
      <h1 className="text-3xl text-center uppercase">crear centro de ayuda</h1>
      <div className="divider"></div>
      <Formik
        initialValues={{
          foto_cna: "",
          nomb_cna: "",
          categ_cna: "",
          dir_cna: "",
          desc_cna: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createCentroRequest(values);
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
                    <span className="label-text">Nombre del centro</span>
                  </label>
                  <input
                    type="text"
                    name="nomb_cna"
                    placeholder="Centro Santa Isabel"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="tipoEvento" className="label">
                    <span className="label-text">Direccion</span>
                  </label>
                  <input
                    type="text"
                    name="dir_cna"
                    placeholder="Av. Los Incas 123"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="tipoEvento" className="label">
                    <span className="label-text">Categoria</span>
                  </label>
                  <input
                    type="text"
                    name="categ_cna"
                    placeholder="Centro de ayuda"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control col-span-full">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Descripcion</span>
                  </label>
                  <textarea
                    type="text"
                    name="desc_cna"
                    placeholder="Escribe mas detalles sobre el centro de ayuda"
                    onChange={handleChange}
                    className="input input-bordered textarea-primary p-2 min-h-[5rem]"
                    required
                  />
                </div>
                <div className="form-control lg:col-span-3">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Imagen de Centro</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    name="foto_cna"
                    onChange={handleChange}
                    required
                  />
                </div>
                </div>
            </fieldset>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-base-100" type="submit">
                Crear centro
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default NewHelpCenter;
