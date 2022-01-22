import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Answer = () => (
  <div>
    <h1>Guess:</h1>
    <Formik
      initialValues={{ answer: ''}}
      validate={values => {
        let errors = {};
        if (!values.answer) {
          errors.answer = 'Guess *Something*!';
        } else if (
          !/[2]/i.test(values.answer)
        ) {
          errors.answer = 'Close Enough!';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 1));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="search">
          <Field type="text" name="answer" />
          <ErrorMessage name="answer" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Answer;
