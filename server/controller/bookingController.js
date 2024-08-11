const mongoose = require("mongoose");
const Property = require("../models/Property");
const Booking = require("../models/Booking");

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    // Extract data from the request body
    const { userId, propertyId, name, email, phone, bookingDate } = req.body;

    // Create a new property instance
    const booking = new Booking({
      UserID: userId,
      PropertyID: propertyId,
      Name: name,
      Email: email,
      Phone: phone,
      BookingDate: bookingDate,
    });

    // Save the booking to the database
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    // populate the user and property details -nested
    const bookings = await Booking.find()
      .populate({
        path: "PropertyID",
        populate: [
          {
            path: "AddressID",
            model: "Address",
          },
          {
            path: "AgentID",
            model: "Agent",
          },
        ],
      })
      .populate("UserID");

    res.json(bookings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get all bookings of user
exports.getBookingOfUser = async (req, res) => {
  console.log(req.params.userId, "userid in user-dashboard");
  try {
    // populate the user and property details -nested
    const bookings = await Booking.find({ UserID: req.params.userId })
      .populate({
        path: "PropertyID",
        populate: [
          {
            path: "AddressID",
            model: "Address",
          },
          {
            path: "AgentID",
            model: "Agent",
          },
        ],
      })
      .populate("UserID");

    res.json(bookings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
  console.log(req.params.bookingId, "booking id");

  try {
    const BookingID = req.params.bookingId;
    const deletedBooking = await Booking.findByIdAndDelete(BookingID);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting booking",
      error: err.message,
    });
  }
};

exports.getTopBookings = async (req, res) => {
  try {
    // Fetch top 3 bookings based on most recently created
    const topBookings = await Booking.find()
      .sort({ createdAt: -1 }) // sorting by createdAt in descending order
      .limit(3)
      .populate({
        path: "PropertyID",
        populate: [
          {
            path: "AddressID",
            model: "Address",
          },
          {
            path: "AgentID",
            model: "Agent",
          },
        ],
      })
      .populate("UserID");

    res.json(topBookings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
