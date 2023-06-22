import React from "react";
import Navbar from "../Navbar";

function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Avani's Portfolio</h1>
          </div>
          <div>
            <Navbar
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            ></Navbar>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
