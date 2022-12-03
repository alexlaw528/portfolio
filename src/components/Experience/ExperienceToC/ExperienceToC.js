import React, { useState } from "react";
import './ExperienceToC.scss';
const experienceInfo = require('../../../assets/experienceInfo.js');

const ExperienceToC = (props) => {

  const [ company, setCompany ] = useState(experienceInfo[0].company);
  const [ position, setPosition ] = useState(experienceInfo[0].position);
  const [ dateStr, setDateStr ] = useState(experienceInfo[0].dateStr);
  const [ description, setDescription ] = useState(experienceInfo[0].description);
  const [ animate, setAnimate ] = useState(true);
  const [ highlight, setHighlight ] = useState('radio0');

  function handleExperience(e) {
    setAnimate(!animate);
    setHighlight(e.target.id);
    for (const key of experienceInfo) {
      const { company, position, dateStr, description } = key;
      if (e.target.value === company) {
        setCompany(company);
        setPosition(position);
        setDateStr(dateStr);
        setDescription(description);
      }
    }
  }

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

      <div key={Math.random()} className="experience-info-blurb" >
        { company === "Education" ? 
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
          {/* <div className="experience-position-info"> {position} </div>
          <div className="experience-date-info"> {dateStr} </div>
          <ul className="experience-description-info"> 
            {descriptionBullet} 
          </ul> */}
        

        
      </div>
    </div>
  )
}

export default ExperienceToC