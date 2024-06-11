const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  OTP: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
  },
  UserRoleId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});
// Define a function to send emails
async function sendVerificationEmail(Email, OTP) {
  try {
    const mailResponse = await mailSender(
      Email,
      "Email Verification via Otp",
      `Thank you for registering with NextGen Realty. To complete your registration, please use the following OTP code: <span style="color: blue;"><span>${OTP}</span></span></p>`
    );
    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}
// middleware - before saving a document
otpSchema.pre("save", async function (next) {
  console.log("New document saved to the database");
  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.Email, this.OTP);
  }
  next();
});
module.exports = mongoose.model("OTP", otpSchema);
