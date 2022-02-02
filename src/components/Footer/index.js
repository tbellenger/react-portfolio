import React from "react";

function Footer() {
  return (
    <footer className='bg-light text-center text-lg-start'>
      <div
        className='text-center p-3'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className='text-dark' href='mailto:tbellenger@gmail.com'>
          tbellenger@gmail.com
        </a>
      </div>
    </footer>
  );
}
export default Footer;
