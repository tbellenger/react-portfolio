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
