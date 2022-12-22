
import React from "react";
import './About.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js'

const About = () => {

  return (
      <div className="container about-page">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't']}
            idx={15}
          />
          <p></p>
        </h1>

      </div>
  )
}

export default About