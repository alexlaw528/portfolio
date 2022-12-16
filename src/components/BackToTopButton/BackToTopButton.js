import React, {useEffect, useState} from "react";
import './BackToTopButton.scss'
import {
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTopButton = () => {



  return (
    <div className="to-top-button"> 
      <a href="#nav-home" className="top-arrow">
        <FontAwesomeIcon className="fa-bounce" icon={faArrowUp} />
      </a>
    </div>
  )
}

export default BackToTopButton


