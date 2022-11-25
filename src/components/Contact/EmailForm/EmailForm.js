import React, {useRef} from "react";
import './EmailForm.scss';
import emailjs from '@emailjs/browser';
// const dotenv = require('dotenv');
// dotenv.config();

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_API_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <div className="contact-user-input" id="contact-name-group">
        <label className="contact-label" for="contact-name"> Name: </label>
        <input type="text" className="contact-input" id="contact-name" name="user_name" />
      </div>

      <div className="contact-user-input" id="contact-email-group">
        <label className="contact-label" for="contact-email"> Email: </label>
        <input type="email" className="contact-input" id="contact-email" name="user_email" />
      </div>

      <div className="contact-user-input" id="contact-message-group">
        <label className="contact-label" for="contact-message"> Message: </label>
        <textarea id="contact-message" className="contact-input" name="message" />
      </div>

      <input id="contact-send" type="submit" value="Send"/>
    </form>
  )
}

export default EmailForm