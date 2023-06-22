import React, { useState } from "react";

import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";


function App() {
  const [currentTab, setCurrentTab] = useState("About");

  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    } else if (currentTab === "Contact") {
      return <Contact />;
    } else if (currentTab === "Portfolio") {
      return <Portfolio />;
    } else if (currentTab === "Resume") {
      return <Resume />;
    } else {
      return <About />;
    }
  };

  return (
    <>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
