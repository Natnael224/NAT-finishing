const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

// GET all services
router.get('/', serviceController.getServices);

// GET a single service by ID
router.get('/:id', serviceController.getServiceById);

// POST a new service
router.post('/', serviceController.createService);

// PUT to update a service
router.put('/:id', serviceController.updateService);

// DELETE a service
router.delete('/:id', serviceController.deleteService);

module.exports = router;
