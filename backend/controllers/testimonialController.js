const testimonialModel = require('../models/testimonialModel');

// Get all testimonials
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await testimonialModel.getAllTestimonials();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single testimonial by ID
const getTestimonialById = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await testimonialModel.getTestimonialById(id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new testimonial
const createTestimonial = async (req, res) => {
  try {
    const newTestimonial = await testimonialModel.addTestimonial(req.body);
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a testimonial
const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTestimonial = await testimonialModel.updateTestimonial(id, req.body);
    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a testimonial
const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTestimonial = await testimonialModel.deleteTestimonial(id);
    if (!deletedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
