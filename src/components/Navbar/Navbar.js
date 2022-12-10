import './Navbar.scss';
import al_nav_logo2 from "../../assets/images/al_nav_logo2.png"

const experience = {
  company: "Education",
  position: ["University of California, Los Angeles", "University of California, Irvine"],
  dateStr: ["MS Mechancial Engineering", "BS Mechanical Engineering"],
  description: ["August 2020 - June 2022", "October 2012 - June 2016"]
};


const NavBar = ({
  animate,
  setCompany,
  setPosition,
  setDateStr,
  setDescription,
  setAnimate,
  setHighlight
}) => {

  const handleSetEdState = (e) => {
    // e.preventDefault();
    // const navBarLink = document.querySelector("#experience-link").dataset.experience;
    // console.log(e.value);
    // console.log(navBarLink);
    setAnimate(!animate);
    setHighlight("radio3");
    setCompany(experience.company);
    setPosition(experience.position);
    setDateStr(experience.dateStr);
    setDescription(experience.description);

  }
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
            <li>
                <a 
                href="#nav-experience" 
                id = "experience-link"
                data-experience="Experience"
                onClick={handleSetEdState}
                >
                  Education
                </a>
            </li>
          </div>
      </ul>
    </div>
  )
}

export default NavBar