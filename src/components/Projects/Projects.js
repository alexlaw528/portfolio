import React from "react";
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard.js';
import FeaturedProject from './FeaturedProject/FeaturedProject.js';

const Projects = () => {

  return (
    <>
      <div className="container projects-section">
        <h1 className="section-header"><span className="section-header-text">Projects</span></h1>
        <FeaturedProject />

        <div className="other-projects-section">
          <h3 className="other-projects-header">Other Projects</h3>
          <div className="other-projects-card-grid">
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects