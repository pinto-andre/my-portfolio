import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom';

//Components
import EntranceBtn from '../../components/entranceBtn/entrance-button';

function Projects() {


  const projects = [{
    id: 4,
    name: 'OffBeat',
    image: './images/projects/offbeat.png',
    deploy: 'https://luminous-monstera-7fc751.netlify.app/login',
    github: {
      frontend: 'https://github.com/pinto-andre/OffBeat-frontend',
      backend: 'https://github.com/pinto-andre/OffBeat-backend',
    },
    description: 'A full stack web app that is a social network for amateur musicians to showcase their work, form bands and meet other artists. Here, the user is able to make posts in a timeline, send/accept/decline friend requests, send messages and leave reviews on bands and artists.',
    methodology: 'Agile Scrum',
    coAuthor: 'Manuel Segarra',
    techstack: ['./images/logos/javascript.png', './images/logos/html.png', './images/logos/css.png', './images/logos/react.png', './images/logos/nodejs.png', './images/logos/git.png', './images/logos/material.png', './images/logos/mongodb.png', './images/logos/postman.png', './images/logos/cloudinary.png'],
  },
  {
    id: 3,
    name: 'Old Spotify Clone',
    image: './images/projects/spotify.png',
    github: {
      frontend: 'https://github.com/pinto-andre/lab-css-spotify-clone',
      backend: 'https://github.com/pinto-andre/lab-css-spotify-clone',
    },
    description: 'This was a simple exercise of cloning the frontend of an old Spotify Webapp.',
    methodology: 'Agile Scrum',
    coAuthor: 'None',
    techstack: ['./images/logos/javascript.png', './images/logos/html.png', './images/logos/css.png','./images/logos/nodejs.png', './images/logos/git.png',],
  },
  {
    id: 2,
    name: 'Ecolux Couture',
    image: './images/projects/ecolux.png',
    deploy: 'https://ecolux-couture.onrender.com/',
    github: {
      frontend: 'https://github.com/pinto-andre/EcoLux-Couture',
      backend: 'https://github.com/pinto-andre/EcoLux-Couture',
    },
    description: 'A full stack web app where the visitor can create a profile and search for clothing luxury brands that have implemented good sustainability practices and add them to favourites as well as look for organizations in the sustainable fashion field.',
    methodology: 'Agile Scrum',
    coAuthor: 'Paulina Gonzalez',
    techstack: ['./images/logos/javascript.png', './images/logos/html.png', './images/logos/css.png', './images/logos/handlebars.png', './images/logos/nodejs.png', './images/logos/git.png', './images/logos/bootstrap.png', './images/logos/mongodb.png', './images/logos/postman.png', './images/logos/cloudinary.png'],
  },
  {
    id: 1,
    name: 'Desert Runner',
    image: './images/projects/desertrunner.png',
    deploy: 'https://pinto-andre.github.io/desert-reptiles-game/',
    github: {
      frontend: 'https://github.com/pinto-andre/desert-reptiles-game',
      backend: 'https://github.com/pinto-andre/desert-reptiles-game',
    },
    description: "A desert themed game where the player's objective is to get the highest score.",
    methodology: 'Agile Scrum',
    coAuthor: 'Aamir Mushtaq',
    techstack: ['./images/logos/javascript.png', './images/logos/html.png', './images/logos/css.png', './images/logos/nodejs.png',  './images/logos/git.png',]
  }
]

  return (
    <div className='mainDiv'>
      <h1>Projects</h1>
      <br />
      <section className='project-section'>
      {projects.map((project, index) => (
        <article className='project-article' key={index}>
          <div key={index} id='stack-div'>
                  {project.techstack.map((stack) => (
                    <img id='stack' src={stack} alt="stack logo" />
                  ))}
                </div>
          <img className="project-image" src={project.image} alt="Project" />
          {project.deploy ? <Link id='deploy' to={project.deploy}><h2>{project.name}</h2></Link> : <h2>{project.name}</h2>}
            <div className='project-details'>
              <p><strong>Description:</strong> {project.description}</p>
              <div id='method-stack'>
              </div>
            </div>
        </article>
      ))}
      </section>
      <EntranceBtn />
    </div>
  )
}

export default Projects;