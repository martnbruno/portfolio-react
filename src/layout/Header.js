import React from "react";
import Typical from "react-typical";
import { FiArrowDownCircle } from "react-icons/fi";
import "animate.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">
        Hi! My name is <span>Martin Bruno</span>
      </h2>
      <h3 className="header__subtitle">
        I'm a {""}
        <span>
          <Typical
            steps={["Lawyer and...", 3000, "Frontend Developer!", 4000]}
            loop={Infinity}
            wrapper="b"
          />
        </span>
      </h3>
      <a href="#about">
        <FiArrowDownCircle className="header__icon animate__animated animate__bounce animate__infinite" />
      </a>
    </header>
  );
};

export default Header;
