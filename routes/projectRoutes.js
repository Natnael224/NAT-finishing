const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

// GET all projects
router.get('/', projectController.getProjects);

// GET a single project by ID
router.get('/:id', projectController.getProjectById);

// POST a new project
router.post('/', projectController.createProject);

// PUT to update a project
router.put('/:id', projectController.updateProject);

// DELETE a project
router.delete('/:id', projectController.deleteProject);

module.exports = router;
