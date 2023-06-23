import React from "react";
import Project from "../Project/index";
import barkBook from "../../assets/images/BarkBook.png";
import dayTime from "../../assets/images/dayTime.png";
import weather from "../../assets/images/Weather.png";
import Parkitivities from "../../assets/images/Parkitivities.png";

const data = [
  {
    name: "Bark Book",
    image: barkBook,
    github: "https://github.com/avanijadeja/BarkBook",
    deploy: "https://avani-barkbook.herokuapp.com/",
    topics: "Express sequelize",
  },
  {
    name: "Work Day Scheduler",
    image: dayTime,
    github: "https://github.com/avanijadeja/work-day-scheduler",
    deploy: "https://avanijadeja.github.io/work-day-scheduler/",
    topics: "Javascript Bootstrap",
  },
  {
    name: "Weather Dashboard",
    image: weather,
    github: "https://github.com/avanijadeja/weather-dashboard",
    deploy: "https://avanijadeja.github.io/weather-dashboard/",
    topics: "Javascript Bootstrap",
  },
  {
    name: "Parkitivities",
    image: Parkitivities,
    github: "https://github.com/avanijadeja/Parktivities",
    deploy: "https://avanijadeja.github.io/Parktivities/",
    topics: "Javascript Bootstrap",
  },
  {
    name: "Portfolio",
    image: "./src/assets/Parkitivities.png",
    github: "https://github.com/avanijadeja/Avani_Portfolio",
    deploy: "https://avanijadeja.github.io/Avani_Portfolio/",
    topics: "Javascript Bootstrap",
  },
  {
    name: "React Portfolio",
    image: "./src/assets/Parkitivities.png",
    github: "https://github.com/avanijadeja/react_portfolio",
    deploy: "",
    topics: "Javascript Bootstrap",
  },
];

function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div className="portfolio" id="portfolio">
        {data.map((item, i) => {
          return (
            <Project
              name={item.name}
              image={item.image}
              github={item.github}
              deploy={item.deploy}
              topics={item.topics}
            />
          );
        })}
      </div>
    </>
  );
}

export default Portfolio;
