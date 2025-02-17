import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/projects`);
    setProjects(response.data);
  };

  const handleAddProject = async (project) => {
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/projects`, project);
    fetchProjects();
    setSelectedProject(null);
  };

  const handleEditProject = async (project) => {
    await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/projects/${project.id}`, project);
    fetchProjects();
    setSelectedProject(null);
  };

  const handleDeleteProject = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/projects/${id}`);
    fetchProjects();
  };

  const handleEditClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <button onClick={() => setSelectedProject({})}>Add Project</button>
      {selectedProject && (
        <ProjectForm
          project={selectedProject}
          onSave={selectedProject.id ? handleEditProject : handleAddProject}
        />
      )}
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.image_url && <img src={project.image_url} alt={project.title} />}
            <div className="project-buttons">
              <button onClick={() => handleEditClick(project)}>Edit</button>
              <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
