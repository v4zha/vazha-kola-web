import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ApiServices from "../services/api-services";
import { RegUsr } from "../types/Types";

/**
 * SignupForm with validation using SignupSchema
 * */
const SignupSchema = Yup.object().shape({
    e_mail: Yup.string().email("Invalid Format :)").required('Email Required'),
    passwd: Yup.string().min(8, "Password must have 8 char : )").required("Password Required"),
});

const SignUpForm = () => {
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
                    ApiServices.register(values.uname, values.e_mail, values.passwd);
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                <label htmlFor="uname">User Name</label>
                <Field id="uname" name="uname"/>
                <ErrorMessage name="uname" component="span"/><br/>
                <label htmlFor="passwd">Password</label>
                <Field id="passwd" type="password" name="passwd"/>
                <ErrorMessage name="passwd" component="span"/><br/>
                <label htmlFor="e_mail">Email</label>
                <Field id="e_mail" name="e_mail" />
                <ErrorMessage name="e_mail" component='span'/><br/>
                <button type="submit" disabled={isSubmitting} >Submit</button>
                </Form>
                )}
        </Formik>
    );
}
export default SignUpForm;
