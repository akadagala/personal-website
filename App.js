import React from 'react';
import './App.css';

//import components
import Logo from "./components/Logo";
import AboutMe from "./components/AboutMe";
import ResumeEmbed from "./components/ResumeEmbed";
import LinkedinBadge from "./components/LinkedinBadge";

//import animations
import Fade from "react-reveal/Fade";

function App() {

  return (
    <div className="App">
      <nav>
        <ul className="nav">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#linkedin">Linkedin</a></li>
					<li><a href="#resume">Resume</a></li>
					<li><a href="https://www.github.com/akadagala">Github</a></li>
				</ul>
      </nav>

      <div className="home" id="home">
        <Fade top>
          <Logo></Logo>
        </Fade>
      </div>

      <div className="about" id="about">
          <AboutMe></AboutMe>
      </div>

      <div className="linkedin" id="linkedin">
        <LinkedinBadge></LinkedinBadge>
      </div>

      <div className="resume" id="resume">
          <ResumeEmbed></ResumeEmbed>
      </div>

    </div>  
  );
}

export default App;
