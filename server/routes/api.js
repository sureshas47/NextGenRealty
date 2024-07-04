const express = require('express');
const router = express.Router();
const Agent = require('../models/Agent');
const Category = require('../models/Category');
const Address = require('../models/Address');

// Get all agents
router.get('/agents', async (req, res) => {
    try {
        const agents = await Agent.find();
        res.json(agents);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Get all addresses
router.get('/addresses', async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;