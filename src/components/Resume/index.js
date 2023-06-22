import React from "react";
import avaniResume from "../../assets/images/AvaiResume.pdf";

function Resume() {
  return (
    <div>
      <h1>HEY, I'M AVANI JADEJA</h1>
      <p>
        I am a software developement engineer.
        <br>
          Turning ideas into reallife{" "}
          <i>
            <b>Products</b>
          </i>
        </br>{" "}
        is my calling.
      </p>
      <div class="button">
        <a href={avaniResume}>Download CV</a>
      </div>
    </div>
  );
}

export default Resume;
