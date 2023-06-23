import React from "react";
import { VscGithubInverted } from "react-icons/vsc";

const Project = ({ name, image, github, deploy, topics }) => {
  return (
    <div className="container">
      <div className="item">
        <img src={image} alt="WorkDay Scheduler"></img>
        <div className="projectInfo">
          <h4>
            <a href={deploy} target="_blank" rel="noreferrer">
              {name}
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <VscGithubInverted />
            </a>
          </h4>
          <br />
          <h5>{topics}</h5>
        </div>
      </div>
    </div>
  );
};

export default Project;
