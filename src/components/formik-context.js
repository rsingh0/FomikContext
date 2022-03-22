import React, { useEffect } from "react";
import { useFormikContext, Formik, Form, Field } from "formik";

const AutoSubmitToken = () => {
  // Grab values and submitForm from context
  const { isSubmitting, resetForm, submitForm, values, setFieldValue } =
    useFormikContext();

  console.log("Values", JSON.stringify(values));
  console.log("isSubmitting", JSON.stringify(isSubmitting));

  function reset(){
    if (values.token.length !== 6) {
      isSubmitting = false;
      resetForm();
      setFieldValue("distance", "25");
    }
  }

  useEffect(() => {
    // Fetch API?

  }, [values]);

  return (
    <div>
      <h1>2-step Verification</h1>
      <p>Please enter the 6 digit code sent to your device</p>
      <Formik
        initialValues={{ token: "" }}
        validate={(values) => {
          const errors = {};
          if (values.token.length < 5) {
            errors.token = "Invalid code. Too short.";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form onReset={reset}>
          <Field name={values.token} type="tel" />
        </Form>
      </Formik>
    </div>
  );
};

export { AutoSubmitToken };
