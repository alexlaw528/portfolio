import React from "react";
import './Contact.scss';
import EmailForm from './EmailForm/EmailForm.js';
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Contact = () => {
  return (
    <div className="mainpage-section contact" id="nav-contact">
      <h1 className="section-header"> 
        <span className="section-header-text">GET IN TOUCH</span>
      </h1>
      <div className="contact__info-section">
        <h2 className="contact__info">
          <FontAwesomeIcon icon={faPhone}/>
          {'\u00A0'}(626) - 377 - 3946
        </h2>
        <h2 className="contact__info">
          <FontAwesomeIcon icon={faEnvelope}/> 
          {'\u00A0'} alexlaw528@gmail.com
        </h2>
        <EmailForm />
      </div>
    </div>
  )
}

export default Contact

// .contact-section --> .contact
// .contact-my-info --> .contact__info
// .contact-number --> .contact__number
// .contact-email --> .contact__email