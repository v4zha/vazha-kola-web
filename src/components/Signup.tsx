import { Formik, Field, Form} from "formik";
import * as Yup from "yup";
import ApiServices from "../services/api-services";
import { RegUsr } from "../types/Types";

/**
 * SignupForm with validation using SignupSchema
 * */
const SignupSchema=Yup.object().shape({
    e_mail:Yup.string().email("Invalid Format :)").required('Email Required'),
    passwd:Yup.string().min(8,"Password must have 8 char : )").required("Password Required"),
});

const SignupForm = () => {
    return (
        <Formik
            initialValues={{
                uname: "",
                passwd: "",
                e_mail: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: RegUsr, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(`submitting form\n${values}`);
                    ApiServices.register(values.uname, values.e_mail, values.passwd);
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form>
                <label htmlFor="uname">User Name</label>
                <Field id="uname" name="uname"></Field>
                <label htmlFor="passwd">Password</label>
                <Field id="passwd" type="password" name="passwd"></Field>
                <label htmlFor="e_mail">Email</label>
                <Field id="e_mail" name="e_mail" ></Field>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}
export default SignupForm;
