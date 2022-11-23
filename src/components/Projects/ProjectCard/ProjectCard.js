import React from "react";
import './ProjectCard.scss';
import overvue from '../../../assets/images/overvue.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

// let projectsInfo = require('../../../assets/projectsInfo.js');
import projectsInfo from '../../../assets/projectsInfo.js';

const ProjectCard = () => {
  const projectCardList = projectsInfo.map((val, index) => 
    <div class="card" key={index}>
      <h5 class="card-title">{val.project}</h5>
      <img class="card-img-top" src={val.image} alt={val.project} />
      <div class="card-body">
        <p class="card-text">
          {val.description}
        </p>
        <div class="card-resouce-links">
          {
            val.links.map((links, linksIndex) => 
              <a href={links.link} key={linksIndex}>
                <FontAwesomeIcon icon={links.icon} />
              </a>
            )
          }       
        </div>
        <div class="card-tech-used">
          <ul>
            {
              val.tech.map((techVal, techValIndex) => 
                <li key={techValIndex}>
                  {techVal}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
  

  return ( 
    <>
      {/* <div class="card">
        <h5 class="card-title">OverVue</h5>
        <img class="card-img-top" src={overvue} alt="overvue"/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="card-tech-used">
            Vue, Electron, TypeScript
          </div>
          <div className="card-resource-links">
            <a href='https://github.com/open-source-labs/OverVue/'>
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
            <a href='https://www.overvue.org/'>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#4d4d4e" />
            </a>
          </div>
        </div>
      </div> */}
      {projectCardList}
    </>
  )
}

export default ProjectCard
