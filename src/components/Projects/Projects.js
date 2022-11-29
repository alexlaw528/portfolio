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
        <h3 className="other-projects-header">Other Projects</h3>
        <div className="other-projects-section">
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects