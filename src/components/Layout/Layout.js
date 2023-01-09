import './Layout.scss';
import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Experience from '../Experience/Experience.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Footer from '../Footer/Footer.js';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import experienceInfo from '../../assets/experienceInfo.js';

// const experienceInfo = require('../../assets/experienceInfo.js');

const Layout = () => {
  const [ company, setCompany ] = useState(experienceInfo[0].company);
  const [ position, setPosition ] = useState(experienceInfo[0].position);
  const [ dateStr, setDateStr ] = useState(experienceInfo[0].dateStr);
  const [ description, setDescription ] = useState(experienceInfo[0].description);
  const [ carouselImage, setCarouselImage ] = useState(experienceInfo[0].carouselImage)
  const [ animate, setAnimate ] = useState(true);
  const [ highlight, setHighlight ] = useState('radio0');
  const [ navBarVisible, setNavBarVisible ] = useState(true);
  const [ currentScrollY, setCurrentScrollY ] = useState(0);
  
  function handleScroll(event) {
    const scroller = document.querySelector(".page");

    // need to add a debounce() to prevent overloading
    const scrollEvent = (event) => {
      let currScrollPos = scroller.scrollTop;
      if (currScrollPos > currentScrollY) {
        setNavBarVisible(false);
      } else {
        setNavBarVisible(true);
      }
      setCurrentScrollY(currScrollPos);
    };
    
    scroller.addEventListener("scroll", scrollEvent);
  }

  function handleExperience(e) {
    setAnimate(!animate);
    setHighlight(e.target.id);

    for (const key of experienceInfo) {
      const { company, position, dateStr, description, carouselImage } = key;
      if (e.target.value === company) {
        setCompany(company);
        setPosition(position);
        setDateStr(dateStr);
        setDescription(description);
        setCarouselImage(carouselImage)
      }
    }
  }

  return (
      <div 
        onScroll={handleScroll} 
        className='page'
      >
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
            carouselImage = {carouselImage}
            setCarouselImage = {setCarouselImage}
            animate = {animate}
            setAnimate = {setAnimate}
            highlight = {highlight}
            setHighlight = {setHighlight}
            handleExperience = {handleExperience}
          />
          <Projects />
          <Contact />
          <Footer />
          <BackToTopButton />
          <Sidebar />  
        </div>
      </div>
  )
}

export default Layout