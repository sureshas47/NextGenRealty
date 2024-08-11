// const RoleModel = require("../models/Role");
// const UserModel = require("../models/User");
// const bcrypt = require("bcrypt");
// const otpGenerator = require("otp-generator");
// const OTPModel = require("../models/Otp");
// const ContactModel = require("../models/Contact");

// const createRole = async (req, res) => {
//   try {
//     const { RoleName } = req.body;
//     const role = new RoleModel({
//       RoleName,
//     });
//     await role.save();
//     res.status(201).json({ message: "role created successfully" });
//   } catch (error) {
//     console.log(error, "error in creating role");
//   }
// };

// const getRoles = async (req, res) => {
//   try {
//     const roles = await RoleModel.find();
//     res.status(200).json({ data: roles, message: "role fetched successfully" });
//   } catch (error) {
//     console.log(error, "error in fetching role");
//   }
// };

// const loginUser = async (req, res) => {
//   const { Email, Password } = req.body;
//   try {
//     const user = await UserModel.findOne({ Email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     } else {
//       const isMatch = await bcrypt.compare(Password, user.Password);
//       if (!isMatch) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       } else {
//         return res.status(200).json({ data: user, message: "login success" });
//       }
//     }
//   } catch (error) {
//     console.log(error, "error in login user");
//   }
// };

// const getUsers = async (req, res) => {
//   const users = await UserModel.find();
//   res.status(200).json({ data: users, message: "users fetched successfully" });
// };

// // otp generation
// const sendOTP = async (req, res) => {
//   try {
//     const { Email, Password, UserName, UserRoleId } = req.body;
//     let OTP = otpGenerator.generate(6, {
//       upperCaseAlphabets: false,
//       lowerCaseAlphabets: false,
//       specialChars: false,
//     });
//     let result = await OTPModel.findOne({ OTP }); // Check if otp is already present
//     while (result) {
//       OTP = otpGenerator.generate(6, {
//         upperCaseAlphabets: false,
//       });
//       result = await OTPModel.findOne({ OTP });
//     }
//     // save otp with data in database
//     const userDataWithOtp = await OTPModel({
//       Email,
//       Password,
//       UserName,
//       UserRoleId,
//       OTP,
//     });
//     await userDataWithOtp.save();
//     console.log(userDataWithOtp);
//     res.status(200).json({
//       success: true,
//       message: "OTP sent successfully",
//       userDataWithOtp,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ success: false, error: error.message });
//   }
// };
// //

// const verifyOTP = async (req, res) => {
//   try {
//     const { otp } = req.body;
//     // const isUser = await UserModel.findOne({ Email });
//     // if (isUser) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: "User already exists",
//     //   });
//     // }

//     // // Find the most recent OTP for the email

//     const response = await OTPModel.find({ OTP: otp })
//       // localhost:3000/api/v1/verify-otp
//       .sort({ createdAt: -1 })
//       .limit(1);
//     console.log(response, "otp in db");
//     if (response.length === 0 || otp !== response[0].OTP) {
//       return res.status(400).json({
//         success: false,
//         message: "The OTP is not valid",
//       });
//     }
//     const { UserName, Email, Password, UserRoleId } = response[0];
//     // Hash the password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(Password, saltRounds);
//     const user = new UserModel({
//       UserName,
//       Password: hashedPassword,
//       Email,
//       UserRoleId,
//     });
//     await user.save();
//     res
//       .status(201)
//       .json({ data: user, message: "user registered successfully" });
//   } catch (error) {
//     console.log("error in registering user", error);
//   }
// };

// const resetPassword = async (req, res) => {
//   try {
//     const { Email, NewPassword } = req.body;
//     const isUserExist = await UserModel.findOne({ Email });
//     if (!isUserExist) {
//       return res.status(404).json({ message: "Email not found" });
//     }
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(NewPassword, 10);
//     const user = new UserModel({
//       Email,
//       UserName: isUserExist.UserName,
//       Password: hashedPassword,
//     });
//     await user.save();
//     res
//       .status(201)
//       .json({ data: user, message: "Password reset successfully" });
//   } catch (error) {
//     console.log("error in resetting user", error);
//   }
// };

// const saveContactDetails = (req, res) => {
//   const { name, email, subject, message } = req.body;

//   // Create a new contact instance
//   const newContact = new ContactModel({
//     name,
//     email,
//     subject,
//     message,
//   });

//   // Save to MongoDB
//   newContact
//     .save()
//     .then((savedContact) => {
//       res.status(200).json({
//         message: "Contact details saved successfully",
//         contact: savedContact,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: "Error saving contact details",
//         details: err.message,
//       });
//     });
// };

// const getContactDetails = (req, res) => {
//   ContactModel.find()
//     .then((inquiries) => {
//       res.status(200).json({
//         message: "Contact details fetched successfully",
//         contact: inquiries,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: "Error fetching contact details",
//         details: err.message,
//       });
//     });
// };

// module.exports = {
//   createRole,
//   loginUser,
//   //   registerUser,
//   getRoles,
//   getUsers,
//   resetPassword,
//   sendOTP,
//   verifyOTP,
//   saveContactDetails,
//   getContactDetails,
// };

const RoleModel = require("../models/Role");
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const OTPModel = require("../models/Otp");
const ContactModel = require("../models/Contact");

exports.createRole = async (req, res) => {
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

exports.getRoles = async (req, res) => {
  try {
    const roles = await RoleModel.find();
    res.status(200).json({ data: roles, message: "role fetched successfully" });
  } catch (error) {
    console.log(error, "error in fetching role");
  }
};

exports.loginUser = async (req, res) => {
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

exports.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json({ data: users, message: "users fetched successfully" });
};

// otp generation
exports.sendOTP = async (req, res) => {
  try {
    const { Email, Password, UserName, UserRoleId } = req.body;
    let OTP = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTPModel.findOne({ OTP }); // Check if otp is already present
    while (result) {
      OTP = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await OTPModel.findOne({ OTP });
    }
    // save otp with data in database
    const userDataWithOtp = await OTPModel({
      Email,
      Password,
      UserName,
      UserRoleId,
      OTP,
    });
    await userDataWithOtp.save();
    console.log(userDataWithOtp);
    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      userDataWithOtp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
//

exports.verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    // const isUser = await UserModel.findOne({ Email });
    // if (isUser) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "User already exists",
    //   });
    // }

    // // Find the most recent OTP for the email

    const response = await OTPModel.find({ OTP: otp })
      // localhost:3000/api/v1/verify-otp
      .sort({ createdAt: -1 })
      .limit(1);
    console.log(response, "otp in db");
    if (response.length === 0 || otp !== response[0].OTP) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }
    const { UserName, Email, Password, UserRoleId } = response[0];
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
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

exports.resetPassword = async (req, res) => {
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

exports.saveContactDetails = (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a new contact instance
  const newContact = new ContactModel({
    name,
    email,
    subject,
    message,
  });

  // Save to MongoDB
  newContact
    .save()
    .then((savedContact) => {
      res.status(200).json({
        message: "Contact details saved successfully",
        contact: savedContact,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "Error saving contact details",
        details: err.message,
      });
    });
};

exports.getContactDetails = (req, res) => {
  ContactModel.find()
    .then((inquiries) => {
      res.status(200).json({
        message: "Contact details fetched successfully",
        contact: inquiries,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "Error fetching contact details",
        details: err.message,
      });
    });
};
