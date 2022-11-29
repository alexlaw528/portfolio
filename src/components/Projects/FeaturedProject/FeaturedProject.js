import React from "react";
import './FeaturedProject.scss';
import projectsInfo from '../../../assets/projectsInfo.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FeaturedProject = () => {
  // featured project is always first project in projectsInfo
  const featuredProject = projectsInfo[0];

  return (
      <div class="featured-card-block">
        <div class="featured-heading-block">
          <div class="featured-heading">Featured Project - {featuredProject.project} </div>
        </div>

        <div class="featured-image-wrapper">
          <img src={featuredProject.image} class="card-img" id="featured-card-image" alt="featured Project img"/>

          <div class="featured-bg"></div>

          <div class="featured-project-content">
            {/* <h5 class="card-title" id="featured-card-title">{featuredProject.project}</h5> */}
            <p class="card-text" id="featured-card-description">Vue frontend prototyping tool used for fast prototyping and project initialization</p>
            <div id="featured-project-tech-used">
              {
                featuredProject.tech.map((tech, techIdx) => 
                  <span class="featured-project-tech-item" key={techIdx}>
                    {tech}
                  </span>
                )
              }
            </div>
            <div id="featured-card-resource-links">
              {
                featuredProject.links.map((links, linksIndex) => 
                  <a class="featured-project-links" href={links.link} key={linksIndex}>
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