import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "../assets/profile.jpg";
import Button from "../components/Button";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section
      id="about"
      className="about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="about__container">
        <img className="about__container__image" src={profile} alt={profile} />
        <div className="about__container__text">
          <h2 className="about__container__header">About Me</h2>
          <div className="about__container__underline"></div>
          <p className="about__container__description">
            I’m a creative, curious, proactive and detailed oriented developer,
            always looking for the best path even if it’s not the easiest. I
            love challenging myself! <br /> <br /> From my point of view, the
            best software solution is the one that is delivered in a fast,
            effective and efficient way, covering an existing necessity. That’s
            why building real world apliccations is one of my favorites things
            to do. <br />
            <br />
            As a developer I dont forget about my roots. While being a lawyer,
            my main goal was to bring solutions to daily basis problems of my
            clients, and that’s the same objective I seek as a developer
            nowadays!
          </p>
          <div className="about__container__button">
            <Button
              text="Resume"
              color="secondary"
              size="small"
              href="https://drive.google.com/file/d/1ZThQprj06TPHKOtBMeIywTg7Y8lAXUb0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
