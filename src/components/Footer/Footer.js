import React from "react";
import "./Footer.scss"
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'

import {
  faPhone,
  faEnvelope,
  faHouse
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

  return (
    <div className="footer-section">
      <div className="footer-socials"> 
        <a className="footer-socials-link" href="https://www.linkedin.com/in/alexlaw528/">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className="footer-socials-link" href="https://github.com/alexlaw528">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a className="footer-socials-link" href="https://www.youtube.com/channel/UCKLet9-ykgLzkThKXwsWzqg">
          <FontAwesomeIcon icon={faYoutube}/>
        </a>
        <a className="footer-socials-link" href="https://www.youtube.com/channel/UCKLet9-ykgLzkThKXwsWzqg">
          <FontAwesomeIcon icon={faCodepen}/>
        </a>
      </div>

      <div className="footer-contact-info">
        <div className="footer-contact-number">          
          <FontAwesomeIcon icon={faPhone}/> {'\u00A0'} (626) - 377 - 3946
        </div>
        <div className="footer-contact-email">
          <FontAwesomeIcon icon={faEnvelope}/> {'\u00A0'}alexlaw528@gmail.com
        </div>
        <div className="footer-contact-location">
        <FontAwesomeIcon icon={faHouse}/> {'\u00A0'}Los Angeles, CA
        </div>
      </div>

      <div className="footer-license">
        License by MIT
      </div>
      {/* <div className="footer-parent">
        <div className="footer-blurb">
          <h1 className="footer-header">Alex Law</h1>
          <div> MIT License </div>
        </div>
        <div className="footer-contact">
          <h1 className="footer-header">Contact Info</h1>
          <div>(626)-377-3946</div>
          <div>alexlaw528@gmail.com</div>
          <div>Los Angeles, CA</div>
        </div>
        <div className="footer-socials">
          <h1 className="footer-header">Social Links</h1>
          <ul>
            <li><a>Website</a></li>
            <li><a>LinkedIn</a></li>
            <li><a>GitHub</a></li>
            <li><a>Codepen</a></li>
          </ul>
        </div>
      </div> */}
    </div>
  )
}

export default Footer