import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOTP] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOTP(e.target.value);
    setError(""); // Clear error message when OTP input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/verify-otp",
        { otp }
      );
      if (response.status === 201) {
        setSuccess("OTP verified successfully");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Invalid OTP. Please try again."); // Set error message for invalid OTP
      } else {
        setError("Failed to verify OTP. Please try again."); // Set generic error message
      }
    }
  };

  const isOTPValid = otp.trim() !== ""; // Check if OTP input is not empty

  return (
    <div className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Splide options={{ perPage: 1, arrows: false }}>
              <SplideSlide>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  {success && (
                    <div className="alert alert-success">{success}</div>
                  )}
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary mt-3 btn-block"
                    disabled={!isOTPValid} // Disable button if OTP is empty
                  >
                    Verify OTP
                  </button>
                </form>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
