import React from "react";
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard.js';

const Projects = () => {

  return (
    <>
      <div className="container projects-section">
        <h1 className="projects-section-header">02. My Projects</h1>
        <div className="projects-cards-section">
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects