import React, { useState } from "react";
import './about.css';
import EntranceBtn from '../../components/entranceBtn/entrance-button';

function About() {
  const [activeCategory, setActiveCategory] = useState("");

  function showContent(category) {
    // Update the active category in the state
    setActiveCategory(category);
  }
  
  return (
    <div className='mainDiv'>
      <h1>About</h1>
      <section className='mainSec'>
        <div className='about-div'>
          <article className='about-article'>
            <p>Hi there! My name is André Pinto and I'm a full-stack developer who happens to also be a forest engineer.</p>
            <p>From a young age, my curiosity was sparked by the intricate blend of technology and nature. Nurtured in an environment that seamlessly wove together these two passions, I found myself drawn towards a scientific pursuit.</p>
            <p>This journey culminated in the attainment of a master's degree in forest engineering which tailored me to the sustainability field. After this I yearned to balance this equation, reason why later I delved into the world of technology through a web development course. </p>
          </article>
          <div className='slide-show'>
            <div className='about-img-container'>
              <img className='about-img' src="./images/myself3.jpeg" alt="myself" />
              <img className='about-img' src="./images/myself2.JPG" alt="myself 2" />
              <img className='about-img' src="./images/myself.png" alt="cyca" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>Tech Stack</h1>
        <div className="tech-stack">
          <button
            className="tech-buttons"
            onClick={() => showContent("languages")}
            data-category="languages"
          >
            Languages
          </button>
          <button
            className="tech-buttons"
            onClick={() => showContent("frameworks")}
            data-category="frameworks"
          >
            Frameworks
          </button>
          <button
            className="tech-buttons"
            onClick={() => showContent("libraries")}
            data-category="libraries"
          >
            Libraries
          </button>
          <button
            className="tech-buttons"
            onClick={() => showContent("databases")}
            data-category="databases"
          >
            Databases & Services
          </button>
          <button
            className="tech-buttons"
            onClick={() => showContent("tools")}
            data-category="tools"
          >
            Tools
          </button>
          <button
            className="tech-buttons"
            onClick={() => showContent("inProgress")}
            data-category="inProgress"
          >
            In Progress
          </button>
        </div>
        <div id="tech-img" className="languages" style={{ display: activeCategory === "languages" ? "block" : "none" }}>
          <img src="./images/logos/javascript.png" alt="javascript logo" />
          <img src="./images/logos/html.png" alt="html logo" />
          <img src="./images/logos/css.png" alt="css logo" />

        </div>
        <div id="tech-img" className="frameworks" style={{ display: activeCategory === "frameworks" ? "block" : "none" }}>
          <img src="./images/logos/react.png" alt="react logo" />
          <img src="./images/logos/nodejs.png" alt="node js logo" />
          <img src="./images/logos/express.png" alt="express js logo" />
        </div>
        <div id="tech-img" className="libraries" style={{ display: activeCategory === "libraries" ? "block" : "none" }}>
          <img src="./images/logos/bootstrap.png" alt="bootstrap logo" />
          <img src="./images/logos/material.png" alt="MUI logo" />
        </div>
        <div id="tech-img" className="databases" style={{ display: activeCategory === "databases" ? "block" : "none" }}>
          <img src="./images/logos/mongodb.png" alt="mongo db logo" />
          <img src="./images/logos/cloudinary.png" alt="cloudinary logo" />

        </div>
        <div id="tech-img" className="tools" style={{ display: activeCategory === "tools" ? "block" : "none" }}>
          <img src="./images/logos/git.png" alt="git logo" />
          <img src="./images/logos/github.png" alt="github logo" />
          <img src="./images/logos/vscode.png" alt="visual studio code logo" />
          <img src="./images/logos/postman.png" alt="postman logo" />
          <img src="./images/logos/jira.png" alt="jira logo" />
          <img src="./images/logos/figma.png" alt="figma logo" />

        </div>
        <div id="tech-img" className="inProgress" style={{ display: activeCategory === "inProgress" ? "block" : "none" }}>
          <img src="./images/logos/typescript.png" alt="typescript logo" />
          <img src="./images/logos/python.png" alt="python logo" />

        </div>
      </section>
      <EntranceBtn />
    </div>
  );
}

export default About;
