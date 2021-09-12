import React from "react";
import Typical from "react-typical";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">Hi! My name is Martin Bruno</h2>
      <h3 className="header__subtitle">
        I'm a {""}
        <Typical
          steps={["Lawyer and...", 3000, "Frontend Developer!", 4000]}
          loop={Infinity}
          wrapper="b"
        />
      </h3>
      <Button
        text="Learn More"
        size="large"
        color="secondary"
        href="#about"
        className="header__button"
      ></Button>
    </header>
  );
};

export default Header;
