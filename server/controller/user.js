const RoleModel = require("../models/Role");
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const OTPModel = require("../models/Otp");

const createRole = async (req, res) => {
  try {
    const { RoleName } = req.body;
    const role = new RoleModel({
      RoleName,
    });
    await role.save();
    res.status(201).json({ message: "role created successfully" });
  } catch (error) {
    console.log(error, "error in creating role");
  }
};

const getRoles = async (req, res) => {
  try {
    const roles = await RoleModel.find();
    res.status(200).json({ data: roles, message: "role fetched successfully" });
  } catch (error) {
    console.log(error, "error in fetching role");
  }
};

const loginUser = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await UserModel.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      } else {
        return res.status(200).json({ data: user, message: "login success" });
      }
    }
  } catch (error) {
    console.log(error, "error in login user");
  }
};

const getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json({ data: users, message: "users fetched successfully" });
};

// otp generation
const sendOTP = async (req, res) => {
  try {
    const { Email } = req.body;
    // Check if user is already present
    const isUser = await UserModel.findOne({ Email });
    if (isUser) {
      return res.status(401).json({
        success: false,
        message: "User is already registered",
      });
    }
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTPModel.findOne({ otp: otp }); // Check if otp is already present
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await OTPModel.findOne({ otp: otp });
    }
    // save otp in database
    const otpBody = await OTPModel({
      email: Email,
      otp: otp,
    });
    await otpBody.save();
    console.log(otpBody);
    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otpBody,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
//

const registerUser = async (req, res) => {
  try {
    const { UserName, Password, Email, UserRoleId, otp } = req.body;
    const isUser = await UserModel.findOne({ Email });
    if (isUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // Find the most recent OTP for the email
    const response = await OTPModel.find({ Email })
      .sort({ createdAt: -1 })
      .limit(1);
    if (response.length === 0 || otp !== response[0].otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(Password, 10);
    const user = new UserModel({
      UserName,
      Password: hashedPassword,
      Email,
      UserRoleId,
    });
    await user.save();

    res
      .status(201)
      .json({ data: user, message: "user registered successfully" });
  } catch (error) {
    console.log("error in registering user", error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { Email, NewPassword } = req.body;
    const isUserExist = await UserModel.findOne({ Email });
    if (!isUserExist) {
      return res.status(404).json({ message: "Email not found" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(NewPassword, 10);
    const user = new UserModel({
      Email,
      UserName: isUserExist.UserName,
      Password: hashedPassword,
    });
    await user.save();
    res
      .status(201)
      .json({ data: user, message: "Password reset successfully" });
  } catch (error) {
    console.log("error in resetting user", error);
  }
};
module.exports = {
  createRole,
  loginUser,
  registerUser,
  getRoles,
  getUsers,
  resetPassword,
  sendOTP,
};
