const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  PropertyID: {
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  AddressID: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
  AgentID: {
    type: Schema.Types.ObjectId,
    ref: "Agent",
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },

  BookingDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
