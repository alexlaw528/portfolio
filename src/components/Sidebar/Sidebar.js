import './Sidebar.scss';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <aside className="sidebar">
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
    </aside>
  )
}

export default Sidebar