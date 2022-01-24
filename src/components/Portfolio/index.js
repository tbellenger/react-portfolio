import React from "react";
import Project from "../Project/index.js";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      link: "https://www.google.com",
      ghLink: "https://www.google.com",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project 2",
      link: "https://www.google.com",
      ghLink: "https://www.google.com",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project 3",
      link: "https://www.google.com",
      ghLink: "https://www.google.com",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project 4",
      link: "https://www.google.com",
      ghLink: "https://www.google.com",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project 5",
      link: "https://www.google.com",
      ghLink: "https://www.google.com",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className='projects'>
        {projects.map((project, index) => (
          <Project key={index} projectDetails={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
