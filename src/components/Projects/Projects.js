import React from "react";
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard.js';

const Projects = () => {

  return (
    <>
      <div className="container projects-section">
        <h1 className="section-header"><span className="section-header-text">My Projects</span></h1>
        <div className="projects-cards-section">
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects