import React from "react";
import barkBook from "../../assets/images/BarkBook.png";
import dayTime from "../../assets/images/dayTime.png";
import noteTracker from "../../assets/images/Notetracker.png";
import weather from "../../assets/images/Weather.png";
import Parkitivities from "../../assets/images/Parkitivities.png";
import TechBlog from "../../assets/images/TechBlog.png";
import { VscGithubInverted } from "react-icons/vsc";

function Portfolio(Props) {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <a href="https://github.com/avanijadeja/work-day-scheduler">
          <div className="item">
            <img src={dayTime} alt="WorkDay Scheduler"></img>
            <div class="projectInfo">
              <h4>
                Work Day Scheduler
                <VscGithubInverted />
              </h4>
              <br />
              <h5>Javascript Bootstrap</h5>
            </div>
          </div>
        </a>

        <a href="https://github.com/avanijadeja/note-taker">
          <div className="item">
            <img src={noteTracker} alt="Note tracker"></img>
            <div class="projectInfo">
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
            <div class="projectInfo">
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
            <div class="projectInfo">
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
            <div class="projectInfo">
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
            <div class="projectInfo">
              <h4>
                Weather Dashboard
                <VscGithubInverted />
              </h4>
              <br />
              <h5>Jquery, Bootstrap</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
