import React from "react";
import avaniResume from "../../assets/images/AvaniResume.pdf";

function Resume() {
  return (
    <div>
      <section>
        <h1 id="resume">Resume </h1>
        <br></br>

        <div className="button" id="cvButton">
          <a href={avaniResume}>Download my Resume</a>
        </div>
      </section>
      <section id="resumeBody" classNamename="resumeBody">
        <br></br>
        <br></br>
        <br></br>

        <div classNameName="article column1">
          <p classNameName="column-title">Font-End Proficiencies</p>
          <p classNameName="column-text">
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

        <div classNameName="article column2">
          <p classNameName="column-title">Back-End Proficiencies</p>
          <p classNameName="column-text">
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
  );
}

export default Resume;
