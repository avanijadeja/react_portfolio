//  import react
import React from "react";
//  import react icons for footer
//  import github icon
import { VscGithubInverted } from "react-icons/vsc";
// import linkedin icon
import { AiFillLinkedin } from "react-icons/ai";
// import stackoverflow icon
import { BsStackOverflow } from "react-icons/bs";

function Footer() {
  return (
    // generated footer usinf <footer>
    <footer>
      <ul>
        <li>
          <h2>Made by Avani ©</h2>
        </li>
        {/* Added link to github on github icon */}
        <a href="https://github.com/avanijadeja">
          <li className="logo">
            <VscGithubInverted />
          </li>
        </a>

        {/*  Added link to linkedin on linkedin icon */}
        <a href="https://www.linkedin.com/in/avaniba-jadeja-5b927a18/">
          <li className="logo">
            <AiFillLinkedin />
          </li>
        </a>

        {/* added link to stackoverflow on stackoverflow icon */}
        <a href="https://stackoverflow.com/users/22099285/avaniba-jadeja">
          <li className="logo">
            <BsStackOverflow />
          </li>
        </a>
      </ul>
    </footer>
  );
}

// export footer function
export default Footer;
