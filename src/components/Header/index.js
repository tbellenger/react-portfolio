import React from "react";
import Navigation from "../Navigation/index.js";

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='content has-text-centered'>Header Text Here</div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
