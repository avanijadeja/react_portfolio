import React from "react";
import barkBook from "../../assets/images/BarkBook.png";
import dayTime from "../../assets/images/dayTime.png";
import noteTracker from "../../assets/images/Notetracker.png";
import weather from "../../assets/images/Weather.png";
import Parkitivities from "../../assets/images/Parkitivities.png";
import TechBlog from "../../assets/images/TechBlog.png";
import { VscGithubInverted } from "react-icons/vsc";

const data = [
  {
    id: 1,
    name: "Bark Book",
    image: barkBook,
    github: "https://github.com/avanijadeja/BarkBook",
    deploy: "https://avani-barkbook.herokuapp.com/",
    topics: "Express sequelize",
  },
  {
    id: 2,
    name: "Work Day Scheduler",
    image: dayTime,
    github: "https://github.com/avanijadeja/work-day-scheduler",
    deploy: "https://avanijadeja.github.io/work-day-scheduler/",
    topics: "Javascript Bootstrap",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    image: weather,
    github: "https://github.com/avanijadeja/weather-dashboard",
    deploy: "https://avanijadeja.github.io/weather-dashboard/",
    topics: "Javascript Bootstrap",
  },
  {
    id: 4,
    name: "Parkitivities",
    image: Parkitivities,
    github: "https://github.com/avanijadeja/Parktivities",
    deploy: "https://avanijadeja.github.io/Parktivities/",
    topics: "Javascript Bootstrap",
  },
  {
    id: 5,
    name: "Portfolio",
    image: "./src/assets/Parkitivities.png",
    github: "https://github.com/avanijadeja/Avani_Portfolio",
    deploy: "https://avanijadeja.github.io/Avani_Portfolio/",
    topics: "Javascript Bootstrap",
  },
  {
    id: 6,
    name: "React Portfolio",
    image: "./src/assets/Parkitivities.png",
    github: "https://github.com/avanijadeja/react_portfolio",
    deploy: "",
    topics: "Javascript Bootstrap",
  },
];

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {data.map((item, i) => {
        return (
          <div className="container">
            <div className="item">
              <img src={item.image} alt="WorkDay Scheduler"></img>
              <div className="projectInfo">
                <h4>
                  <a href={item.deploy}>{item.name}</a>
                  <a href={item.github}>
                    <VscGithubInverted />
                  </a>
                </h4>
                <br />
                <h5>{item.topics}</h5>
              </div>
            </div>

            {/* 
        <a href="https://github.com/avanijadeja/note-taker">
          <div className="item">
            <img src={noteTracker} alt="Note tracker"></img>
            <div className="projectInfo">
              <h4>
                Note Tracker <VscGithubInverted />
              </h4>
              <br />
              <h5>Javascript Bootstrap</h5>
            </div>
          </div>
        </a>

        <a href="https://github.com/avanijadeja/BarkBook">
          <div className="item">
            <img src={barkBook} alt="BarkBook Website"></img>
            <div className="projectInfo">
              <h4>
                BarkBook <VscGithubInverted />
              </h4>
              <br />
              <h5>Express Sequelize</h5>
            </div>
          </div>
        </a>

        <a href="https://github.com/avanijadeja/Parktivities">
          <div className="item">
            <img src={Parkitivities} alt="Parkitivities"></img>
            <div className="projectInfo">
              <h4>
                Parkitivities
                <VscGithubInverted />
              </h4>
              <br />
              <h5>Jquery</h5>
            </div>
          </div>
        </a>
        <a href="https://github.com/avanijadeja/tech-blog">
          <div className="item">
            <img src={TechBlog} alt="TechBlog"></img>
            <div className="projectInfo">
              <h4>
                TechBlog
                <VscGithubInverted />
              </h4>
              <br />
              <h5>MVC- handlebars, Sequelize</h5>
            </div>
          </div>
        </a>

        <a href="https://github.com/avanijadeja/weather-dashboard">
          <div className="item">
            <img src={weather} alt="Weather dashboard"></img>
            <div className="projectInfo">
              <h4>
                Weather Dashboard
                <VscGithubInverted />
              </h4>
              <br />
              <h5>Jquery, Bootstrap</h5>
            </div>
          </div>
        </a> */}
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
