import React from "react";
import Navigation from "../Navigation/index.js";

function Header({ navLinkDetails, selected, displayContent }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand text-3xl font-bold underline' href='/'>
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
              <Navigation
                key={index}
                linkDetails={linkDetails}
                linkIndex={index}
                selected={selected === index}
                displayContent={displayContent}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
