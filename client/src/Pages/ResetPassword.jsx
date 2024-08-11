import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    Email: "",
    NewPassword: "",
    ConfirmPassword: "",
  });

  const BASE_URL = import.meta.env.VITE_API_URL;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (formData.NewPassword !== formData.ConfirmPassword) {
      setLoading(false);
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}password-reset`, {
        Email: formData.Email,
        NewPassword: formData.NewPassword,
      });
      if (response.status === 201) {
        setSuccess("Password reset successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error while resetting password", error);
      setError("Failed to reset password");
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit} data-aos="fade-up">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.Email}
              onChange={handleChange}
              name="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={formData.NewPassword}
              onChange={handleChange}
              name="NewPassword"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              name="ConfirmPassword"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
