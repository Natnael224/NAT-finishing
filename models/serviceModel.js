const pool = require('../config/db');

// Get all services
const getAllServices = async () => {
  const query = 'SELECT * FROM services';
  const { rows } = await pool.query(query);
  return rows;
};

// Get a single service by ID
const getServiceById = async (id) => {
  const query = 'SELECT * FROM services WHERE id = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Add a new service
const addService = async (service) => {
  const { service_name, price, description, image_url } = service;
  const query = `
    INSERT INTO services (service_name, price, description, image_url)
    VALUES ($1, $2, $3, $4)
    RETURNING *`;
  const values = [service_name, price, description, image_url];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Update a service
const updateService = async (id, service) => {
  const { service_name, price, description, image_url } = service;
  const query = `
    UPDATE services SET service_name = $1, price = $2, description = $3, image_url = $4, updated_at = NOW()
    WHERE id = $5
    RETURNING *`;
  const values = [service_name, price, description, image_url, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Delete a service
const deleteService = async (id) => {
  const query = 'DELETE FROM services WHERE id = $1 RETURNING *';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = {
  getAllServices,
  getServiceById,
  addService,
  updateService,
  deleteService,
};
