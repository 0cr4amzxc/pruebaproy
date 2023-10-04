import React from "react";
import {Form, Formik} from 'formik';

import { createUsuarioRequest } from "../../api/users.api";

function NewUser() {
  return (
    <>
      <h1 className="text-3xl text-center uppercase">crear usuario</h1>
      <Formik
        initialValues={{
          "nom_usu": "",
          "pat_usu": "",
          "mat_usu": "",
          "ci_usu": "",
          "alias_usu": "",
          "password_usu": "",
          "correo_usu": "",
          "genero_usu": ""
        }}
        onSubmit={ async (values) => {
          console.log(values);
          try {
            const response = await createUsuarioRequest(values)
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({handleChange, handleSubmit}) => (
          <Form className="card-body" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Datos personales</legend>
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
          </fieldset>

          <fieldset>
            <legend>Credenciales</legend>
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
              <label htmlFor="email" className="label">
                <span className="label-text">Genero</span>
              </label>
              <input
                type="text"
                name="genero_usu"
                placeholder="Masculino"
                onChange={handleChange}
                className="input input-bordered"
                required
              />
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
