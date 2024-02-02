"use client"

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormicYup() {
  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name Required"),
  });

  const onSubmit = (value:initialValues) => {
    console.log(value)
    console.log("Form submission");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
            <Form>
                <label htmlFor="name">Name</label>
                <Field name="name" id="name"  placeholder="enter name"/>
                <ErrorMessage name="name" component="div"/>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
        )}
      </Formik>
    </div>
  );
}

interface initialValues{
    name: string;
}