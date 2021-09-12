import React from "react";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__menu">
        <li className="footer__element"> martin bruno 2021 © </li>

        <li className="footer__element">
          <a
            className="footer__link"
            id="linkedin"
            href="https://www.linkedin.com/in/martin-bruno/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
        </li>
        <li className="footer__element">
          <a
            className="footer__link"
            id="github"
            href="https://github.com/martinbrunodev"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        </li>
        <li className="footer__element">
          <a
            className="footer__link"
            id="whatsapp"
            href="https://wa.me/+34600912871"
            target="_blank"
            rel="noreferrer"
          >
            <SiWhatsapp />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
