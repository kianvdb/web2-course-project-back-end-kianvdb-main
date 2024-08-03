const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const Project = require('../models/Project');

// Create a new project
router.post('/create', authenticate, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// List all projects
router.get('/list', authenticate, async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).send(projects);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a project
router.delete('/:projectId', authenticate, async (req, res) => {
  const projectId = req.params.projectId;
  try {
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      return res.status(404).send('Project not found');
    }
    res.status(200).send(project);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Add project to favorites
router.post('/add-to-favorites/:projectId', authenticate, async (req, res) => {
  const projectId = req.params.projectId;
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).send('Project not found');
    }

    req.user.favoriteProjects.push(projectId);
    await req.user.save();

    res.status(200).send('Project added to favorites');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Remove project from favorites
router.post('/remove-from-favorites/:projectId', authenticate, async (req, res) => {
  const projectId = req.params.projectId;
  try {
    req.user.favoriteProjects = req.user.favoriteProjects.filter(
      (favProjectId) => favProjectId.toString() !== projectId
    );
    await req.user.save();
    res.status(200).send('Project removed from favorites');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get a specific project by ID
router.get('/:projectId', authenticate, async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).send({ error: 'Project not found' });
    }
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
