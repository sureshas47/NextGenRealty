const mongoose = require("mongoose");
const Agent = require("./models/Agent");
const Address = require("./models/Address");
const Category = require("./models/Category");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const createAgents = async () => {
  const agents = [
    {
      Name: "Myles Bromillow",
      Description: "Experienced agent",
      FbLink: "http://facebook.com/agent1",
      InstaLink: "http://instagram.com/agent1",
      TwitterLink: "http://twitter.com/agent1",
      Image: "agent1.jpg",
    },
    {
      Name: "Danial Smith",
      Description: "New agent",
      FbLink: "http://facebook.com/agent2",
      InstaLink: "http://instagram.com/agent2",
      TwitterLink: "http://twitter.com/agent2",
      Image: "agent2.jpg",
    },
  ];

  await Agent.insertMany(agents);
  console.log("Agents created");
};

const createCategories = async () => {
  const categories = [
    {
      CategoryName: "House",
    },
    {
      CategoryName: "Apartment",
    },
    {
      CategoryName: "Condo",
    },
  ];

  await Category.insertMany(categories);
  console.log("Categories created");
};

const createAddresses = async () => {
  // add canada ontario  address of kitchener, waterloo, cambridge toronto

  const addresses = [
    {
      Country: "Canada",
      Province: "Ontario",
      City: "Kitchener",
      Street: "123 King St",
      HouseNo: "123",
    },
    {
      Country: "Canada",
      Province: "Ontario",
      City: "Waterloo",
      Street: "456 King St",
      HouseNo: "456",
    },
    {
      Country: "Canada",
      Province: "Ontario",
      City: "Cambridge",
      Street: "789 King St",
      HouseNo: "789",
    },
    {
      Country: "Canada",
      Province: "Ontario",
      City: "Toronto",
      Street: "101 King St",
      HouseNo: "101",
    },
  ];

  await Address.insertMany(addresses);
  console.log("Addresses created");
};

const runMigrations = async () => {
  await connectDB();
  await createAgents();
  await createCategories();
  await createAddresses();
  mongoose.disconnect();
  console.log("Migrations completed");
};

runMigrations().catch((err) => console.error(err));
