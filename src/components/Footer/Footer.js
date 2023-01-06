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
    <div className="footer">
      <div className="footer__socials"> 
        <a className="footer__socials-link" href="https://www.linkedin.com/in/alexlaw528/">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className="footer__socials-link" href="https://github.com/alexlaw528">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a className="footer__socials-link" href="https://www.youtube.com/channel/UCKLet9-ykgLzkThKXwsWzqg">
          <FontAwesomeIcon icon={faYoutube}/>
        </a>
        <a className="footer__socials-link" href="https://www.youtube.com/channel/UCKLet9-ykgLzkThKXwsWzqg">
          <FontAwesomeIcon icon={faCodepen}/>
        </a>
      </div>

      <div className="footer__contact">
        <div className="footer__contact-info">          
          <FontAwesomeIcon icon={faPhone}/> {'\u00A0'} (626) - 377 - 3946
        </div>
        <div className="footer__contact-info">
          <FontAwesomeIcon icon={faEnvelope}/> {'\u00A0'}alexlaw528@gmail.com
        </div>
        <div className="footer__contact-info">
        <FontAwesomeIcon icon={faHouse}/> {'\u00A0'}Los Angeles, CA
        </div>
      </div>

      <div className="footer__license">
        License by MIT
      </div>
    </div>
  )
}

export default Footer
