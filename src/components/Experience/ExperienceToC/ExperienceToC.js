import React, { useState } from "react";
import './ExperienceToC.scss';
const experienceInfo = require('../../../assets/experienceInfo.js');




const ExperienceToC = (props) => {

  const [ company, setCompany ] = useState(experienceInfo[0].company);
  const [ position, setPosition ] = useState(experienceInfo[0].position);
  const [ dateStr, setDateStr ] = useState(experienceInfo[0].dateStr);
  const [ description, setDescription ] = useState(experienceInfo[0].description);
  const [ animate, setAnimate ] = useState(true);
  const [ highlight, setHighlight ] = useState('radio1');

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

  return (
    <div className="experience-toc">
      <div className="experience-list">
        <div className="experience-select" id={highlight === "radio1" ? "highlight-on" : "highlight-off"}>
          <input className="experience-input" type='radio' value='OverVue' name='radio' id='radio1' onClick={handleExperience}/>
          <label className="experience-label" for='radio1'>OverVue</label>
        </div>
        <div className="experience-select" id={highlight === "radio2" ? "highlight-on" : "highlight-off"}>
          <input className="experience-input" type='radio' value='SARA' name='radio'  id='radio2' onClick={handleExperience}
          />
          <label className="experience-label" for='radio2'>SARA</label>
        </div>
        <div className="experience-select" id={highlight === "radio3" ? "highlight-on" : "highlight-off"}>
          <input className="experience-input" type='radio' value='Molex' name='radio'  id='radio3' onClick={handleExperience}/>
          <label className="experience-label" for='radio3'>Molex</label>
        </div>
      </div>

      <div key={Math.random()} className="experience-info-blurb" >
        {/* <div className="experience-company-info"> {company} </div>  */}
        <div className="experience-position-info"> {position} </div>
        <div className="experience-date-info"> {dateStr} </div>
        <ul className="experience-description-info"> 
          {descriptionBullet} 
        </ul>
      </div>
    </div>
  )
}

export default ExperienceToC