import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/projects`)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <div className="projects">
      <h2>Our Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image_url} alt={project.project_name} />
            <h3>{project.project_name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
