import React, { useState } from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
const Contact = ({ values, touched, errors, status }) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }
    return(
        <section className='contact'>
            <div>
            <h2>Contact Me</h2>
            <Form onSubmit="">
                <div>
                    <label>Name</label>
                    <Field 
                        type="text"
                        name='name'
                        placeholder='name'
                        value={values.name}
                        // onChange={handleChange}
                    />
                    {touched.name && errors.name && (
                <p className="error">{errors.name}</p>)}
                </div>
                <div>
                    <label>Email</label>
                    <Field type="text"
                        name='email'
                        placeholder='email'
                        value={values.email}
                        // onChange={handleChange}
                    />
                    {touched.email && errors.email && (
                <p className="error">{errors.email}</p>)}
                </div>
                <div>
                    <label>Message</label>
                    <Field type="text"
                        name='message'
                        placeholder='message'
                        value={values.message}
                        // onChange={handleChange}
                        className='message'
                    />
                    {touched.message && errors.message && (
                <p className="error">{errors.message}</p>)}
                </div>
                <button type='submit'>Submit</button>
            </Form>
            </div>
           
        </section>
    )
}
const ContactForm = withFormik({
    mapPropsToValues({ name, email, message }) {
      return {
        name: name || "",
        email: email || "",
        message: message || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required!"),
      email: Yup.string().required("Email is required!"),
      message: Yup.string().required("Message is required!")
    }),
  
    handleSubmit(values, { props, resetForm, setSubmitting, setStatus }) {
      console.log()
  
      setSubmitting(false);
    }
  })(Contact);
  
  export default ContactForm;