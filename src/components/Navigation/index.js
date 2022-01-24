import React from "react";

function Navigation(props) {
  const { linkDetails } = props;

  return (
    <a className='nav-link' href={linkDetails.link}>
      {linkDetails.name}
    </a>
  );
}

export default Navigation;
