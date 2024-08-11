import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
    Cpassword: "",
    Email: "",
    UserRoleId: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch roles from the server
    axios
      .get(`${BASE_URL}role`)
      .then((response) => {
        setRoles(response.data.data);
      })
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (formData.Password !== formData.Cpassword) {
      setLoading(false);
      setError("Passwords do not match");
      return;
    }

    // Remove Cpassword before sending data to the backend
    const { Cpassword, ...userData } = formData;

    try {
      localStorage.setItem("RegisterUserData", JSON.stringify(userData)); // Store register user data in local storage
      const response = await axios.post(`${BASE_URL}send-otp`, userData);
      if (response.status === 200) {
        setLoading(false);
        setSuccess("Otp sent successfully, check your email");
        setTimeout(() => {
          navigate("/otp-verify");
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      setError("Error registering user: " + error.message);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} data-aos="fade-up">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Cpassword"
              name="Cpassword"
              value={formData.Cpassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserRoleId" className="form-label">
              Role
            </label>
            <select
              className="form-control"
              id="UserRoleId"
              name="UserRoleId"
              value={formData.UserRoleId}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              {roles?.map((role) => (
                <option key={role._id} value={role._id}>
                  {role.RoleName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
