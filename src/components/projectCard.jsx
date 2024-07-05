// src/ProjectCard.js
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card " data-category={project.category}>
      <img
        src={project.image}
        alt={project.title}
        className="w-80 h-80 object-cover rounded-lg"
      />
      <h3 className="text-red text-lg font-Texterius text-center">
        {project.title}
      </h3>
      <p className="text-red text-lg font-Texterius text-center">
        {project.skillLevel}
      </p>
      <div className="text-center">
        <a className="text-red text-lg font-Texterius" href={project.link}>
          Tutorial here
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
