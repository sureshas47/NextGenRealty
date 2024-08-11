import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";
import {
  CRow,
  CCol,
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CBadge,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilSpeedometer,
  cilPuzzle,
  cilCloudDownload,
  cilLayers,
  cilArrowTop,
  cilOptions,
} from "@coreui/icons";
import { CChartLine, CChartBar } from "@coreui/react-chartjs";
import axios from "axios";

function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [topBookings, setTopBookings] = useState([]);
  const [bookingsCount, setBookingsCount] = useState(0);
  const [propertiesCount, setPropertiesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL;

  const getBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}bookings`);
      setBookingsCount(res?.data?.length);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error in getting bookings");
    }
  };

  const getInquiries = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}inquiries`);
      setContacts(res.data.contact);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error in getting inquiries");
    }
  };

  const getProperties = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}properties`);
      setPropertiesCount(res.data.length);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error in getting properties");
    }
  };

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}users`);
      setUsersCount(res.data.length);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error in getting users");
    }
  };

  const fetchTopBookings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}top-bookings`);
      setTopBookings(response.data);
    } catch (error) {
      console.error("Error fetching top bookings:", error);
    }
  };

  useEffect(() => {
    getInquiries();
    getBookings();
    getProperties();
    getUsers();
    fetchTopBookings();
  }, []);

  loading && <div>Loading...</div>;

  return (
    <>
      <CRow className="my-4">
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={
              <>
                <span className="me-2">{bookingsCount}</span>
                <span className="fs-6 fw-normal">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Booking Counts"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#5856d6",
                      data: [65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      border: {
                        display: false,
                      },
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 30,
                      max: 89,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>

        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="info"
            value={
              <>
                <span className="me-2">{contacts.length}</span>
                <span className="fs-6 fw-normal">
                  (30% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Inquiry Counts"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#39f",
                      data: [1, 18, 9, 17, 34, 22, 11],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      border: {
                        display: false,
                      },
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: -9,
                      max: 39,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={
              <>
                <span className="me-2">{propertiesCount}</span>
                <span className="fs-6 fw-normal">
                  (35.5% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Property Counts"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={
              <>
                <span className="me-2">{usersCount}</span>
                <span className="fs-6 fw-normal">
                  (20.7% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="User Counts"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#fa0",
                      data: [65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
      </CRow>

      <Row>
        {/* First Column */}
        <Col sm={12} md={6} lg={8}>
          <h3 className="mb-4">Top 3 Recent Bookings</h3>
          <Row>
            {topBookings.length > 0 ? (
              topBookings.map((booking, index) => (
                <Col
                  key={booking._id}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={4}
                  xxl={4}
                  className="mb-4"
                >
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title className="text-primary fs-5 mb-3">
                        By: {booking.Name}
                      </Card.Title>
                      <Card.Text className="mb-3">
                        <strong className="me-2">Property:</strong>
                        <span className="text-muted">
                          {booking.PropertyID?.PropertyName || "N/A"}
                        </span>
                      </Card.Text>
                      <Card.Text className="mb-3">
                        <strong className="me-2">Booking Date:</strong>
                        <span className="text-muted">
                          {new Date(booking.BookingDate).toLocaleDateString()}
                        </span>
                      </Card.Text>
                      <Card.Text className="mb-3">
                        <strong className="me-2">Agent:</strong>
                        <span className="text-muted">
                          {booking.PropertyID.AgentID?.Name || "N/A"}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <Badge bg="primary" className=" p-2">
                          Booked
                        </Badge>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center">No bookings available.</p>
              </Col>
            )}
          </Row>
        </Col>
        {/* Second Column */}
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Inquiries</Card.Title>
              <ListGroup variant="flush">
                {contacts.length > 0 ? (
                  contacts.map((contact, index) => (
                    <ListGroup.Item key={index}>
                      <div className="d-flex align-items-start">
                        <Image
                          src="https://via.placeholder.com/50" // Static avatar image
                          roundedCircle
                          className="me-3"
                        />
                        <div>
                          <h5>{contact.name}</h5>
                          <p>Email: {contact.email}</p>
                          <p>Subject: {contact.subject}</p>
                          <p>Message: {contact.message}</p>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No inquiries found</ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
