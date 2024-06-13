const {
  loginUser,
  registerUser,
  createRole,
  getRoles,
  getUsers,
  resetPassword,
  sendOTP,
  verifyOTP,
} = require("../controller/user");
const userRoute = (app) => {
  app.post("/api/v1/role", (req, res) => {
    createRole(req, res);
  });
  app.get("/api/v1/role", (req, res) => {
    getRoles(req, res);
  });
  app.get("/api/v1/users", (req, res) => {
    getUsers(req, res);
  });
  app.post("/api/v1/login", (req, res) => loginUser(req, res));
  app.post("/api/v1/send-otp", (req, res) => sendOTP(req, res));
  app.post("/api/v1/verify-otp", (req, res) => verifyOTP(req, res)); // verify otp and register
  app.post("/api/v1/password-reset", (req, res) => resetPassword(req, res));
};

module.exports = userRoute;
