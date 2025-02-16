const contactModel = require('../models/contactModel');

// Create a new contact message
const createContact = async (req, res) => {
  try {
    const newContact = await contactModel.createContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createContact,
};
