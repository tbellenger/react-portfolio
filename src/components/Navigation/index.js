import React from "react";

function Navigation({ linkDetails, selected, displayContent, linkIndex }) {
  return (
    <a
      className={`fs-2 nav-link ${selected ? "selected" : ""}`}
      href={linkDetails.link}
      onClick={(e) => {
        e.preventDefault();
        window.location.hash = linkDetails.link;
        displayContent(linkIndex);
      }}
    >
      {linkDetails.name}
    </a>
  );
}

export default Navigation;
