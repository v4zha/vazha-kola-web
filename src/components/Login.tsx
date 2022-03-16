import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ApiServices from "../services/api-services";
import { LogUsr } from "../types/Types";

const SignupSchema = Yup.object().shape({
    passwd: Yup.string().min(8, "Password must have 8 char : )").required("Password Required"),
});

const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                uname: "",
                passwd: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: LogUsr, { setSubmitting }) => {
                setTimeout(() => {
                    ApiServices.login(values.uname, values.passwd);
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="uname">User Name</label>
                    <Field id="uname" name="uname" />
                    <ErrorMessage name="uname" component="span" /><br />
                    <label htmlFor="passwd">Password</label>
                    <Field id="passwd" type="password" name="passwd" />
                    <ErrorMessage name="passwd" component="span" /><br />
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>)
            }
        </Formik>
    );
}
export default LoginForm;
