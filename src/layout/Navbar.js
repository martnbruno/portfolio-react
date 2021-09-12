import React from "react";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
const Navbar = () => {
  return (
    <nav id="home" className="nav">
      <input type="checkbox" className="nav__checkbox" id="nav__checkbox" />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <svg className="svg menu" viewBox="0 0 100 80">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <svg className="svg close" viewBox="0 0 20 20">
          <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
        </svg>
      </label>

      <ul className="nav__menu">
        <li className="nav__element logo">
          <a className="nav__link" href="#about">
            MB
          </a>
        </li>
        <li className="nav__element">
          <a className="nav__link" href="#home">
            Home
          </a>
        </li>
        <li className="nav__element">
          <a className="nav__link" href="#about">
            About Me
          </a>
        </li>
        <li className="nav__element">
          <a className="nav__link" href="#projects">
            Projects
          </a>
        </li>
        <div className="nav__socials">
          <li className="nav__element">
            <a
              className="nav__link"
              id="linkedin"
              href="https://www.linkedin.com/in/martin-bruno/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </li>
          <li className="nav__element">
            <a
              className="nav__link"
              id="github"
              href="https://github.com/martinbrunodev"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub />
            </a>
          </li>
          <li className="nav__element">
            <a
              className="nav__link"
              id="whatsapp"
              href="https://wa.me/+34600912871"
              target="_blank"
              rel="noreferrer"
            >
              <SiWhatsapp />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
