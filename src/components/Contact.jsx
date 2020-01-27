import React, { useState } from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
const Contact = ({ touched,
    errors,
    isSubmitting,
    values }) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }
    return(
        <section>
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
                </div>
                <div>
                    <label>Email</label>
                    <Field type="text"
                        name='email'
                        placeholder='email'
                        value={values.email}
                        // onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Message</label>
                    <Field type="text"
                        name='message'
                        placeholder='message'
                        value={values.message}
                        // onChange={handleChange}
                    />
                </div>
                <button type='submit'>Submit</button>
            </Form>
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