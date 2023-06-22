import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav>
      <ul classNameName="nav nav-tabs">
        <li classNameName="nav-item">
          <a
            href="#about"
            onClick={() => setCurrentTab("About")}
            classNameName={
              currentTab === "About" ? "nav-link active" : "nav-link"
            }
          >
            About
          </a>
        </li>

        <li classNameName="nav-item">
          <a
            href="#portfolio"
            onClick={() => setCurrentTab("Portfolio")}
            classNameName={
              currentTab === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>

        <li classNameName="nav-item">
          <a
            href="#contact"
            onClick={() => setCurrentTab("Contact")}
            classNameName={
              currentTab === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>

        <li classNameName="nav-item">
          <a
            href="#resume"
            onClick={() => setCurrentTab("Resume")}
            classNameName={
              currentTab === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
