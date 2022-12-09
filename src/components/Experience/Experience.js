import React from "react";
import './Experience.scss';
import ExperienceToC from './ExperienceToC/ExperienceToC.js'

const Experience = ({edState, showEdState, removeEdState}) => {


  return (
      <div className="container experience-section" id="nav-experience">
        <h1 className="section-header"> <span className="section-header-text">My Experience</span></h1>
        <div className="experience-selection-pane">
          <ExperienceToC 
            edState = {edState}
            showEdState = {showEdState}
            removeEdState = {removeEdState}
          />
        </div>
      </div>
  )
}

export default Experience