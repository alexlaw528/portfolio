import './Navbar.scss';
import al_nav_logo2 from "../../assets/images/al_nav_logo2.png"
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
  setHighlight
}) => {

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
    <div class="nav-container">
      <ul className="nav-bar-link">
          <li>
            <a href="#nav-home" id="nav-home-logo">
              <img id="nav-logo" src={al_nav_logo2} alt="logo"/>
            </a>
          </li>
          <div className="section-links">
            <li>
              <a 
                href="#nav-experience"
                id="experience-link"
                onClick={() => handleExperienceDetails("experience")}
              >
                Experience
              </a>
            </li>
            <li>
                <a 
                  href="#nav-experience" 
                  id = "education-link"
                  onClick={() => handleExperienceDetails("education")}
                >
                  Education
                </a>
            </li>
            <li><a href="#nav-projects">Projects</a></li>
            <li><a href="#nav-contact">Contact</a></li>
          </div>
      </ul>
    </div>
  )
}

export default NavBar