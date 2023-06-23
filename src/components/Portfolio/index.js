import React from "react";
import Project from "../Project/index";
import barkBook from "../../assets/images/BarkBook.png";
import dayTime from "../../assets/images/dayTime.png";
import weather from "../../assets/images/Weather.png";
import Parkitivities from "../../assets/images/Parkitivities.png";
import ReactPortfolio from "../../assets/images/ReactPortfolio.png";
import AvaniPortfolio from "../../assets/images/AvaniPortfolio.png";

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
    image: AvaniPortfolio,
    github: "https://github.com/avanijadeja/Avani_Portfolio",
    deploy: "https://avanijadeja.github.io/Avani_Portfolio/",
    topics: "Javascript Bootstrap",
  },
  {
    id: 6,
    name: "ReactPortfolio",
    image: ReactPortfolio,
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
              key={item.id}
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
