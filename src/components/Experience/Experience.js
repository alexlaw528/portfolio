import React from "react";
import './Experience.scss';
import ExperienceToC from './ExperienceToC/ExperienceToC.js'

const Experience = () => {

  return (
      <div className="container experience-section">
        <h1 className="experience-header"> Experience</h1>
        <div className="experience-selection-pane">
          <ExperienceToC />
        </div>
      </div>
  )
}

export default Experience