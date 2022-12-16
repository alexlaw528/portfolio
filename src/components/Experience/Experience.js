import React from "react";
import './Experience.scss';
import ExperienceToC from './ExperienceToC/ExperienceToC.js'

const Experience = React.memo(({
  company, 
  setCompany, 
  position,
  setPosition,
  dateStr,
  setDateStr,
  description,
  setDescription,
  animate,
  setAnimate,
  highlight,
  setHighlight,
  handleExperience
}) => {

  return (
      <div className="container experience-section" id="nav-experience">
        <h1 className="section-header"> <span className="section-header-text">My Experience</span></h1>
        <div className="experience-selection-pane">
          <ExperienceToC 
            company = {company}
            setCompany = {setCompany}
            position = {position}
            setPosition = {setPosition}
            dateStr = {dateStr}
            setDateStr = {setDateStr}
            description = {description}
            setDescription = {setDescription}
            animate = {animate}
            setAnimate = {setAnimate}
            highlight = {highlight}
            setHighlight = {setHighlight}
            handleExperience = {handleExperience}
          />
        </div>
      </div>
  )
})

export default Experience