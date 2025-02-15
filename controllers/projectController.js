const projectModel = require('../models/projectModel');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await projectModel.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectModel.getProjectById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new project
const createProject = async (req, res) => {
  try {
    const newProject = await projectModel.addProject(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await projectModel.updateProject(id, req.body);
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await projectModel.deleteProject(id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
