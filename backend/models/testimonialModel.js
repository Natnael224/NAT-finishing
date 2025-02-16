const pool = require('../config/db');

// Get all testimonials
const getAllTestimonials = async () => {
  const query = 'SELECT * FROM testimonials';
  const { rows } = await pool.query(query);
  return rows;
};

// Get a single testimonial by ID
const getTestimonialById = async (id) => {
  const query = 'SELECT * FROM testimonials WHERE testimonial_id = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Add a new testimonial
const addTestimonial = async (testimonial) => {
  const { customer_name, feedback, rating } = testimonial;
  const query = `
    INSERT INTO testimonials (customer_name, feedback, rating)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [customer_name, feedback, rating];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Update a testimonial
const updateTestimonial = async (id, testimonial) => {
  const { customer_name, feedback, rating } = testimonial;
  const query = `
    UPDATE testimonials SET customer_name = $1, feedback = $2, rating = $3, updated_at = NOW()
    WHERE testimonial_id = $4
    RETURNING *`;
  const values = [customer_name, feedback, rating, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Delete a testimonial
const deleteTestimonial = async (id) => {
  const query = 'DELETE FROM testimonials WHERE testimonial_id = $1 RETURNING *';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = {
  getAllTestimonials,
  getTestimonialById,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
