import React, { useState } from "react";
import './ExperienceToC.scss';
const experienceInfo = require('../../../assets/experienceInfo.js');

const ExperienceToC = React.memo(({
  company, 
  // setCompany, 
  position,
  // setPosition,
  dateStr,
  // setDateStr,
  description,
  // setDescription,
  // animate,
  // setAnimate,
  highlight,
  // setHighlight,
  handleExperience
}) => {

  const descriptionBullet = description.map((val, index) =>
    <li className="experience-description-info-li" key = {index}>
           {val}
    </li>
  )

  const radioSelector = experienceInfo.map((experience, index) => 
    <div className="experience-select" id={highlight === `radio${index}` ? "highlight-on" : "highlight-off"}>
      <input className="experience-input" type='radio' value={experience.company} name='radio' id={`radio${index}`} onClick={handleExperience}/>
      <label className="experience-label" for={`radio${index}`}>{experience.company}</label>
    </div>
  )

  return (
    <div className="experience-toc">
      <div className="experience-list">
        {radioSelector}
      </div>

      <div 
        // key={Math.random()} 
        className="experience-info-blurb" >
        { 
        company === "Education" 
        ? 
          <>
            {
              position.map((ele, idx) => 
                <>
                  <div className="experience-position-info"> {ele} </div>
                  <div className="experience-date-info"> {dateStr[idx]} </div>
                  <ul className="experience-description-info"> 
                    <li className="experience-description-info-li">
                      {description[idx]}
                     </li>
                  </ul>
                  <br/>
                  <br/>
                </>
              )
            }
          </>
          :
          <>
            <div className="experience-position-info"> {position} </div>
            <div className="experience-date-info"> {dateStr} </div>
            <ul className="experience-description-info"> 
              {descriptionBullet} 
            </ul>
          </>
        }
      </div>
    </div>
  )
})

export default ExperienceToC