import React, { useState } from 'react'
import '../css/cvSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CVnow from './CVnow';
import CVthen from './CVthen';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CVsection = () => {
  const [buttonActive, setButtonActive] = useState('now');
  const [cvComp, setCvComp] = useState('now');
  const [backgroundurl, setBackgroundurl] = useState('now');

  const handleButtonClick = (buttonName) => {
    setButtonActive(buttonName);
    setCvComp(buttonName);
    setBackgroundurl(buttonName);
  };

  return (
    <>
      <section className={`container__cv ${backgroundurl ? `container__cv-active-${backgroundurl}` : ''}`}>
        <div className='cv__title'> Career Journey <a href='https://www.linkedin.com/in/tran0422' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className='cv__icon' /></a></div>
        <div className='button__df'>
          <button className={`cv__button ${buttonActive === 'now' ? 'active' : ''}`} onClick={() => handleButtonClick('now')}>Now -- 2020</button>
          <button className={`cv__button ${buttonActive === 'then' ? 'active' : ''}`} onClick={() => handleButtonClick('then')}>2018 -- 2010</button>
        </div>

        {cvComp === 'now' && <CVnow />}
        {cvComp === 'then' && <CVthen />}
      </section>
    </>
  )
}

export default CVsection