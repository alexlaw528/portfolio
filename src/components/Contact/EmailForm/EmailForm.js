import React, {useRef, useState} from "react";

import './EmailForm.scss';
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";

const EmailForm = () => {
  const form = useRef();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [emailLoad, setEmailLoad] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setEmailLoad(true);

    // Grab form data
    const {user_name, user_email, user_phone, message} = form.current;
    const emailFormData = {
      user_name: user_name.value,
      user_email: user_email.value,
      user_phone: user_phone.value,
      message: message.value
    }

    // Invoke email lambda
    try {
      await axios
        .post('/.netlify/functions/sendEmail', JSON.stringify(emailFormData))
        .then((response) => response.status)
        .then((status) => {
          if (status === 200) {
            setEmailLoad(false);
            setInputName("");
            setInputEmail("");
            setInputPhone("");
            setInputMessage("");
          } else {
            setEmailError(true);
          }
        })
    } catch (err) {
      console.error(err);
      setEmailError(true);
    }
  };

  const closeErrorModal = (e) => {
    e.preventDefault();
    setEmailError(false);    
    setEmailLoad(false);
  }

  return (
    <form ref={form} className="email" onSubmit={sendEmail}>
      <input 
        type="text" 
        placeholder="Name"
        className="email__user-input" 
        id="contact-name" 
        name="user_name" 
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />
      <input 
          type="email" 
          placeHolder="Email"
          className="email__user-input" 
          name="user_email" 
          value={inputEmail}
          onChange={(event) => setInputEmail(event.target.value)}
      />
      <input 
        type="phone" 
        placeHolder="Phone Number"
        className="email__user-input" 
        name="user_phone" 
        value={inputPhone}
        onChange={(event) => setInputPhone(event.target.value)}
      />
      <textarea 
        placeHolder="Message"
        className="email__user-input" 
        name="message" 
        value={inputMessage}
        onChange={(event) => setInputMessage(event.target.value)}
      />
      <input 
        className="email__user-input-submit" 
        type="submit" 
        value="Send Message"
      />

      {/* Loading pop-up */}
      <div className="email__loader">
        <PacmanLoader
          className="pacman"
          color="rgb(44,209,181)"
          loading={emailLoad}
          size="40px"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>

      {/* Error pop-up */}
      {
        emailError ? 
          <dialog className="email__error">
            <div className="email__error-text">
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

// .contact-form --> email
// .contact-user-input --> email__input-group (removed)
// .contact-input --> email__user-input
// .contact-user-input

// .pacman-loader --> email__loader
// .error_email --> email__error
// .error-modal-text --> email__error-text