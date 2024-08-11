import React from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${BASE_URL}save-contact`, values);
      console.log("Contact form submitted:", response.data);

      if (response.status === 200) {
        toast.success("We received your inquiry, we will contact you soon.");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9" data-aos="fade-up" data-aos-delay="200">
            {/* Contact Form */}
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values, { setSubmitting });
              }}
            >
              {({ isSubmitting }) => (
                <Form className="mb-5" aria-label="Contact Form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name">Your Name</label>
                      <Field
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Eg. John Doe"
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email">Your Email</label>
                      <Field
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Eg. john@gmail.com"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="subject">Subject</label>
                      <Field
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Eg. Inquiry about your services"
                        name="subject"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="message">Message</label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Write your message here..."
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
