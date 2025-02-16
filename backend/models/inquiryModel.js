const pool = require('../config/db');

// Get all inquiries
const getAllInquiries = async () => {
  const query = 'SELECT * FROM inquiries';
  const { rows } = await pool.query(query);
  return rows;
};

// Get a single inquiry by ID
const getInquiryById = async (id) => {
  const query = 'SELECT * FROM inquiries WHERE inquiry_id = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Add a new inquiry
const addInquiry = async (inquiry) => {
  const { customer_name, email, phone, message, inquiry_date } = inquiry;
  const query = `
    INSERT INTO inquiries (customer_name, email, phone, message, inquiry_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;
  const values = [customer_name, email, phone, message, inquiry_date];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Update an inquiry
const updateInquiry = async (id, inquiry) => {
  const { customer_name, email, phone, message, inquiry_date } = inquiry;
  const query = `
    UPDATE inquiries SET customer_name = $1, email = $2, phone = $3, message = $4, inquiry_date = $5, updated_at = NOW()
    WHERE inquiry_id = $6
    RETURNING *`;
  const values = [customer_name, email, phone, message, inquiry_date, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Delete an inquiry
const deleteInquiry = async (id) => {
  const query = 'DELETE FROM inquiries WHERE inquiry_id = $1 RETURNING *';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = {
  getAllInquiries,
  getInquiryById,
  addInquiry,
  updateInquiry,
  deleteInquiry,
};
