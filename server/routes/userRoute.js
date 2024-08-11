// const {
//   loginUser,
//   // registerUser,
//   createRole,
//   getRoles,
//   getUsers,
//   resetPassword,
//   sendOTP,
//   verifyOTP,
//   saveContactDetails,
//   getContactDetails,
// } = require("../controller/user");
// const userRoute = (app) => {
//   app.post("/api/v1/role", (req, res) => {
//     createRole(req, res);
//   });
//   app.get("/api/v1/role", (req, res) => {
//     getRoles(req, res);
//   });
//   app.get("/api/v1/users", (req, res) => {
//     getUsers(req, res);
//   });
//   app.post("/api/v1/login", (req, res) => loginUser(req, res));
//   app.post("/api/v1/send-otp", (req, res) => sendOTP(req, res));
//   app.post("/api/v1/verify-otp", (req, res) => verifyOTP(req, res)); // verify otp and register
//   app.post("/api/v1/password-reset", (req, res) => resetPassword(req, res));
//   app.post("/api/v1/save-contact", (req, res) => saveContactDetails(req, res));
//   app.get("/api/v1/inquiries", (req, res) => getContactDetails(req, res));
// };

// module.exports = userRoute;

const express = require("express");
const router = express.Router();
const user = require("../controller/user");

// router.post("/role", user.createRole);
router.get("/role", user.getRoles);
// router.get("/users", user.getUsers);
router.post("/login", user.loginUser);
router.post("/send-otp", user.sendOTP);
router.post("/verify-otp", user.verifyOTP);
// otp and register
router.post("/password-reset", user.resetPassword);
router.post("/save-contact", user.saveContactDetails);
router.get("/inquiries", user.getContactDetails);

module.exports = router;
