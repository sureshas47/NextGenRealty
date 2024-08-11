import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${BASE_URL}login`, {
        Email: formData.Email,
        Password: formData.Password,
      });
      if (response.status === 200) {
        setLoading(false);
        const { UserName, _id } = response.data.data;
        console.log(UserName);
        localStorage.setItem("UserName", UserName);
        localStorage.setItem("userId", _id);
        setSuccess("Login Successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      if (response.status === 404) {
        setError("Email is not associated with any account");
        setLoading(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Email is not associated with any account");
        setLoading(false);
      } else {
        setError("Invalid email or password");
        setLoading(false);
      }
      console.error("Error while logging in", error);
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Login</h2>
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
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.Password}
              onChange={handleChange}
              name="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-3">
          Do not have an account? <Link to="/register">Register</Link>
        </p>
        <p className="text-center mt-3">
          Forgot Password? <Link to="/password/reset">Reset password</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
