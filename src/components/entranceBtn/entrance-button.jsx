import './entrance-button.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function EntranceBtn() {
    let navigate = useNavigate();
    const returnHome = () => {
        let path = '/';
        navigate(path)
    }

  return (
    <div className='mainDiv'>
        <button className='entranceBtn' onClick={returnHome}>
            <img id='home-img' src="./images/home.png" alt="Home Button" />
            <p>Home</p>
        </button>
        <div id='socialsContainer' className='connectTextContainer'>
            <img className='connectText' src='./images/hyperlink.png' alt='social media'/>
            <div id='socials'>
                <Link to="https://www.linkedin.com/in/mpintoandre/" target='_blank' rel="noopener noreferrer">
                    <img id='socialsImg' src="./images/linkedin.png" alt="linkedin button" />
                </Link>
                <Link to="https://github.com/pinto-andre" target='_blank' rel="noopener noreferrer">
                    <img id='socialsImg' src="./images/github.png" alt="github button" />
                </Link>
                <a href="./Andre-Pinto-CV-2023.pdf" download="Andre-Pinto-CV-2023.pdf">
                    <img id='socialsImg' src="./images/cv.png" alt="cv downloader" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default EntranceBtn;