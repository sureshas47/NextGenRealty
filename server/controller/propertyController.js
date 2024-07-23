const mongoose = require('mongoose');
const Property = require('../models/Property');
const upload = require('../upload');


// Create a new property with image upload
exports.createProperty = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({
                message: err
            });
        }

        try {
            // Extract data from the request body
            const {
                PropertyName,
                Description,
                Price,
                BedsCount,
                BathCount,
                AgentID,
                CategoryID,
                AddressID,
                Image
            } = req.body;

            // Create a new property instance
            const property = new Property({
                PropertyName,
                Description,
                Price,
                BedsCount,
                BathCount,
                AgentID: new mongoose.Types.ObjectId(AgentID),
                CategoryID: new mongoose.Types.ObjectId(CategoryID),
                AddressID: new mongoose.Types.ObjectId(AddressID),
                Image,
            });

            // Save the property to the database
            await property.save();
            res.status(201).json(property);
        } catch (err) {
            res.status(400).json({
                message: err.message,
            });
        }
    });
};

// Get all properties
exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate('AgentID CategoryID AddressID');
        res.json(properties);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Get a single property
exports.getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('AgentID CategoryID AddressID');
        if (!property) return res.status(404).json({
            message: 'Property not found'
        });
        res.json(property);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

exports.updateProperty = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({
                message: err
            });
        }

        try {
            // Extract data from the request body
            const {
                PropertyName,
                Description,
                Price,
                BedsCount,
                BathCount,
                AgentID,
                CategoryID,
                AddressID,
                Image
            } = req.body;



            const updatedData = {
                PropertyName,
                Description,
                Price,
                BedsCount,
                BathCount,
                AgentID: new mongoose.Types.ObjectId(AgentID),
                CategoryID: new mongoose.Types.ObjectId(CategoryID),
                AddressID: new mongoose.Types.ObjectId(AddressID),
                Image,
            };

            // Find and update the property in the database
            const property = await Property.findByIdAndUpdate(
                req.params.id,
                updatedData, {
                    new: true
                }
            );

            if (!property) {
                return res.status(404).json({
                    message: 'Property not found',
                });
            }

            res.json(property);
        } catch (err) {
            res.status(400).json({
                message: err.message,
            });
        }
    });
};

// Get a single property
exports.getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('AgentID CategoryID AddressID');
        if (!property) return res.status(404).json({
            message: 'Property not found'
        });
        res.json(property);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Delete a property
exports.deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) return res.status(404).json({
            message: 'Property not found'
        });
        res.json({
            message: 'Property deleted'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};