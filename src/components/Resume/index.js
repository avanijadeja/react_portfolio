import React from "react";
import avaniResume from "../../assets/images/AvaniResume.pdf";

function Resume() {
  return (
    <div class="hero-area">
      <div class="hero-text">
        <h1>HEY, I'M AVANI JADEJA</h1>
        <p>
          I am a software developement engineer. Turning ideas into reallife{" "}
          <i>
            <b>Products</b>
          </i>{" "}
          is my calling.
        </p>
        <div class="button">
          <a href={avaniResume}>Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
