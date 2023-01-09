import React from "react";
import './ExperienceToC.scss';
const experienceInfo = require('../../../assets/experienceInfo.js');

const ExperienceToC = ({
  company, 
  position,
  dateStr,
  description,
  highlight,
  handleExperience
}) => {

  const descriptionBullet = description.map((val, index) =>
    <li className="experience-toc__list" key = {index}>
      {val}
    </li>
  )

  const radioSelector = experienceInfo.map((experience, index) => 
    <div 
      className = {
          highlight === `radio${index}` ? 
          "experience-toc__radio-select experience-toc__radio-select--highlight-on" 
          : 
          "experience-toc__radio-select experience-toc__radio-select--highlight-off"
      }

      id = { highlight === `radio${ index }` ? "experience-toc__radio-select--highlight-on" : "experience-toc__radio-select--highlight-off"}
    >
      <input 
        className="experience-toc__radio-input" 
        type='radio' 
        value={experience.company} 
        name='radio' 
        id={`radio${index}`} 
        onClick={handleExperience}
      />
      <label className="experience-toc__radio-label" for={`radio${index}`}>{experience.company}</label>
    </div>
  )

  return (
    <div className="experience-toc">
      <div className="experience-toc__radio"> 
        {radioSelector}
      </div>

      <div 
          // key={Math.random()}  // WHY DOES THIS CAUSE RE-RENDER
        className="experience-toc__info" >
        { 
          company === "Education" 
          ? 
          <>
            {
              position.map((ele, idx) => 
                <>
                  <div className="experience-toc__position"> {ele} </div>
                  <div className="experience-toc__date"> {dateStr[idx]} </div>
                  <ul className="experience-toc__description"> 
                    {/* <li className="experience-toc__list">
                      {description[idx]}
                    </li> */}
                  </ul>
                  <br/>
                  <br/>
                </>
              )
            }
          </>
          :
          <>
            <div className="experience-toc__position"> {position} </div>
            <div className="experience-toc__date"> {dateStr} </div>
            <ul className="experience-toc__description"> 
              {descriptionBullet} 
            </ul>
          </>
        }
      </div>
    </div>
  )
}

export default ExperienceToC


// experience-select -> radio__select