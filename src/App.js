import React, { useState } from "react";
import Header from "./components/Header/index.js";
import About from "./components/About/index.js";
import Portfolio from "./components/Portfolio/index.js";
import Contact from "./components/Contact/index.js";
import Resume from "./components/Resume/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  const navLinkDetails = [
    {
      id: 0,
      name: "About",
      link: "#about",
    },
    {
      id: 1,
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      id: 2,
      name: "Contact",
      link: "#contact",
    },
    {
      id: 3,
      name: "Resume",
      link: "#resume",
    },
  ];
  const [currentContent, setContent] = useState(0);

  function displayContent(linkIndex) {
    setContent(linkIndex);
  }

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header
        navLinkDetails={navLinkDetails}
        displayContent={displayContent}
        selected={currentContent}
      />
      {currentContent === 0 && <About />}
      {currentContent === 1 && <Portfolio />}
      {currentContent === 2 && <Contact />}
      {currentContent === 3 && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
