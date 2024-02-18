import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Body from "./body";

const initialValues = { user_name: "", user_email: "", message: "" };
const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Por favor, complete los campos."),
  user_email: Yup.string()
    .email("Por favor, ingrese un correo válido.")
    .required("Por favor, complete los campos."),
  message: Yup.string().required("Por favor, complete los campos."),
});

function Formulario() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const form = useRef();

  const sendEmail = async () => {
    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_c4xmorj",
        "template_ip0zioj",
        form.current,
        "U_tivKK9iPf0VosIS"
      );
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setSubmit(true);
    } catch (error) {
      console.error(error.text);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await sendEmail(values);
        actions.resetForm();
        setSubmit(false);
      }}
    >
      <Form ref={form} className="form">
        <Body submit={submit} loading={loading} />
      </Form>
    </Formik>
  );
}

export default Formulario;
