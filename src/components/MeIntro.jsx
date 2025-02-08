import React, { useEffect, useState } from 'react'
import Shootingstars from './Shootingstars'
import '../css/meIntro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMasksTheater, faPeopleRoof, faShieldDog, faShoePrints, faMeteor } from '@fortawesome/free-solid-svg-icons'
import MeModal from './MeModal'

const MeIntro = () => {
const [scrollY, setScrollY] = useState(0);
const [isModalOpen, setIsModalOpen] = useState(false);
const [modalId, setModalId] = useState(null);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const openModal = (id) => {
  setModalId(id);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setModalId(null);
};

  return (
    <>
      <section className="container__about-me">
        <div className="wrapper__profile-me" style={{backgroundPositionY: `${scrollY * 0.1}px`,}}>
          <Shootingstars />
          <div className="profile-flex">
            <figure className='profile-pic'><img src="https://avatars.githubusercontent.com/u/184806224?v=4" alt="" /></figure>
            <div className="title-name">Hi! I'm Tai〽️</div>
          </div>
        </div>

        <div className="wrapper__profile-location" style={{transform: `translateY(${scrollY * -0.3}px)`,}}>
          <div className='df__profile-location'>
            <div className='df__profile-buttons'>
              <button className="me__button" onClick={() => openModal(1)}><FontAwesomeIcon icon={faShieldDog} className='fontawesome-icon' /></button>
              <button className="me__button" onClick={() => openModal(2)}><FontAwesomeIcon icon={faHeart} className='fontawesome-icon' /></button>
              <button className="me__button" onClick={() => openModal(3)}><FontAwesomeIcon icon={faMasksTheater} className='fontawesome-icon' /></button>
            </div>

            <figure className='location-pic'>
              <img src="https://theboulevard.org/wp-content/uploads/2022/08/greetings-mural-30ecb-2.jpg" alt="" />
            </figure>

            <div className='df__profile-buttons'>
              <button className="me__button" onClick={() => openModal(4)}><FontAwesomeIcon icon={faMeteor} className='fontawesome-icon' /></button>
              <button className="me__button" onClick={() => openModal(5)}><FontAwesomeIcon icon={faShoePrints} className='fontawesome-icon' /></button>
              <button className="me__button" onClick={() => openModal(6)}><FontAwesomeIcon icon={faPeopleRoof} className='fontawesome-icon' /></button>
            </div>

            {isModalOpen && <MeModal id={modalId} closeModal={closeModal} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default MeIntro