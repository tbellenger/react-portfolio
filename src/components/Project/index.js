import React from "react";

function Project({ projectDetails }) {
  return (
    <div className='project col-sm-12 col-md-12 my-1'>
      <a href={projectDetails.link}>
        <div className='label'>
          <h3>{projectDetails.title}</h3>
          <p>{projectDetails.tech}</p>
          <p>{projectDetails.ghLink}</p>
        </div>
        <img
          className='img-thumbnail'
          src={require(`../../assets/images/${projectDetails.image}`)}
          alt={projectDetails.title}
        />
      </a>
    </div>
  );
}

export default Project;
