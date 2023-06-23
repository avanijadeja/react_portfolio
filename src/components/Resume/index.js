import React from "react";
import avaniResume from "../../assets/images/AvaniResume.pdf";

function Resume() {
  return (
    <>
      <h1>Resume </h1>

      <div className="button" id="cvButton">
        <a href={avaniResume}>Download my Resume</a>
      </div>

      <div class="resumeMainBody">
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

export default Resume;
