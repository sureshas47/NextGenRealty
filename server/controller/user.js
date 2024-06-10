const RoleModel = require("../models/Role");
const UserModel = require("../models/User");

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

const loginUser = (req, res) => {
  //   const { username, password } = req.body;
};

const getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json({ data: users, message: "users fetched successfully" });
};

const registerUser = async (req, res) => {
  try {
    const { UserName, Password, Email, UserRoleId } = req.body;
    const user = new UserModel({
      UserName,
      Password,
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
module.exports = { createRole, loginUser, registerUser, getRoles, getUsers };
