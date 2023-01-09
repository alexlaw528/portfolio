import React from "react";
import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import projectsInfo from '../../../assets/projectsInfo.js';
const otherProjects = projectsInfo.slice(1, projectsInfo.length); 

const ProjectCard = () => {
  const projectCardList = otherProjects.map((project, index) => 
      <article className="postcard dark green" key={index}>
        <img className="postcard__img" src={project.image} alt="Title" />
        <div className="postcard__text">
          <h1 className="postcard__title green">{project.project}</h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{project.description}</div>
          <ul className="postcard__tagbox">
            {
              project.tech.map((tech, techIdx) => 
                <li className="tag__tech">{tech}</li>
              )
            }
          </ul>
          <ul className="postcard__tagbox">
            {
              project.links.map((link, linkIdx) => 
                <li className="tag__item">
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
    <section className="dark">
      <div className="py-4">
        {projectCardList}
      </div>
    </section>
  )
}

export default ProjectCard
