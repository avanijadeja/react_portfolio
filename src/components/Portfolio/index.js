//  import react
import React from "react";
// import project index file
import Project from "../Project/index";
// import all images from Assets images
import barkBook from "../../assets/images/BarkBook.png";
import dayTime from "../../assets/images/dayTime.png";
import weather from "../../assets/images/Weather.png";
import Parkitivities from "../../assets/images/Parkitivities.png";
import ReactPortfolio from "../../assets/images/AboutMe.png";
import AvaniPortfolio from "../../assets/images/AvaniPortfolio.png";
import DreamLand from "../../assets/images/DreamLand.png"

//  Created seed for projects in data array
const data = [
  {
    id: 1,
    name: "DreamLand WonderLand",
    image: DreamLand,
    github: "https://github.com/avanijadeja/DreamLand-WonderLand",
    deploy: "https://arcane-spire-25027-6f1b8d854313.herokuapp.com/",
    description: "Dreamland wonderland is e-commerce website for organic Pajamas designed for Baby, kids and adults.",
    topics: "MERN State Redux",
  },
  {
    id: 2,
    name: "Work Day Scheduler",
    image: dayTime,
    github: "https://github.com/avanijadeja/work-day-scheduler",
    deploy: "https://avanijadeja.github.io/work-day-scheduler/",
    description:
      "Work Day Scheduler is a Calendar application that allows a user to save events for each hour of the day.",
    topics: "Javascript Bootstrap",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    image: weather,
    github: "https://github.com/avanijadeja/weather-dashboard",
    deploy: "https://avanijadeja.github.io/weather-dashboard/",
    description:
      "weather dashboard website shows weather outlook for multiple cities.",
    topics: "Javascript Bootstrap",
  },
  {
    id: 4,
    name: "Parkitivities",
    image: Parkitivities,
    github: "https://github.com/avanijadeja/Parktivities",
    deploy: "https://avanijadeja.github.io/Parktivities/",
    description:
      "Parktivities is used to find national parks and their respective activities.",
    topics: "Javascript Bootstrap",
  },
  {
    id: 5,
    name: "Portfolio",
    image: AvaniPortfolio,
    github: "https://github.com/avanijadeja/Avani_Portfolio",
    deploy: "https://avanijadeja.github.io/Avani_Portfolio/",
    description: "Avani's Portfolio",
    topics: "Javascript Bootstrap",
  },
  {
    id: 6,
    name: "ReactPortfolio",
    image: ReactPortfolio,
    github: "https://github.com/avanijadeja/react_portfolio",
    deploy: "https://avanijadeja.github.io/react_portfolio/",
    description: "Avani's Portfolio",
    topics: "React",
  },
];

function Portfolio() {
  return (
    // declaring Fragment <> to cover all elements - React return one html element if more than element return cover with fragment element
    <>
      <h1>Portfolio</h1>
      <div className="portfolio" id="portfolio">
        {/* using map repeat every seed in data array */}
        {data.map((item, i) => {
          return (
            // called project pass values
            <Project
              key={item.id}
              name={item.name}
              image={item.image}
              github={item.github}
              deploy={item.deploy}
              description={item.description}
              topics={item.topics}
            />
          );
        })}
      </div>
    </>
  );
}

// export function Portfolio
export default Portfolio;
