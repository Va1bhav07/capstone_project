const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const SignUpUser = async (req, res) => {
  console.log("req.body :>> ", req.body);
  try {
    const { fullName, email, password } = req.body;
    const userData = { email, password, fullName };
    if (!email || !password || !fullName) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and password are required.",
      });
    }
    const findUser = await UserModel.findOne({ email });
    if (findUser)
      return res.status(409).json({
        success: false,
        message: "User already exists.",
      });
    const newUser = await UserModel.create(userData);
    if (!newUser) throw new Error("newUser returns falsy value");

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errormsg: `${error.message} ===> ${error.name}`,
    });
  }
};

const LoginUser = async (req, res) => {
  console.log("req.body :>> ", req.body);
  try {
    const { email, password } = req.body;
    const userData = { email, password };
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }
    const foundUser = await UserModel.findOne({ email });
    if (!foundUser)
      return res
        .status(404)
        .json({ success: false, message: "User does not exists" });

    const confirmUser = await bcrypt.compare(password, foundUser.password);

    if (!confirmUser) {
      return res.status(401).json({
        success: false,
        message: "Password or email is wrong.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful.",
      foundUser,
    });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errormsg: `${error.message}===> ${error.name}`,
    });
  }
};

const AdminLogin = async (req, res) => {
  console.log("req.body :>> ", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }
    const foundUser = true;
    if (!foundUser) throw new Error("foundUser returns falsy value");

    res.status(201).json({
      success: true,
      message: "Admin Found successfully.",
      foundUser,
    });
  } catch (error) {
    console.error("Error finding admin:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errormsg: `${error.message}===> ${error.name}`,
    });
  }
};

module.exports = { SignUpUser, LoginUser,AdminLogin };
