import React, { useState } from 'react'
import './Navbar.scss';
import al_nav_logo2 from "../../assets/images/al_nav_logo2.png"
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const experienceInfo = require('../../assets/experienceInfo.js');
const experience =  experienceInfo[0];
const education = experienceInfo[experienceInfo.length - 1];

const NavBar = ({
  animate,
  setCompany,
  setPosition,
  setDateStr,
  setDescription,
  setAnimate,
  setHighlight,
  navBarVisible
}) => {
  const [ hamburgerVisible, setHamburgerVisible ] = useState(false);

  const handleHamburger = () => {
    setHamburgerVisible(!hamburgerVisible);
  }

  const handleExperienceDetails = (type) => {
    const expDetails = (type === "experience") ? experience : education;
    setAnimate(!animate);
    setHighlight((type === "experience") ? "radio0" : `radio${experienceInfo.length - 1}`);
    setCompany(expDetails.company);
    setPosition(expDetails.position);
    setDateStr(expDetails.dateStr);
    setDescription(expDetails.description);
  }

  return (
    <div class= {navBarVisible ? "navbar navbar--show" : "navbar navbar--hide"}>
      <ul className="navbar__list">
          <li className="navbar__logo">
            <a href="#nav-home" id="navbar__logo-link">
              <img 
                className="navbar__logo-img" 
                src={al_nav_logo2} 
                alt="logo"
              />
            </a>
          </li>

          <li>
            <button 
              className="navbar__hamburger"
              type="button" 
              onClick={handleHamburger} 
              href="#" 
            >
              <FontAwesomeIcon className="fa-2xl" icon={faBars}/>  
            </button>
          </li>
          
          <div 
            className="navbar__section-links"
            id = {hamburgerVisible ? "" : "navbar__hamburger--hidden"}
          >
            <li>
              <a 
                className = "navbar__link"
                href="#nav-experience"
                onClick={() => handleExperienceDetails("experience")}
              >
                Experience
              </a>
            </li>
            <li>
                <a 
                  className = "navbar__link"
                  href="#nav-experience" 
                  onClick={() => handleExperienceDetails("education")}
                >
                  Education
                </a>
            </li>
            <li>
              <a className="navbar__link" href="#nav-projects">Projects</a>
            </li>
            <li>
              <a className="navbar__link" href="#nav-contact">Contact</a>
            </li>
          </div>
      </ul>
    </div>
  )
}

export default NavBar