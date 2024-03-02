const UserModel = require("../models/userModel");

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
      errormsg: `${error.message}===> ${error.name}`,
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
    // const newUser = await UserModel.create(userData);
    const foundUser = true;
    if (!foundUser) throw new Error("foundUser returns falsy value");

    res.status(201).json({
      success: true,
      message: "User Found successfully.",
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

module.exports = { SignUpUser, LoginUser };
