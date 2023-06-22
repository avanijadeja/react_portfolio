import React from "react";
import profilePic from "../../assets/images/Avani.jpeg";

function About() {
  return (
    <section class="sub-section" id="about-me">
      <div class="headshot-container">
        <img class="headshot" src={profilePic} alt="Avani Jadeja pic" />
      </div>

      <div class="information">
        <h2 id="AboutMe">About Me</h2>
        <br></br>
        <br></br>
        <p>
          <div class="hero-area">
            <div class="hero-text">
              <h1>HEY, I'M AVANI JADEJA.</h1>
              <p>
                I am a software developement engineer. Turning ideas into
                reallife{" "}
                <i>
                  <b>Products</b>
                </i>{" "}
                is my calling.I have masters in Computer Engineering with 6
                years of computer science teaching experience. I am proficient
                with front end technologies like HTML, CSS, JavaScript,React as
                well as backend technologies like Java, SQL, Git,
                NodeJS,sequelize,Express,MangoDb,graphQL. I am passionate about
                applying my skills to become successful full stack development
                engineer.In my free time I love to do paintings.
              </p>
            </div>
          </div>
          <br></br>
        </p>
      </div>
    </section>
  );
}

export default About;
