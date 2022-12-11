import './Layout.scss';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Experience from '../Experience/Experience.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import Sidebar from '../Sidebar/Sidebar.js';
const experienceInfo = require('../../assets/experienceInfo.js');

const Layout = () => {
  const [ company, setCompany ] = useState(experienceInfo[0].company);
  const [ position, setPosition ] = useState(experienceInfo[0].position);
  const [ dateStr, setDateStr ] = useState(experienceInfo[0].dateStr);
  const [ description, setDescription ] = useState(experienceInfo[0].description);
  const [ animate, setAnimate ] = useState(true);
  const [ highlight, setHighlight ] = useState('radio0');

  function handleExperience(e) {
    setAnimate(!animate);
    setHighlight(e.target.id);
    console.log('e.target.id', e.target.id);

    for (const key of experienceInfo) {
      console.log('exp loop');
      const { company, position, dateStr, description } = key;
      if (e.target.value === company) {
        setCompany(company);
        setPosition(position);
        setDateStr(dateStr);
        setDescription(description);
      }
    }
  }

  return (
      <div className='page'>
        <div class="main-nav">
          <Navbar 
            animate = {animate}
            setAnimate = {setAnimate}
            setHighlight = {setHighlight}
            setCompany = {setCompany}
            setPosition = {setPosition}
            setDateStr = {setDateStr}
            setDescription = {setDescription}
          />
          <Home />
          <Experience 
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
          <Projects />
          <Contact />
          <Sidebar />
        </div>
      </div>
  )
}

export default Layout