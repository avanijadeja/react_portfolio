import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => setCurrentTab("About")}
          className={currentTab === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => setCurrentTab("contact")}
          className={currentTab === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => setCurrentTab("Resume")}
          className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
