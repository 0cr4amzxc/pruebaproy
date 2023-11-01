import React from "react";
import { Form, Formik } from "formik";

import { createUsuarioRequest } from "../../api/users.api";

function NewUser() {
  return (
    <>
      <h1 className="text-3xl text-center uppercase">crear usuario</h1>
      <div className="divider"></div>
      <Formik
        initialValues={{
          nom_usu: "",
          pat_usu: "",
          mat_usu: "",
          ci_usu: "",
          alias_usu: "",
          password_usu: "",
          correo_usu: "",
          genero_usu: "",
          rol_usu: ""
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createUsuarioRequest(values);
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
                  <label htmlFor="nombre" className="label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <input
                    type="text"
                    name="nom_usu"
                    placeholder="Carlos Juan"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="apellidoPaterno" className="label">
                    <span className="label-text">Apellido Paterno</span>
                  </label>
                  <input
                    type="text"
                    name="pat_usu"
                    placeholder="Mamani"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="apellidoMaterno" className="label">
                    <span className="label-text">Apellido Materno</span>
                  </label>
                  <input
                    type="text"
                    name="mat_usu"
                    placeholder="Quispe"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Nickname</span>
                  </label>
                  <input
                    type="text"
                    name="alias_usu"
                    placeholder="CarlosJu232"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="nickname" className="label">
                    <span className="label-text">Ci</span>
                  </label>
                  <input
                    type="text"
                    name="ci_usu"
                    placeholder="123456"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Genero</span>
                  </label>
                  <select
                    className="select select-bordered w-full lg:max-w-xs"
                    name="genero_usu"
                    onChange={handleChange}
                    required
                  >
                    <option disabled defaultValue={""}>
                      Seleccionar una opcion
                    </option>
                    <option value={"Masculino"}>Masculino</option>
                    <option value={"Femenino"}>Femenino</option>
                  </select>
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Rol</span>
                  </label>
                  <select
                    className="select select-bordered w-full lg:max-w-xs"
                    name="rol_usu"
                    onChange={handleChange}
                    required
                  >
                    <option disabled defaultValue={"user"}>
                      Seleccionar un rol
                    </option>
                    <option value={"user"}>Usuario</option>
                    <option value={"admin"}>Administrador</option>
                  </select>
                </div>
                <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Correo Electrónico</span>
                </label>
                <input
                  type="email"
                  name="correo_usu"
                  placeholder="carlos_juan23@laotrared.com"
                  onChange={handleChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password_usu"
                  placeholder="password"
                  onChange={handleChange}
                  className="input input-bordered"
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

export default NewUser;
