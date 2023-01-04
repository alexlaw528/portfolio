import React from "react";
import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import projectsInfo from '../../../assets/projectsInfo.js';
const otherProjects = projectsInfo.slice(1, projectsInfo.length); 

const ProjectCard = () => {
  const projectCardList = otherProjects.map((project, index) => 
      <article class="postcard dark green">
        <img class="postcard__img" src={project.image} alt="Title" />
        <div class="postcard__text">
          <h1 class="postcard__title green">{project.project}</h1>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">{project.description}</div>
          <ul class="postcard__tagbox">
            {
              project.tech.map((tech, techIdx) => 
                <li class="tag__tech">{tech}</li>
              )
            }
          </ul>
          <ul class="postcard__tagbox">
            {
              project.links.map((link, linkIdx) => 
                <li class="tag__item">
                  <a href={link.link}>
                    <FontAwesomeIcon icon={link.icon} />
                  </a>
                </li>
              )
            }
          </ul>
        </div>
      </article>
  )
  

  return ( 
    <section class="dark">
      <div class="mainpage-section py-4">
        {projectCardList}
      </div>
    </section>
  )
}

export default ProjectCard
