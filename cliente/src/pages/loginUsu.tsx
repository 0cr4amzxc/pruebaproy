import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";


function LoginUsu (){
    return(
        <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          password_usu: '',
          correo_usu: '',
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

      ><Form>
      <label htmlFor="correo_usu">Email</label>
      <Field
        id="correo_usu"
        name="correo_usu"
        placeholder="john@acme.com"
        type="email"
      />

      <label htmlFor="password_usu">Last Name</label>
      <Field id="password_usu" name="password_usu" placeholder="*********" type="password"/>

      <button type="submit">Log in</button>
      <Link to = "/registro">Registrarse</Link>
    </Form>
      </Formik>
    </div>
    );
}

export default LoginUsu;