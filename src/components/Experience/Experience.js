import React from "react";
import './Experience.scss';
import ExperienceToC from './ExperienceToC/ExperienceToC.js'

const Experience = () => {

  return (
      <div className="container experience-section">
        <h1 className="section-header"> <span className="section-header-text">My Experience</span></h1>
        <div className="experience-selection-pane">
          <ExperienceToC />
        </div>
      </div>
  )
}

export default Experience