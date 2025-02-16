const express = require('express');
const inquiryController = require('../controllers/inquiryController');

const router = express.Router();

// GET all inquiries
router.get('/', inquiryController.getInquiries);

// GET a single inquiry by ID
router.get('/:id', inquiryController.getInquiryById);

// POST a new inquiry
router.post('/', inquiryController.createInquiry);

// PUT to update an inquiry
router.put('/:id', inquiryController.updateInquiry);

// DELETE an inquiry
router.delete('/:id', inquiryController.deleteInquiry);

module.exports = router;
