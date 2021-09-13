import ProjectSlider from "../components/ProjectSlider";
import { FiArrowUpCircle } from "react-icons/fi";
import "animate.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <ProjectSlider />
      <a href="#home">
        <FiArrowUpCircle className="projects__icon" />
      </a>
    </section>
  );
};

export default Projects;
