import React from 'react'
import MeIntro from '../components/MeIntro';
import CVsection from '../components/CVsection';
import TLsection from '../components/TLsection';
// import QuestionSection from '../components/QuestionSection';

const Home = () => {
  return (
    <>
      <MeIntro />
      <CVsection />
      <TLsection />
      {/* <QuestionSection /> */}
    </>
  )
}

export default Home