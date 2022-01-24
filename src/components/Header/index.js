import React from "react";
import Navigation from "../Navigation/index.js";

function Header() {
  const navLinkDetails = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Resume",
      link: "/resume",
    },
  ];
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Tom Bellenger
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            {navLinkDetails.map((linkDetails, index) => (
              <Navigation key={index} linkDetails={linkDetails} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
