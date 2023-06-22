import React from "react";
import avaniResume from "../../assets/images/AvaniResume.pdf";

function Resume() {
  return (
    <div>
      <section>
        <div class="hero-area">
          <div class="hero-text">
            <h1>HEY, I'M AVANI JADEJA</h1>
            <p>
              I am a software developement engineer. Turning ideas into reallife{" "}
              <i>
                <b>Products</b>
              </i>{" "}
              is my calling.
            </p>
            <div class="button">
              <a href={avaniResume}>Download CV</a>
            </div>
          </div>
        </div>
      </section>
      <section id="resumeBody" classname="resumeBody">
        <br></br>
        <br></br>
        <br></br>

        <div className="article column1">
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

        <div className="article column2">
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
  );
}

export default Resume;
