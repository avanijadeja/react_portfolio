import React from "react";
import profilePic from "../../assets/images/Avani.jpeg";

function About() {
  return (
    // declaring Fragment <> to cover all elements - React return one html element if more than element return cover with fragment element
    <>
      <h1>About Me</h1>
      {/* Added section for About me information */}
      <section className="sub-section" id="about-me">
        <div className="headshot-container">
          {/*  Added profile pic */}
          <img className="headshot" src={profilePic} alt="Avani Jadeja pic" />
        </div>
        {/*  Added information in About me  */}
        <div className="information">
          <h2>HEY, I'M AVANI JADEJA.</h2>
          <p>
            I am a software engineer. Turning ideas into reallife{" "}
            <i>
              <b>Products</b>
            </i>{" "}
            is my calling.I have masters in Computer Engineering with 6 years of
            computer science teaching experience. I am proficient with front end
            technologies like HTML, CSS, JavaScript,React as well as backend
            technologies like Java, SQL, Git,
            NodeJS,sequelize,Express,MangoDb,graphQL. I am passionate about
            applying my skills to become successful full stack development
            engineer.In my free time I love to do paintings.
          </p>
        </div>
      </section>
    </>
  );
}

//  Export function  About()
export default About;
