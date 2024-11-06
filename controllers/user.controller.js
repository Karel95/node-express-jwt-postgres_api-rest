import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

// /api/v1/users/register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //TODO: make all the validations:
    // Check if email already exists
    if (!username || !email || !password) {
      return res.status(400).json({
        ok: false,
        msg: "All fields are required",
      });
    }

    // Check if email already exists in the database
    const existingUser = await UserModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        ok: false,
        msg: "Email already exists",
      });
    }

    //bcryptjs
    const salt = await bcryptjs.genSalt(); //Number of rounds to use, defaults to 10 if omitted
    const hashedPassword = await bcryptjs.hash(password, salt);

    //save user to the database
    const newUser = await UserModel.createUser({
      username,
      email,
      password: hashedPassword,
    });

    //jsonwebtoken
    const token = jwt.sign(
      {
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    ); // TODO add the refresh token

    return res.status(201).json({
      ok: true,
      msg: "User registered successfully",
      newUser,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: "Server error: " + error.message,
    });
  }
};

// /api/v1/users/login
const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: "Server error: " + error.message,
    });
  }
};

export const UserController = {
  register,
  login,
};
