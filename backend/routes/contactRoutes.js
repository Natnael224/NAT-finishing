const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

// POST a contact message
router.post('/', contactController.createContact);

module.exports = router;
