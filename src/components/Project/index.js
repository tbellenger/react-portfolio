import React from "react";
import ghLogo from "../../assets/images/gh.svg";

function Project({ projectDetails }) {
  return (
    <div className='project col-sm-12 col-md-12 my-1'>
      <div className='label'>
        <div className='label-data'>
          <a
            className='project-link text-light fs-3 text-decoration-none m-2'
            href={projectDetails.link}
          >
            {projectDetails.title}
          </a>
          <a
            className='github-link text-light m-2'
            href={projectDetails.ghLink}
          >
            <img
              alt='github'
              src={ghLogo}
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <p className='project-tech text-light'>{projectDetails.tech}</p>
        </div>
      </div>
      <img
        className='img-thumbnail image'
        src={require(`../../assets/images/${projectDetails.image}`)}
        alt={projectDetails.title}
      />
    </div>
  );
}

export default Project;
