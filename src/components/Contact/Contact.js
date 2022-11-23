import React from "react";
import './Contact.scss';
import EmailForm from './EmailForm/EmailForm.js';

const Contact = () => {
  return (
    <div className="container contact-section">
      <h1 className="contact-section-header"> 
        03. Contact
      </h1>
      <EmailForm />
    </div>
  )
}

export default Contact