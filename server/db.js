const mongoose = require("mongoose");
const dbURL =
  "mongodb+srv://bishaldhakal099:bishaldhakal099@cluster0.exlkhef.mongodb.net/capstone_nextgen?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("*** Connected to MongoDB ***");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
