import React, { useState, useEffect } from "react";
import './ExperienceToC.scss';
const experienceInfo = require('../../../assets/experienceInfo.js');



const ExperienceToC = (props) => {
  // const experienceSelects = experienceInfo.map((val, index) => 
  //   <li key={ `experience-select_${index}` }>
  //     <input className="experience-input" type='radio' value={val.company} name='radio' id='radio1' onClick={handleExperience}/>
  //     <label for='radio1'>{val.company}</label>
  //   </li>
  // )

  const [ company, setCompany ] = useState(experienceInfo[0].company);
  const [ position, setPosition ] = useState(experienceInfo[0].position);
  const [ dateStr, setDateStr ] = useState(experienceInfo[0].dateStr);
  const [ description, setDescription ] = useState(experienceInfo[0].description);

  function handleExperience(e) {
    // e.preventDefault();
    console.log('handleExperience');
    console.log(e.target.value);
    // setExperienceSelect(e.target.value);
    // console.log(experienceInfo);
    
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
      <ul className="experience-list">
        <li className="experience-select">
          <input className="experience-input" type='radio' value='OverVue' name='radio' id='radio1' onClick={handleExperience}/>
          <label for='radio1'>OverVue</label>
        </li>
        <li className="experience-select">
          <input className="experience-input" type='radio' value='SARA' name='radio'  id='radio2' onClick={handleExperience}/>
          <label for='radio2'>SARA</label>
        </li>
        <li className="experience-select">
          <input className="experience-input" type='radio' value='Molex' name='radio'  id='radio3' onClick={handleExperience}/>
          <label for='radio3'>Molex</label>
        </li>
      </ul>
      <div className="experience-info-blurb">
        <div className="experience-company-info"> {company} </div> 
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