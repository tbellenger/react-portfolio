import React from "react";

export default function Footer() {
  return (
    <footer className='footer mt-auto pt-3 bg-light text-center text-lg-start'>
      <div
        className='text-center p-2'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:&nbsp;
        <a className='text-dark' href='mailto:tbellenger@gmail.com'>
          Tom Bellenger
        </a>
      </div>
    </footer>
  );
}
