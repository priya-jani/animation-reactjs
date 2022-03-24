import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './StudentForm.css';

const StudentForm = () =>{

    const studentInitialValues = {
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().required('Email name is required').email('Invalid input'),
        password: Yup.string().required('Password name is required'),
    })

    const studentOnSubmit = (values) => {
        console.log("values-- ",values);
    }

    return(
        <>
        <div>Hello</div>
        <Formik
        initialValues={studentInitialValues}
        validationSchema={validationSchema}
        onSubmit={studentOnSubmit}
        >
            <Form>

                <div>
                    <label>First Name: </label>
                    <Field name="firstName" placeholder="Enter First Name" />
                    <ErrorMessage name="firstName" component="span"/>
                </div>

                <div>
                    <label>Last Name: </label>
                    <Field name="lastName" placeholder="Enter Last Name" />
                    <ErrorMessage name="lastName" component="span"/>
                </div>

                <div>
                    <label>Email: </label>
                    <Field name="email" type="email" autoComplete="off" />
                    <ErrorMessage name="email" component="span"/>
                </div>

                <div>
                    <label>Password: </label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="span"/>
                </div>

                <button type="submit">Submit</button>

            </Form>
        </Formik>
        </>
    )
}

export default StudentForm;