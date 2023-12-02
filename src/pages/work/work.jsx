import React, {useEffect} from 'react'
import './work.css'
//Components
import EntranceBtn from '../../../src/components/entranceBtn/entrance-button';

function Work() {
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        { threshold: 1 } // Adjust the threshold as needed
    );

    const listItems = document.querySelectorAll('.work-section li');

    listItems.forEach((li) => {
        observer.observe(li);
    });

    return () => {
        observer.disconnect();
    };
  }, []);

  return (
    <div className='mainDiv'>
      <h1>Work Experience</h1>
      <section className='work-section' id="timeline">
        <ul>
            <li style={{accentColor: '#4CADAD'}}>
                <div className="date">Sep, 2022 - Aug, 2023</div>
                <div className="title">Sustainability consultant @Carbon Code</div>
                <div className="descr">Under direct supervision of the CEO, research and documents review, as well as carbon markets assessment.</div>
            </li>
            <li style={{accentColor: '#4CADAD'}}>
                <div className="date">Mar, 2021 - Jul, 2023</div>
                <div className="title">Forest Engineer @E-REDES,</div>
                <div className="descr">Supervised and managed the back office operations for the secondary network of fuel management areas and protection ranges, overseeing and coordinating with partner companies and teams.</div>
            </li>
            <li style={{accentColor: '#1B5F8C'}}>
                <div className="date">Jan, 2017 - Jan, 2018</div>
                <div className="title">Supervisory Board Member @Portuguese Association of Forestry Students</div>
                <div className="descr">Financial counselling and risk analysis as well as financial statements elaboration.</div>
            </li>
            <li style={{accentColor: '#E24A68'}}>
                <div className="date">Jul, 2017</div>
                <div className="title">Forest Operations Internship @Center for Forest Operations and Techniques</div>
                <div className="descr">Specialisation in cutting techniques and tree processing, with the correct protective gear and machinery, respecting the standards of hygiene and safety at work and environment protection.</div>
            </li>
            <li style={{accentColor: '#FBCA3E'}}>
                <div className="date">Jul, 2016</div>
                <div className="title">Forest Inventory Internship @Parques de Sintra - Monte da Lua</div>
                <div className="descr">Topographical maps photo interpretation and forest parcels monitoring (dendrology).</div>
            </li>
            <li style={{accentColor: '#41516C'}}>
                <div className="date">June, 2014 - October, 2020</div>
                <div className="title">Barman @Carruagem Luar da Barra</div>
                <div className="descr">Developed social skills and time management along with people management.</div>
            </li> 
        </ul>
      </section>
      <EntranceBtn />
    </div>
  )
}

export default Work;