import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <h2>Made by Avani ©</h2>
        </li>

        <a href="https://github.com/avanijadeja">
          <li className="logo">
            <VscGithubInverted />
          </li>
        </a>

        <a href="https://www.linkedin.com/in/avaniba-jadeja-5b927a18/">
          <li className="logo">
            <AiFillLinkedin />
          </li>
        </a>

        <a href="https://stackoverflow.com/users/22099285/avaniba-jadeja">
          <li className="logo">
            <BsStackOverflow />
          </li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
