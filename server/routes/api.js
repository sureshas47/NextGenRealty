const express = require("express");
const router = express.Router();
const Agent = require("../models/Agent");
const Category = require("../models/Category");
const Address = require("../models/Address");
const Property = require("../models/Property");
const User = require("../models/User");

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().populate("UserRoleId", "RoleName");
    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Get all agents
router.get("/agents", async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Get all categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Get all addresses
router.get("/addresses", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/properties", async (req, res) => {
  console.log(req.query.category, "req query");
  try {
    const filterParams = {};
    if (req.query.category) {
      const categoryParam = req.query.category.replace(/^category=/, ""); // Remove 'category=' from the value
      // Fetch the category ObjectId by category name
      const category = await Category.findOne({
        CategoryName: categoryParam,
      });

      if (category) {
        // Use the category ObjectId to filter properties
        filterParams["CategoryID"] = category._id;
      } else {
        // If the category does not exist, return an empty array or handle it accordingly
        return res.json([]);
      }
    }

    // Find properties based on the filterParams, which may include the category filter
    const properties = await Property.find(filterParams)
      .populate("AgentID", "Name")
      .populate("CategoryID", "CategoryName")
      .populate("AddressID", "Country Province City Street HouseNo");

    console.log(
      properties,
      req.query.category ? "filtered properties" : "properties without filter"
    );
    res.json(properties); // Send the filtered or unfiltered properties as a JSON response
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/latestProperties", async (req, res) => {
  try {
    const latestProperties = await Property.find({})
      .sort({ createdAt: -1 }) //  sort by the latest
      .limit(4)
      .populate("AgentID", "Name")
      .populate("CategoryID", "CategoryName")
      .populate("AddressID", "Country Province City Street HouseNo");
    res.json(latestProperties);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
