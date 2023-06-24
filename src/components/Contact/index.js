// import react and usestate hook
import React, { useState } from "react";
// import validateEmail from utils
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // define useState form name, email, message ,set default value as empty string
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Define useState for errorMessage, default value empty string
  const [errorMessage, setErrorMessage] = useState("");

  // destructure formState
  const { name, email, message } = formState;

  // define handleChange function for if field empty and not valid, Errormessage is display
  function handleChange(e) {
    //  check for email , if email has invalid format or blank then pass error message.
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

  // preventDefault function on submit
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    // declaring Fragment <> to cover all elements - React return one html element if more than element return cover with fragment element
    <>
      <h1>Contact Me</h1>
      <section className="contactForm">
        {/* contact form  */}
        <form id="contact-form">
          <div>
            <label htmlFor="Name" className="contactLabel">
              Name:
            </label>{" "}
            <br></br>
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
            {/* input for email. onblur handlechange called */}
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
            {/*  textarea for message , maximum rows 6 on onblur handlechange called */}
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
              {/* display error message */}
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          {/* submit button for contact form - onsubmit handlesubmit called */}
          <button type="submit" className="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
