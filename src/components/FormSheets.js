import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./FormSheets.css";
import { Button } from "react-bootstrap";

const initialValues = { 
  name: "",
  email: "",
  age: "",
  telephone: "",
  salary: "",
  hobby: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().required("Email is required!"),
  age: Yup.string().required("Age is required!"),
  telephone: Yup.string().required("Telephone is required!"),
  salary: Yup.string().required("Salary is required!"),
  hobby: Yup.string().required("Hobby is required!!"),
});

const createUrl =
  "https://sheet.best/api/sheets/f8e440ba-1e64-458c-ae00-80fffaa606db";

export const FormSheets = () => {
  
  const onSubmit = async (name) => {
    await axios
      .post(createUrl, name)
      .then((response) => {
        console.log(response);
        console.log(name);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <div>
      <h2>React Google Sheets</h2>
      <div className="add-user">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name" className="float-left">
                Name
              </label>
              <Field
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
              ></Field>
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="float-left">
                E-mail
              </label>
              <Field
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your e-mail"
              ></Field>
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="age" className="float-left">
                Age
              </label>
              <Field
                type="number"
                className="form-control"
                name="age"
                placeholder="Enter your age"
              ></Field>
              <ErrorMessage name="age" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="telephone" className="float-left">
                Telephone
              </label>
              <Field
                type="number"
                className="form-control"
                name="telephone"
                placeholder="Enter your telephone putovisk"
              ></Field>
              <ErrorMessage
                name="telephone"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary" className="float-left">
                Salary
              </label>
              <Field
                type="number"
                className="form-control"
                name="salary"
                placeholder="Enter your salary poor..."
              ></Field>
              <ErrorMessage name="salary" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="hobby" className="float-left">
                Salary
              </label>
              <Field
                type="text"
                className="form-control"
                name="hobby"
                placeholder="Enter your hobby crazy"
              ></Field>
              <ErrorMessage name="hobby" component="div" className="error" />
            </div>
            <div>
              <Button type="submit" className="btn btn-primary mr-3">
                Send
              </Button>
              <Button type="reset" className="btn btn-secondary mr-3">
                Clear
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
