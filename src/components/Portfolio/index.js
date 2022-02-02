import React from "react";
import Project from "../Project/index.js";

export default function Portfolio() {
  const projects = [
    {
      title: "fixUp",
      link: "https://fixup-job.herokuapp.com",
      ghLink: "https://github.com/tbellenger/fixup-job-site-full-stack",
      image: "fixup.png",
      tech: "HTML/CSS/Bootstrap/Node/Npm/JavaScript/AWS/Database/Heroku",
    },
    {
      title: "Pregame",
      link: "https://tbellenger.github.io/playlist",
      ghLink: "https://github.com/tbellenger/playlist",
      image: "pregame.jpg",
      tech: "HTML/CSS/JavaScript/Spotify",
    },
    {
      title: "Bolt Hole Calculator",
      link: "https://tbellenger.github.io/BoltHoles",
      ghLink: "https://github.com/tbellenger/Boltholes",
      image: "BoltHoles.jpg",
      tech: "HTML/CSS/JavaScript",
    },
    {
      title: "Tic Tac Toe Game",
      link: "https://iron-pacific-oxygen.herokuapp.com/",
      ghLink: "https://github.com/tbellenger/tictactoe-websocket",
      image: "tictactoe.jpg",
      tech: "HTML/CSS/JavaScript/Node/Npm/Heroku",
    },
    {
      title: "Sorting Visualizer",
      link: "https://tbellenger.github.io/sorting-visualizer/sortviz/",
      ghLink: "https://github.com/tbellenger/sorting-visualizer/",
      image: "sortviz.jpg",
      tech: "HTML/CSS/JavaScript/",
    },
    {
      title: "Placeholder",
      link: "https://tbellenger.github.io/react-portfolio",
      ghLink: "https://github.com/tbellenger/",
      image: "placeholder.webp",
      tech: "HTML/CSS/JavaScript/",
    },
  ];

  return (
    <div className='section row my-1 mx-3'>
      <span className='gutter col-sm-12 col-md-2'></span>
      <div className='section-cta col-sm-12 col-md-8'>
        <div className='row g-0'>
          {projects.map((project, index) => (
            <Project key={index} projectDetails={project} />
          ))}
        </div>
      </div>
      <span className='gutter col-sm-12 col-md-2'></span>
    </div>
  );
}
