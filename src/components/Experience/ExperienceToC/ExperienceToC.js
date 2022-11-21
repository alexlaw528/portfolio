import React, { useState } from "react";
import './ExperienceToC.scss';
let experienceInfo = require('../../../assets/experienceInfo.js');
const ExperienceToC = (props) => {
  // const [ experienceSelect, setExperienceSelect ] = useState('test');
  const [ company, setCompany ] = useState('');
  const [ position, setPosition ] = useState('');
  const [ dateStr, setDateStr ] = useState('');
  const [ description, setDescription ] = useState([]);





  const handleExperience = (e) => {
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
    <li key = {index}>
      {val}
    </li>
  )

  return (
    <>
      <ul className="experience-list">
        <li className="list1">
          <input type='radio' value='OverVue' name='radio' id='radio1' onClick={handleExperience}/>
          <label for='radio1'>OverVue</label>
        </li>
        <li>
          <input type='radio' value='SARA' name='radio'  id='radio2' onClick={handleExperience}/>
          <label for='radio2'>SARA</label>
        </li>
        <li>
          <input type='radio' value='Molex' name='radio'  id='radio3' onClick={handleExperience}/>
          <label for='radio3'>Molex</label>
        </li>
      </ul>
      <div className="experience-info-blurb">
        <h1> {company} </h1>
        <h1> {position} </h1>
        <h1> {dateStr} </h1>
        <ul> 
          {descriptionBullet} 
        </ul>
      </div>
    </>
  )
}

export default ExperienceToC