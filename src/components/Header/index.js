// import react
import React from "react";
// import navbar
import Navbar from "../Navbar";

function Header(props) {
  // destructering props
  const { currentTab, setCurrentTab } = props;

  return (
    // declaring Fragment <> to cover all elements - React return one html element if more than element return cover with fragment element
    <>
      <section>
        <header className="flex-row px-1">
          <div>
            <h4>Avani's Portfolio</h4>
          </div>
          <div>
            {/* Navbar value currenttab and setcurrenttab */}
            <Navbar
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            ></Navbar>
          </div>
        </header>
      </section>
    </>
  );
}

//  Export Function Header
export default Header;
