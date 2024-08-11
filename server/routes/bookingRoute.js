const express = require("express");
const router = express.Router();
const bookingController = require("../controller/bookingController");

router.post("/booking", bookingController.createBooking);
router.get("/bookings", bookingController.getBookings);
router.get("/bookings/:userId", bookingController.getBookingOfUser);
router.delete("/bookings/:bookingId", bookingController.deleteBooking);
router.get("/top-bookings", bookingController.getTopBookings);

module.exports = router;
