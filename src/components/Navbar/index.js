// import react
import React from "react";

function Navbar(props) {
  // Destructing props
  const { currentTab, setCurrentTab } = props;

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          {/* If About click on navbar, set click to about */}
          <a
            href="#about"
            onClick={() => setCurrentTab("About")}
            className={currentTab === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>

        <li className="nav-item">
          {/*  If portfolio click on navbar , set link to portfolio */}
          <a
            href="#portfolio"
            onClick={() => setCurrentTab("Portfolio")}
            className={
              currentTab === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>

        <li className="nav-item">
          {/*  If portfolio click on contact , set link to contact */}
          <a
            href="#contact"
            onClick={() => setCurrentTab("Contact")}
            className={
              currentTab === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>

        <li className="nav-item">
          {/*  If portfolio click on resume , set link to resume */}
          <a
            href="#resume"
            onClick={() => setCurrentTab("Resume")}
            className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

//  Export Navbar Function
export default Navbar;
