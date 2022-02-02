import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='footer mt-auto pt-3 bg-light text-center text-lg-start'>
      <div
        className='text-center p-2'
        style={{ fontSize: "12px", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:&nbsp;Tom Bellenger&nbsp;
        <a className='text-dark' href='mailto:tbellenger@gmail.com'>
          <FaEnvelope />
        </a>
        &nbsp;&nbsp;
        <a className='text-dark' href='https://github.com/tbellenger'>
          <FaGithub />
        </a>
        &nbsp;&nbsp;
        <a className='text-dark' href='https://linkedin.com/in/tbellenger'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
