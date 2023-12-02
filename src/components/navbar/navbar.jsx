import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleBarClick = () => {
      setIsActive(prev => !prev);
    };

    const barsElement = document.getElementById("nav-action");
    barsElement.addEventListener("click", handleBarClick);

    return () => {
      barsElement.removeEventListener("click", handleBarClick);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {/* HamBurger Icon */}
      <div className={`bars ${isActive ? 'active' : ''}`} id="nav-action">
        <span className="bar"> </span>
      </div>

      {/* Navbar Links */}
      <nav id="nav" className={isActive ? 'visible' : ''}>
        <ol>
          <li className="shape-circle circle-one">
            <a href="/education">Education</a>
          </li>
          <li className="shape-circle circle-two">
            <a href="/projects">Projects</a>
          </li>
          <li className="shape-circle circle-three">
            <a href="/work">Work</a>
          </li>
          <li className="shape-circle circle-five">
            <a href="/about">About</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Navbar;
