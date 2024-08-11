import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Alert, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

function UserDashboard() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (userId) {
          const response = await axios.get(`${BASE_URL}bookings/${userId}`);
          setBookings(response.data);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("Error fetching bookings. Please try again later.");
      }
    };

    fetchBookings();
  }, []);

  const handleRemoveBooking = async (bookingId) => {
    try {
      await axios.delete(`${BASE_URL}bookings/${bookingId}`);
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
    } catch (error) {
      console.error("Error removing booking:", error);
      setError("Error removing booking. Please try again later.");
    }
  };

  // const handleUpdateBooking = (bookingId) => {
  //   console.log("Update booking with ID:", bookingId);
  // };

  return (
    <div>
      <Container className="my-5 py-5">
        <h2 className="mb-4">Your Bookings</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Row>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <Col md={6} lg={4} key={booking._id} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title className="text-primary fs-5 mb-3">
                      {booking.PropertyID.PropertyName}
                    </Card.Title>
                    <Card.Text className="mb-3">
                      <strong>Booking Date: </strong>
                      <span className="text-muted">
                        {new Date(booking.BookingDate).toLocaleDateString()}
                      </span>
                    </Card.Text>
                    <Card.Text className="mb-3">
                      <strong>Property Address: </strong>
                      <span className="text-muted">
                        {booking.PropertyID.AddressID
                          ? `${booking.PropertyID.AddressID.City}, ${booking.PropertyID.AddressID.Street}`
                          : "Address not available"}
                      </span>
                    </Card.Text>
                    <Card.Text className="mb-3">
                      <strong>Agent Name: </strong>
                      <span className="text-muted">
                        {booking.PropertyID.AgentID?.Name ||
                          "Agent not available"}
                      </span>
                    </Card.Text>
                    <Card.Text className="mb-4">
                      <strong>Booked By: </strong>
                      <span className="text-muted">{booking.Name}</span>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="danger"
                        className="text-white"
                        onClick={() => handleRemoveBooking(booking._id)}
                      >
                        Remove <MdDelete size={20} className="ms-1" />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center">You have no bookings yet.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default UserDashboard;
