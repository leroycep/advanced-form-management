import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

function OnboardingForm({ errors, touched, status }) {
  useEffect(() => {
    console.log("status has changed:", status);
  }, [status]);
  return (
    <Form>
      <label>
        Username:
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && <p>{errors.username}</p>}
      </label>
      <label>
        E-Mail:
        <Field type="email" name="email" placeholder="E-Mail" />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </label>
      <label>
        Password:
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </label>
      <label>
        {touched.tos && errors.tos && <p>{errors.tos}</p>}
        <Field type="checkbox" name="tos" />
        By checking this box, you agree to the Terms of Service
      </label>
      <button>Submit</button>
    </Form>
  );
}

const FormikOnboardingForm = withFormik({
  mapPropsToValues({ username, email, password, tos }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },

  validationSchema: yup.object().shape({
    username: yup
      .string()
      .matches(/^[a-zA-Z0-9_-]+$/, "Invalid characters in username")
      .required(),
    email: yup
      .string()
      .email("Invalid email address")
      .test(
        "duplicate-email",
        "That email is already taken",
        val => val !== "waffle@syrup.com"
      )
      .required(),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Must enter password"),
    tos: yup.boolean().oneOf([true], "You must agree to the TOS")
  }),

  handleSubmit(values, { props, setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus("success");
        resetForm();
        props.addUser(res.data);
      })
      .catch(e => setStatus(`failed to submit data to reqres: ${e}`));
  }
})(OnboardingForm);

export default FormikOnboardingForm;
