import React from "react";
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard.js';
import FeaturedProject from './FeaturedProject/FeaturedProject.js';
import { Fade } from "react-awesome-reveal";

const Projects = () => {

  return (
    <div className="mainpage-section projects" id="nav-projects">
        <Fade duration="2000">
          <h1 className="section-header">
            <span className="section-header-text">Projects</span>
          </h1>
          <FeaturedProject />
          <h3 className="projects__header">Other Projects</h3>
          <div className="projects__card-layout">
            <ProjectCard />
          </div>
        </Fade>
      </div>  
  )
}

export default Projects
