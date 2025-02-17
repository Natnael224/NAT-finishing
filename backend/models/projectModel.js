const pool = require('../config/db');

// Get all projects
const getAllProjects = async () => {
  const query = 'SELECT * FROM projects';
  const { rows } = await pool.query(query);
  return rows;
};

// Get a single project by ID
const getProjectById = async (id) => {
  const query = 'SELECT * FROM projects WHERE id = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Add a new project
const addProject = async (project) => {
  const { title, description, image_url } = project;
  const query = `
    INSERT INTO projects (title, description, image_url)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [title, description, image_url];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Update a project
const updateProject = async (id, project) => {
  const { title, description, image_url } = project;
  const query = `
    UPDATE projects SET title = $1, description = $2, image_url = $3, updated_at = NOW()
    WHERE id = $4
    RETURNING *`;
  const values = [title, description, image_url, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Delete a project
const deleteProject = async (id) => {
  const query = 'DELETE FROM projects WHERE id = $1 RETURNING *';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
};
