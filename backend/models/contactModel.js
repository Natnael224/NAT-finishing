const pool = require('../config/db');

// Create a new contact message
const createContact = async (contact) => {
  const { name, email, message } = contact;
  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [name, email, message];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = {
  createContact,
};
