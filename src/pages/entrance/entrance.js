import React from 'react'
import'./entrance.css'

function Entrance() {
  return (
      <div className='entrance-div'>
        <img className='my-name' src="./images/myname.png" alt="my name logo" />
        <h1 id='slogan'>A sustainable software developer!</h1>
      </div>
  )
}

export default Entrance;