import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";


function RegistroUsu (){
    return(
        <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          nom_usu: '',
          pat_usu: '',
          mat_usu: '',
          ci_usu: '',
          alias_usu: '',
          password_usu: '',
          correo_usu: '',
          genero_usu: '',
        }}
        onSubmit={async (values, actions) => {
            console.log(values);
            try {
              //const response = await createEventoRequest(values);
              //console.log(response);
              actions.resetForm()
            } catch (error) {
              console.log(error);
            }
          }}
      >
        <Form>
          <label htmlFor="nom_usu">Nombre</label>
          <Field id="nom_usu" name="nom_usu" placeholder="John" />

          <label htmlFor="pat_usu">Apellido Paterno</label>
          <Field id="pat_usu" name="pat_usu" placeholder="Doe" />

          <label htmlFor="mat_usu">Apellido Materno</label>
          <Field id="mat_usu" name="mat_usu" placeholder="Die" />

          <label htmlFor="ci_usu">CI</label>
          <Field id="ci_usu" name="ci_usu" placeholder="999999" />

          <label htmlFor="alias_usu">Alias</label>
          <Field id="alias_usu" name="alias_usu" placeholder="dudu" />

          <label htmlFor="password_usu">Contraseña</label>
          <Field id="password_usu" name="password_usu" placeholder="*********" type="password" />

          <label htmlFor="correo_usu">Correo Electronico</label>
          <Field
            id="correo_usu"
            name="correo_usu"
            placeholder="john@acme.com"
            type="email"
          />

          <label htmlFor="genero_usu">Genero</label>
          <Field id="lastName" name="lastName" placeholder="pato" />

          <button type="submit">Submit</button>
          <Link to="/login">Log in</Link>
        </Form>
      </Formik>
    </div>
    )
}

export default RegistroUsu;