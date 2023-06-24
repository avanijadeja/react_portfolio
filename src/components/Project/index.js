// import react
import React from "react";
//  import github icon from react icon
import { VscGithubInverted } from "react-icons/vsc";

// function project argument value comes form portfolio index file
const Project = ({ name, image, github, deploy, topics }) => {
  return (
    <div className="container">
      <div className="item">
        {/* display project image */}
        <img src={image} alt="WorkDay Scheduler"></img>
        <div className="projectInfo">
          <h4>
            {/* link on project name */}
            <a href={deploy} target="_blank" rel="noreferrer">
              {name}
            </a>
            {/* link on github symbol */}
            <a href={github} target="_blank" rel="noreferrer">
              <VscGithubInverted />
            </a>
          </h4>
          <br />
          {/* display topics */}
          <h5>{topics}</h5>
        </div>
      </div>
    </div>
  );
};

//  export function Project
export default Project;
