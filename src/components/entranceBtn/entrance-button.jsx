import './entrance-button.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function EntranceBtn() {
    let navigate = useNavigate();
    const returnHome = () => {
        let path = '/';
        navigate(path)
    }

  return (
        <button className='mainDiv entranceBtn' onClick={returnHome}>
            <img src="./images/home.png" alt="Home Button" />
            <p>Home</p>
        </button>
  )
}

export default EntranceBtn;