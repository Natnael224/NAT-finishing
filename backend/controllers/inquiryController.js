const inquiryModel = require('../models/inquiryModel');

// Get all inquiries
const getInquiries = async (req, res) => {
  try {
    const inquiries = await inquiryModel.getAllInquiries();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single inquiry by ID
const getInquiryById = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await inquiryModel.getInquiryById(id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    res.status(200).json(inquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new inquiry
const createInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newInquiry = await inquiryModel.addInquiry({
      customer_name: name,
      email,
      phone: '',
      message,
      inquiry_date: new Date()
    });
    res.status(201).json(newInquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an inquiry
const updateInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInquiry = await inquiryModel.updateInquiry(id, req.body);
    if (!updatedInquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    res.status(200).json(updatedInquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an inquiry
const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInquiry = await inquiryModel.deleteInquiry(id);
    if (!deletedInquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getInquiries,
  getInquiryById,
  createInquiry,
  updateInquiry,
  deleteInquiry,
};
