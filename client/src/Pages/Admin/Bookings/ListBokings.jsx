import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Alert, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

function ListBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchAllBookings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}bookings`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("Error fetching bookings. Please try again later.");
      }
    };

    fetchAllBookings();
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

  console.log(bookings, "bookings");

  return (
    <>
      {/* <Container className="my-5 p-0"> */}
      <h2 className="my-4">All Bookings</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Col md={4} key={booking._id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    {booking?.PropertyID?.PropertyName || "Unknown Property"}
                  </Card.Title>
                  <Card.Text>
                    <strong>Booking Date: </strong>
                    {new Date(booking.BookingDate).toLocaleDateString()}
                    <br />
                    <strong>Property Address: </strong>
                    {booking?.PropertyID?.AddressID
                      ? `${booking?.PropertyID?.AddressID?.City}, ${booking?.PropertyID?.AddressID?.Street}`
                      : "Address not available"}
                    <br />
                    <strong>Agent Name: </strong>
                    {booking?.PropertyID?.AgentID?.Name ||
                      "Agent not available"}
                    <br />
                    <strong>Booked By: </strong>
                    {booking.Name}
                    <br />
                    <strong>User Email: </strong>
                    {booking.Email}
                    <br />
                    <strong>User Phone: </strong>
                    {booking.Phone}
                  </Card.Text>
                  <Button
                    variant="danger"
                    className="text-white me-2"
                    onClick={() => handleRemoveBooking(booking._id)}
                  >
                    Remove Booking{" "}
                    <span>
                      <MdDelete size={25} />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No bookings available.</p>
          </Col>
        )}
      </Row>
      {/* </Container> */}
    </>
  );
}

export default ListBookings;
