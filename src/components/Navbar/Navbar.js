import './Navbar.scss';
import al_nav_logo2 from "../../assets/images/al_nav_logo2.png"


const NavBar = ({showEdState}) => {

  // const handleSetEdState = (e) => {
  //   e.preventDefault();
  //   console.log('hi');
  //   showEdState();
  //   console.log('here');
  // }
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
                // onClick={handleSetEdState}
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