import React from "react";

function Navigation() {
  return (
    <nav className='navbar is-transparent'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            Tom Bellenger
          </a>
          <div
            className='navbar-burger burger'
            data-target='navbarExampleTransparentExample'
          ></div>
        </div>

        <div id='navbarExampleTransparentExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item' href='#Home'>
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
