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
  }, []); 


  
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
            <a className='navbar-links' href="/education">Education</a>
          </li>
          <li className="shape-circle circle-two">
            <a className='navbar-links' href="/projects">Projects</a>
          </li>
          <li className="shape-circle circle-three">
            <a className='navbar-links' href="/work">Work</a>
          </li>
          <li className="shape-circle circle-five">
            <a className='navbar-links' href="/about">About</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Navbar;
