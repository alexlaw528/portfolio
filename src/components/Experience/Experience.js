import React from "react";
import './Experience.scss';
import ExperienceToC from './ExperienceToC/ExperienceToC.js'
import { Fade } from "react-awesome-reveal";

const Experience = ({
  company, 
  setCompany, 
  position,
  setPosition,
  dateStr,
  setDateStr,
  description,
  setDescription,
  carouselImage,
  setCarouselImage,
  animate,
  setAnimate,
  highlight,
  setHighlight,
  handleExperience
}) => {

  return (
    <div className="mainpage-section experience" id="nav-experience">
        <Fade duration="2000">
        <h1 className="section-header">
          <span className="section-header-text">My Experience</span>
        </h1>
          <ExperienceToC 
            company = {company}
            setCompany = {setCompany}
            position = {position}
            setPosition = {setPosition}
            dateStr = {dateStr}
            setDateStr = {setDateStr}
            description = {description}
            setDescription = {setDescription}
            carouselImage = {carouselImage}
            setCarouselImage = {setCarouselImage}
            animate = {animate}
            setAnimate = {setAnimate}
            highlight = {highlight}
            setHighlight = {setHighlight}
            handleExperience = {handleExperience}
          />
      </Fade> 
    </div>
  )
}

export default Experience