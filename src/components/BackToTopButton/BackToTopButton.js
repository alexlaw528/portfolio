import React from "react";
import './BackToTopButton.scss'
import {
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTopButton = () => {

  return (
    <div className="back-to-top"> 
      <a href="#nav-home" className="back-to-top__arrow">
        <FontAwesomeIcon className="fa-bounce" icon={faArrowUp} />
      </a>
    </div>
  )
}

export default BackToTopButton


