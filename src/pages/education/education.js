import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import './education.css'


//Components
import EntranceBtn from '../../components/entranceBtn/entrance-button';

function Education() {
  const [eduModalIsOpen, setEduModalIsOpen] = useState(false);
  const [certModalIsOpen, setCertModalIsOpen] = useState(false);

  const openEduModal = () => {
    setEduModalIsOpen(true);
  };

  const closeEduModal = () => {
    setEduModalIsOpen(false);
  };

  const openCertModal = () => {
    setCertModalIsOpen(true)
  };

  const closeCertModal = () => {
    setCertModalIsOpen(false)
  }

  useEffect(() => {
    Modal.setAppElement('#root'); // Assuming '#root' is the root element of your application
  }, []);


  return (
    <div className='mainDiv'>
      <EntranceBtn />
      <h1>Education & Certificates</h1>
      <article className='education-article'>
        <p>I hold a master's degree in forest engineering, a chapter of my life that honed my skills in sustainability and connected me intimately with the natural environment. This foundation laid the groundwork for a unique perspective that I now bring to the field of technology.</p>
        <p>Driven by a desire to balance the equation between nature and innovation, I embarked on a web development course, delving into the intricacies of coding and digital landscapes. This educational fusion has not only equipped me with a diverse skill set but also fueled my passion for creating meaningful, sustainable solutions in the ever-evolving tech landscape.</p>
      </article>
      <br />
      <br />
      <hr />
      <section className='education-section'>
        <div className='education-buttons'>
          <button onClick={openEduModal} className='education-btn allBtn'>
            <img src="./images/hat.png" alt="education hat" />
            <p>Education</p>
          </button>
          <button onClick={openCertModal} className='education-btn allBtn'>
            <img src="./images/certificate.png" alt="certificates symbol" />
            <p>Certificates</p>
          </button>
        </div>

        <Modal
        isOpen={eduModalIsOpen}
        onRequestClose={closeEduModal}
        contentLabel="Education Modal"
        className={`modal ${eduModalIsOpen ? 'modal--open' : ''}`}
        shouldCloseOnOverlayClick={true}
      >
         <button className=' allBtn' onClick={closeEduModal}>
            <img className="modal-closer" src="./images/X.png" alt="Modal closer" />
        </button> 
        <br />
        <div className='modal-div'>
          <h2 className='eduCert-titles'>Education</h2>
          <article className='eduCert-articles'>
            <h3>Masters in forest and natural resources engineering @ Instituto Superior de Agronomia</h3>
            <p>September, 2017 until September, 2020</p>
            <hr />
            <br />
            <div>
              <p>Specialising in forest management towards climate change and biodiversity, I had to prove my knowledge in several subjects, some of which are:</p>
              <ol>
                <li>Remote sensing</li>
                <li>Corporate strategy and project evaluation</li>
                <li>Integrated management of forest plagues and diseases</li>
                <li>Forest genetics and improvement</li>
                <li>Wildlife management</li>
                <li>Fire ecology and fire management</li>
                <li>Forest resources modelation</li>
              </ol>
            </div>
          </article>
          <br />
          <article className='eduCert-articles'>
          <h3>Bachelors in forest and natural resources engineering @ Instituto Superior de Agronomia</h3>
            <p>September, 2014 until September, 2017</p>
            <hr />
            <br />
            <div>
              <p>Along this course I have acquired skills and knowledge in the field of forest engineering, some of which:</p>
              <ol>
                <li>Forestry I & II</li>
                <li>Forest protection</li>
                <li>Forest biology</li>
                <li>Ecology</li>
                <li>Forest politics</li>
                <li>Forest management</li>
                <li>Forest products and technology</li>
              </ol>
            </div>
          </article>
        </div>
        
        </Modal>
        
        <Modal
        isOpen={certModalIsOpen}
        onRequestClose={closeCertModal}
        contentLabel="Certificates Modal"
        className={`modal ${certModalIsOpen ? 'modal--open' : ''}`}
        shouldCloseOnOverlayClick={true}
      >
        <button className=' allBtn' onClick={closeCertModal}>
            <img className="modal-closer" src="./images/X.png" alt="Modal closer" />
        </button>
        <br />
        <div className='modal-div'>
          <h2 className='eduCert-titles'>Certificates</h2>
          <article className='eduCert-articles'>
            <div className='certificate-layout'>
              <img src="./images/Ironhack-Certificate.png" alt="Ironhack certificate" />
              <p>Web Development certificate @ Ironhack, 2023</p>
            </div>
          </article>
        </div>
        
      </Modal>
      </section>
    </div>
  )
}

export default Education;