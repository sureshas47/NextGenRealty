import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  React.useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/save-contact",
        formData
      );
      console.log("Contact form submitted:", response.data);

      // Check if response is successful
      if (response.status === 200) {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage(""); // Clear any previous error messages
      } else {
        setErrorMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9" data-aos="fade-up" data-aos-delay="200">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="mb-5"
              aria-label="Contact Form"
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  {/* Adding labels for better accessibility */}
                  {/* Accessible Forms with individual labels, placeholders */}
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Eg. John Doe"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Adding labels for better accessibility */}
                {/* Accessible Forms with individual labels, placeholders */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Eg. john@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Adding labels for better accessibility */}
                {/* Accessible Forms with individual labels, placeholders */}
                <div className="col-12 mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Eg. Inquiry about your services"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Adding labels for better accessibility */}
                {/* Accessible Forms with individual labels, placeholders */}
                <div className="col-12 mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>

            {/* Success and Error Messages */}
            {successMessage && (
              <div className="alert alert-success mt-3" role="alert">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-3" role="alert">
                {errorMessage}
              </div>
            )}
          </div>
          <div
            className="col-lg-3 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Contact Info */}
            <div className="contact-info">
              <div className="address mt-2">
                <i className="icon-room"></i>
                <h4 className="mb-2">Location:</h4>
                <p>
                  43 Raymouth Rd. Baltimore,
                  <br />
                  London 3910
                </p>
              </div>

              <div className="open-hours mt-4">
                <i className="icon-clock-o"></i>
                <h4 className="mb-2">Open Hours:</h4>
                <p>
                  Sunday-Friday:
                  <br />
                  11:00 AM - 11:00 PM
                </p>
              </div>

              <div className="email mt-4">
                <i className="icon-envelope"></i>
                <h4 className="mb-2">Email:</h4>
                <p>info@Untree.co</p>
              </div>

              <div className="phone mt-4">
                <i className="icon-phone"></i>
                <h4 className="mb-2">Call:</h4>
                <p>+1 1234 55488 55</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
