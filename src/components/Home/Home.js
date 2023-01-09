import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js';
import './Home.scss';
import headShot from '../../assets/images/alexLaw.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const animationClassUpdateDelay = 4000;
  const firstNameArr = ['A', 'l', 'e', 'x'];
  const lastNameArr = ['L', 'a', 'w'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'];
  const jobArray2 = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

  /* Change class of animated letters after running once to prevent further animations upon re-renders */
  const changeTextAnimate = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, animationClassUpdateDelay)
  }

  useEffect(() => {
    changeTextAnimate();
  }, [])


  return (
    <div className="mainpage-section home" id="nav-home">
      <img className="home__headShot" src={headShot} alt="alex-law"/>
      <h1 className="home__header-container">
        <div className="home__animated-letters-container">
          <AnimatedLetters 
            id="first-name"
            letterClass={letterClass}
            strArray={firstNameArr}
            idx={15} 
          />
          &nbsp;
          <AnimatedLetters 
            id="last-name"
            letterClass={letterClass}
            strArray={lastNameArr}
            idx={19} 
          />
        </div>
        <div className="home__animated-letters-container home__animated-letters-container--line-break
        home__animated-letters-container--swe">
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} 
          />
          <span className="home__animated-letter-space">&nbsp;</span>
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray2}
            idx={30} 
          />
        </div>
      </h1>
      
      <h2 className="home__subtext"> Engineer / Designer / Developer </h2>
      <a className="home__contact-button" href="#nav-contact">CONTACT ME</a>
    </div>
  )
}

export default Home