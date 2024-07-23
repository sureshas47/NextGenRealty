const express = require('express');
const router = express.Router();
const Agent = require('../models/Agent');
const Category = require('../models/Category');
const Address = require('../models/Address');
const Property = require('../models/Property');
const User = require('../models/User');


// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().populate('UserRoleId', 'RoleName');
        res.json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

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

router.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find()
            .populate('AgentID', 'Name')
            .populate('CategoryID', 'CategoryName')
            .populate('AddressID', 'Country Province City Street HouseNo');
        res.json(properties);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;