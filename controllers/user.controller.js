import {UserModel} from '../models/user.model.js';

// /api/v1/users/register
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;

    //TODO: make all the validations:
    // Check if email already exists
    if (!username || !email || !password) {
      return res.status(400).json({
        ok: false,
        msg: 'All fields are required'
      });
    }

    const existingUser = await UserModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        ok: false,
        msg: 'Email already exists'
      });
    }

    const newUser = await UserModel.createUser({ username, email, password });

    return res.status(201).json({
      ok: true,
      msg: 'User registered successfully',
      newUser
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Server error: ' + error.message
    })
  }
}

// /api/v1/users/login
const login = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({
      ok: false,
      msg: 'Server error: ' + error.message
    })
  }
}

export const UserController = {
  register,
  login
}
