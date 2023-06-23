import React from "react";
import profilePic from "../../assets/images/Avani.jpeg";

function About() {
  return (
    <section className="sub-section" id="about-me">
      <div className="headshot-container">
        <img className="headshot" src={profilePic} alt="Avani Jadeja pic" />
      </div>

      <div className="information">
        <h1 id="AboutMe">About Me</h1>
        <br></br>
        <br></br>
        <div>
          <div className="hero-area">
            <div className="hero-text">
              <h2>HEY, I'M AVANI JADEJA.</h2>
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
        </div>
      </div>
    </section>
  );
}

export default About;
