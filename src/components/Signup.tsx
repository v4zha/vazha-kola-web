import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import  ApiServices from "../services/api-services";
import {RegUsr} from "../types/Types";
import { string } from 'yup';

/**
 * SignupForm 
 * */
const SignupForm=()=>{
    return (
        <Formik
            initialValues={{
                uname:"",
                passwd:"",
                e_mail:"",
            }}  
            onSubmit={(values:RegUsr)=>{
                console.log(values);
                ApiServices.register(values.uname,values.e_mail,values.passwd);
            }
            }
        >

        </Formik>    
    );
}

