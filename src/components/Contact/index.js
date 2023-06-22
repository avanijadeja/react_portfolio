import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="contactForm">
      <div className="center">
        <h2 className="page-header">Contact Me</h2>
      </div>
      <br></br>
      <div>
        <form id="contact-form">
          <div>
            <label htmlFor="Name" className="contactLabel">
              Name:
            </label>{" "}
            <input
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="Name"
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="email" className="contactLabel">
              Email:
            </label>
            <br></br>
            <input
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="Message" className="contactLabel">
              {" "}
              Message:
            </label>
            <br></br>
            <textarea
              name="Message"
              defaultValue={message}
              onBlur={handleChange}
              rows="6"
            />
          </div>
          <br></br>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <br></br>
          <br></br>
          <button type="submit" className="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
