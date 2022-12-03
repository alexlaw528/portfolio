import './Navbar.scss';
// import Contact from '../Contact/Contact.js';
// import Projects from '../Projects/Projects.js';
import al_nav_logo2 from "../../assets/images/al_nav_logo2.png"



// import { Link, NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHome, 
//   faUser, 
//   faEnvelope, 
//   faRocket,
//   faA,
//   faL,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faLinkedin,
//   faGithub,
// } from '@fortawesome/free-brands-svg-icons'


const NavBar = () => {
  return (
    <div class="nav-container">
      <ul className="nav-bar-link">
          <li>
            <a href="#nav-home" id="nav-home-logo">
              {/* <FontAwesomeIcon icon={faA}/>
              <FontAwesomeIcon icon={faL}/> */}
              <img id="nav-logo" src={al_nav_logo2} alt="logo"/>
            </a>
          </li>

          <div className="section-links">
            <li><a href="#nav-experience">Experience</a></li>
            <li><a href="#nav-projects">Projects</a></li>
            <li><a href="#nav-contact">Contact</a></li>
            <li><a href="#nav-experience">Education</a></li>
          </div>
      </ul>
    </div>
  )
}

export default NavBar