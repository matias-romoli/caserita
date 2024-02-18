import { Field, ErrorMessage } from "formik";

function Body({ submit, loading }) {
  return (
    <>
      <div className="input">
        <Field
          type="text"
          name="user_name"
          autoComplete="off"
          placeholder="Nombre"
          className="form__text"
        />
        <ErrorMessage className="message" name="user_name" component="div" />
      </div>

      <div className="input">
        <Field
          type="email"
          name="user_email"
          autoComplete="off"
          placeholder="Email"
          className="form__text"
        />
        <ErrorMessage className="message" name="user_email" component="div" />
      </div>
      <div className="input">
        <Field
          as="textarea"
          name="message"
          autoComplete="off"
          placeholder="Mensaje"
          className="form__message"
        />
        <ErrorMessage className="message" component="div" name="message" />
      </div>
      <div className="form__btn">
        {loading ? (
          <button type="button" className="btn btn-disabled" disabled>
            Enviando...
          </button>
        ) : (
          <button type="submit" className="btn">
            {submit ? "Mensaje enviado" : "Enviar"}
          </button>
        )}
      </div>
    </>
  );
}

export default Body;
