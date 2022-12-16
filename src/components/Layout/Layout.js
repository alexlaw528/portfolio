import './Layout.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Experience from '../Experience/Experience.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Footer from '../Footer/Footer.js';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
const experienceInfo = require('../../assets/experienceInfo.js');

const Layout = React.memo(() => {
  const [ company, setCompany ] = useState(experienceInfo[0].company);
  const [ position, setPosition ] = useState(experienceInfo[0].position);
  const [ dateStr, setDateStr ] = useState(experienceInfo[0].dateStr);
  const [ description, setDescription ] = useState(experienceInfo[0].description);
  const [ animate, setAnimate ] = useState(true);
  const [ highlight, setHighlight ] = useState('radio0');
  const [ navBarVisible, setNavBarVisible ] = useState(true);
  const [ currentScrollY, setCurrentScrollY ] = useState(0);

  function handleScroll(e) {
    console.log('handleScroll');
    // e.preventDefault();
    // need to add a debounce() to prevent overloading
    const scroller = document.querySelector(".page");

    scroller.addEventListener("scroll", (event) => {
      let currScrollPos = scroller.scrollTop;
      if (currScrollPos > currentScrollY) {
        console.log('scrolling down')
        setNavBarVisible(false);
      } else {
        console.log('scrollling up')
        setNavBarVisible(true);
      }
      setCurrentScrollY(currScrollPos);
    })
  }
  
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
      <div onScroll={handleScroll} className='page'>
        <div class="main-nav">
            <Navbar 
              navBarVisible={navBarVisible}
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
          <BackToTopButton />
          <Footer />
        </div>
      </div>
  )
})

export default Layout