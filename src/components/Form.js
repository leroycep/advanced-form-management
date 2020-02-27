import React from "react";
import { withFormik, Form, Field } from "formik";

function OnboardingForm() {
  return (
    <Form>
      <label>
        Username: <Field type="text" name="username" placeholder="Username" />
      </label>
      <label>
        E-Mail: <Field type="text" name="email" placeholder="E-Mail" />
      </label>
      <label>
        Password:{" "}
        <Field type="password" name="password" placeholder="Password" />
      </label>
      <label>
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

  handleSubmit(values) {
    console.log("submitted: ", values);
  }
})(OnboardingForm);

export default FormikOnboardingForm;
