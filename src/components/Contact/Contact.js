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
    <div className="mainpage-section contact-section" id="nav-contact">
      <h1 className="section-header"> 
        <span className="section-header-text"></span>
      </h1>
      <div className="contact-my-info">
        <h1 className="contact-header">GET IN TOUCH</h1>
        <h2 className="contact-number">
          <FontAwesomeIcon icon={faPhone}/> {'\u00A0'}(626) - 377 - 3946
        </h2>
        <h2 className="contact-email">
          <FontAwesomeIcon icon={faEnvelope}/> {'\u00A0'} alexlaw528@gmail.com
        </h2>
      </div>
      <EmailForm />
    </div>
  )
}

export default Contact