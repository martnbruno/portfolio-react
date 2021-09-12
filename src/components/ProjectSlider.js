import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { sliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Button from "./Button";

const ProjectSlider = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div
      className="project__slider"
    >
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {sliderData.map((project, id) => {
        return (
          <div
            className={
              id === current
                ? "project__slider__active"
                : "project__slider__slide"
            }
            key={id}
          >
            {id === current && (
              <div className="project__slider__card" data-aos="flip-right"
      data-aos-duration="2000">
                <img
                  className="project__slider__card__image"
                  src={project.image}
                  alt={project.image}
                />
                <div className="project__slider__card__text__container">
                  <h2 className="project__slider__card__title">
                    {project.header}
                  </h2>
                  <h3 className="project__slider__card__subtitle">
                    {project.title}
                  </h3>
                  <p className="project__slider__card__paragraph">
                    Developed with {project.paragraph}
                  </p>
                </div>
                <div className="project__slider__button__container">
                  <Button
                    href={project.live}
                    size="large"
                    color="secondary"
                    text="See Live"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <Button
                    href={project.source}
                    size="large"
                    color="secondary"
                    text="Source Code"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ProjectSlider;
