import React from "react";

export default function Footer() {
  return (
    <footer className='bg-light text-center text-lg-start'>
      <div
        className='text-center p-3'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:&nbsp;
        <a className='text-dark' href='mailto:tbellenger@gmail.com'>
          tbellenger@gmail.com
        </a>
      </div>
    </footer>
  );
}
