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
  const { project_name, start_date, end_date, budget, description, image_url } = project;
  const query = `
    INSERT INTO projects (project_name, start_date, end_date, budget, description, image_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;
  const values = [project_name, start_date, end_date, budget, description, image_url];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Update a project
const updateProject = async (id, project) => {
  const { project_name, start_date, end_date, budget, description, image_url } = project;
  const query = `
    UPDATE projects SET project_name = $1, start_date = $2, end_date = $3, budget = $4, description = $5, image_url = $6, updated_at = NOW()
    WHERE id = $7
    RETURNING *`;
  const values = [project_name, start_date, end_date, budget, description, image_url, id];
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
