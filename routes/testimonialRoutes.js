const express = require('express');
const testimonialController = require('../controllers/testimonialController');

const router = express.Router();

// GET all testimonials
router.get('/', testimonialController.getTestimonials);

// GET a single testimonial by ID
router.get('/:id', testimonialController.getTestimonialById);

// POST a new testimonial
router.post('/', testimonialController.createTestimonial);

// PUT to update a testimonial
router.put('/:id', testimonialController.updateTestimonial);

// DELETE a testimonial
router.delete('/:id', testimonialController.deleteTestimonial);

module.exports = router;
