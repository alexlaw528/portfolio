import React, {useRef, useState} from "react";

import './EmailForm.scss';
import emailjs from '@emailjs/browser';
import PacmanLoader from "react-spinners/PacmanLoader";

const EmailForm = () => {
  const form = useRef();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [emailLoad, setEmailLoad] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailLoad(true);

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_API_KEY)
    .then((result) => {
        setEmailLoad(false);
        setInputName("");
        setInputEmail("");
        setInputPhone("");
        setInputMessage("");
        console.log('response: ', result.text);
    }, (error) => {
        console.log('Failed...', error.text);
        setEmailError(true);
    });
  };

  const closeErrorModal = (e) => {
    e.preventDefault();
    setEmailError(false);    
    setEmailLoad(false);
  }

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <div className="contact-user-input" id="contact-name-group">
        {/* <label className="contact-label" for="contact-name"> Name: </label> */}
        <input 
          type="text" 
          placeholder="Name"
          className="contact-input" 
          id="contact-name" 
          name="user_name" 
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />
      </div>

      <div className="contact-user-input" id="contact-email-group">
        {/* <label className="contact-label" for="contact-email"> Email: </label> */}
        <input 
            type="email" 
            placeHolder="Email"
            className="contact-input" 
            id="contact-email" 
            name="user_email" 
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />
      </div>

      <div className="contact-user-input" id="contact-phone-group">
        {/* <label className="contact-label" for="contact-phone"> Phone: </label> */}
        <input 
          type="phone" 
          placeHolder="Phone Number"
          className="contact-input" 
          id="contact-phone" 
          name="user_phone" 
          value={inputPhone}
          onChange={(event) => setInputPhone(event.target.value)}
        />
      </div>

      <div className="contact-user-input" id="contact-message-group">
        {/* <label className="contact-label" for="contact-message"> Message: </label> */}
        <textarea 
          id="contact-message" 
          placeHolder="Message"
          className="contact-input" 
          name="message" 
          value={inputMessage}
          onChange={(event) => setInputMessage(event.target.value)}
        />
      </div>

      <input className="contact-user-input" id="contact-send" type="submit" value="Send Message"/>

      <div className="pacman-loader">
        <PacmanLoader
          className="pacman-loader"
          color="rgb(44,209,181)"
          loading={emailLoad}
          size="70px"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>

      {
        emailError ? 
          <dialog className="error-modal">
            <div className="error-modal-text">
            Error sending email! <br/> 
            Please contact directly: <br/>
            alexlaw528@gmail.com <br/>
            (626) - 377 - 3946
            </div>
            <br/>
            <button onClick={closeErrorModal} type="button" className="error-modal-close">
              Close
            </button>
          </dialog>
        :
          null
      }
    </form>

    



  )
}

export default EmailForm