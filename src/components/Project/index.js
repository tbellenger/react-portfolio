import React from "react";

function Project(props) {
  const { projectDetails } = props;

  return (
    <div className='project'>
      <div className='container'>
        <div className='content has-text-centered'>{projectDetails.title}</div>
        <div className='image'>
          <img src={projectDetails.image} alt={projectDetails.title} />
        </div>
        <div className='link'>
          <a href={projectDetails.link}>{projectDetails.link}</a>
        </div>
        <div className='gh-link'>
          <a href={projectDetails.ghLink}>{projectDetails.ghLink}</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
