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
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleBlank(e) {
    if (e.target.name === "Name" || e.target.name === "Message") {
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

  return (
    <section className="contactForm">
      <div className="center">
        <h2 className="page-header">Contact Me</h2>
      </div>
      <br></br>
      <div>
        <form id="contact-form">
          <div>
            <label htmlFor="Name" class="contactLabel">
              Name:
            </label>{" "}
            <input
              type="text"
              defaultValue={name}
              onBlur={handleBlank}
              name="Name"
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="email" class="contactLabel">
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
            <label htmlFor="Message" class="contactLabel">
              {" "}
              Message:
            </label>
            <br></br>
            <textarea
              name="Message"
              defaultValue={message}
              onBlur={handleBlank}
              rows="5"
            />
          </div>
          <br></br>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" class="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
