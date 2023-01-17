import React from "react";
import './FeaturedProject.scss';
import projectsInfo from '../../../assets/projectsInfo.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Fade } from 'react-awesome-reveal';


const FeaturedProject = () => {
  // featured project is always first project in projectsInfo
  const featuredProject = projectsInfo[0];

  return (
      <div className="featured-project">
        <div className="projects__header">Featured Project - {featuredProject.project} </div>

        <div className="featured-project__image-wrapper">
          <img 
            src={featuredProject.image} 
            className="featured-project__image" 
            alt="featured-project-img"
          />

          <div className="featured-project__details">
            <div className="featured-project__card-description">
              Create Vue projects faster! 
            </div>
            <div className="featured-project__tech">
              {
                featuredProject.tech.map((tech, techIdx) => 
                  <span className="featured-project__tech-item" key={techIdx}>
                    {tech}
                  </span>
                )
              }
            </div>
            <div className="featured-project__link">
              {
                featuredProject.links.map((links, linksIndex) => 
                  <a 
                    className="featured-project__link-item" 
                    href={links.link} 
                    ey={linksIndex}
                  >
                    <FontAwesomeIcon icon={links.icon} />
                  </a>
                )
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default FeaturedProject

// featured-card-block --> featured-project

// featured-image-wrapper --> featured-project__image-wrapper
// card-img --> featured-project__image
// featured-project-content --> featured-project__details
// #featured-card-description --> featured-project__card-description
// #featured-project-tech-used --> featured-project__technology
// featured-project-tech-item --> featured-project__tech-item
// featured-card-resource-links --> featured-project__link
// featured-project-links --> featured-project__link-item