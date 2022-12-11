import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js';
import './Home.scss';
import headShot from '../../assets/images/alexLaw.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['A', 'l', 'e', 'x'];
  const nameArray2 = ['L', 'a', 'w'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'];
  const jobArray2 = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

  const changeTextAnimate = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000)
  }

  useEffect(() => {
    changeTextAnimate();
  }, [])


  return (
    <div className="home-page-container">
      <div className="container home-page" id="nav-home">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={15} 
            />
            &nbsp;
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray2}
              idx={19} 
            />
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={jobArray}
              idx={22} 
            />
            &nbsp;
            <AnimatedLetters letterClass={letterClass}
              strArray={jobArray2}
              idx={30} 
            />
            {/* <img src={headShot} alt="headshot"/> */}

          </h1>
          <h2> Engineer / Designer / Developer </h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
      </div>
    </div>
  )
}

export default Home