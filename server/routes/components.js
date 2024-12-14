const express = require('express');
const Component = require('../models/Component');
const router = express.Router();

// Get all components
router.get('/', async (req, res) => {
  try {
    const components = await Component.find();
    res.json(components);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new component
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;

  const newComponent = new Component({
    name,
    description,
    price,
  });

  try {
    const savedComponent = await newComponent.save();
    res.status(201).json(savedComponent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Export the router
module.exports = router;
