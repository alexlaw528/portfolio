import './Sidebar.scss';

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
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faG } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="sidebar-link" href="https://www.linkedin.com/in/alexlaw528/">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a className="sidebar-link" href="https://github.com/alexlaw528">
        <FontAwesomeIcon icon={faGithub}/>
      </a>
      <a className="sidebar-link" href="https://www.youtube.com/channel/UCKLet9-ykgLzkThKXwsWzqg">
        <FontAwesomeIcon icon={faYoutube}/>
      </a>
      <a className="sidebar-link" href="https://www.youtube.com/channel/UCKLet9-ykgLzkThKXwsWzqg">
        <FontAwesomeIcon icon={faCodepen}/>
      </a>
    </div>
  )
}

export default Sidebar