import dine from "../assets/dine.jpg";
import facedetector from "../assets/facedetector.jpg";
import portfolio from "../assets/portfolio.jpg";
import projectmentor from "../assets/projectmentor.jpg";

export const sliderData = [
  {
    id: 1,
    image: dine,
    header: "Dine Restaurant",
    title:
      "React app that emulates a restaurant website and allows users to make reservations.",
    paragraph: "HTML, CSS, Bootstrap, Javascript & React.",
    live: "https://dinerestaurant.netlify.app/",
    source: "https://github.com/martinbrunodev/dinerestaurant",
  },
  {
    id: 2,
    image: facedetector,
    header: "Face Detector",
    title:
      "Fullstack MERN app that recognizes faces in images uploaded by te user from the Web.",
    paragraph:
      "HTML, CSS, Bootstrap, Javascript, React, Node, Express & PostgreSQL.",
    live: "https://face-recognition-brain-v1.herokuapp.com/",
    source: "https://github.com/martinbrunodev/face-recognition-brain",
  },
  {
    id: 3,
    image: portfolio,
    header: "Portfolio Website",
    title:
      "My personal portfolio created to showcase my work and side projects.",
    paragraph: "HTML, CSS, Sass, Material UI, Javascript & React.",
    live: "https://martinbruno.netlify.app/",
    source: "https://github.com/martinbrunodev/portfolio-react",
  },
  {
    id: 4,
    image: projectmentor,
    header: "Project Mentor",
    title:
      "Fullstack MERN app that provides users an easy management of ongoing projects and their daily tasks.",
    paragraph: "HTML, CSS, Javascript, React, Node, Express & MongoDB.",
    live: "https://projectmentor.netlify.app/",
    source: "https://github.com/martinbrunodev/project-mentor-client",
  },
];
