import React from "react";
import {
  DiBootstrap,
  DiHtml5,
  DiCss3,
  DiGithubBadge,
  DiAws,
  DiReact,
  DiDatabase,
  DiJavascript,
  DiNodejs,
  DiNpm,
  DiHeroku,
} from "react-icons/di";
import { FaSpotify, FaStripe, FaLinkedin } from "react-icons/fa";

function Project({ projectDetails }) {
  return (
    <div className='project col-sm-12 col-md-12 my-1'>
      <div className='label'>
        <div className='label-data'>
          <a
            className='project-link text-light fs-4 text-decoration-none m-2'
            href={projectDetails.link}
          >
            {projectDetails.title}
          </a>
          <a
            className='github-link text-light m-2'
            href={projectDetails.ghLink}
          >
            <DiGithubBadge size={28} />
          </a>
          <p className='project-tech text-light'>
            {projectDetails.tech.indexOf("HTML") !== -1 && (
              <DiHtml5 size={28} />
            )}
            {projectDetails.tech.indexOf("CSS") !== -1 && <DiCss3 size={28} />}
            {projectDetails.tech.indexOf("JavaScript") !== -1 && (
              <DiJavascript size={28} />
            )}
            {projectDetails.tech.indexOf("Bootstrap") !== -1 && (
              <DiBootstrap size={28} />
            )}
            {projectDetails.tech.indexOf("AWS") !== -1 && <DiAws size={28} />}
            {projectDetails.tech.indexOf("Database") !== -1 && (
              <DiDatabase size={28} />
            )}
            {projectDetails.tech.indexOf("Node") !== -1 && (
              <DiNodejs size={28} />
            )}
            {projectDetails.tech.indexOf("Npm") !== -1 && <DiNpm size={28} />}
            {projectDetails.tech.indexOf("Heroku") !== -1 && (
              <DiHeroku size={28} />
            )}
            {projectDetails.tech.indexOf("Spotify") !== -1 && (
              <FaSpotify size={28} />
            )}
            {projectDetails.tech.indexOf("Stripe") !== -1 && (
              <FaStripe size={28} />
            )}
            {projectDetails.tech.indexOf("React") !== -1 && (
              <DiReact size={28} />
            )}
            {projectDetails.tech.indexOf("Linkedin") !== -1 && (
              <FaLinkedin size={28} />
            )}
          </p>
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
