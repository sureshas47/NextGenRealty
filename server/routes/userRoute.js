const {
  loginUser,
  registerUser,
  createRole,
  getRoles,
  getUsers,
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
  app.post("/api/v1/register", (req, res) => registerUser(req, res));
};

module.exports = userRoute;
