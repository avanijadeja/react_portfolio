// import react
import React from "react";
// import avaniresume form assets
import avaniResume from "../../assets/images/AvaniResume.pdf";

function Resume() {
  return (
    // declaring Fragment <> to cover all elements - React return one html element if more than element return cover with fragment element
    <>
      <h1>Resume </h1>
      {/* add link for resume */}
      <div className="cvbutton">
        <a href={avaniResume}>Download my Resume</a>
      </div>
      {/* display data using ui and li tag */}
      <div className="resumeMainBody">
        <section id="resumeBody" className="resumeBody">
          <div className="FrontEnd">
            <p className="column-title">Font-End Proficiencies</p>
            <p className="column-text">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>Responsive design</li>
                <li>Bootstrap</li>
                <li>React</li>
              </ul>
            </p>
          </div>

          <div className="BackEnd">
            <p className="column-title">Back-End Proficiencies</p>
            <p className="column-text">
              <ul>
                <li>Node</li>
                <li>APIs</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MangoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQl</li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

//  export function Resume
export default Resume;
