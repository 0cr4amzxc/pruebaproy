import { Form, Formik, Field, FormikHelpers, FormikValues } from "formik";

function PruebaImg(){
    return(
        <div>
            <form action="" method="post" encType="multipart/form-data">
            </form>
                <input type="file" id="" name="imgE"></input>

                <input type="submit" value={"enviar"}></input>
        
        </div>
    )
}

export default PruebaImg