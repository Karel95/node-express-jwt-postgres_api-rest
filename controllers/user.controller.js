import {UserModel} from '../models/user.model.js';

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, useremail, password } = req.body;
    const user = await UserModel.createUser({ username, useremail, password });

    return res.json({
      ok: true,
      msg: 'User registered successfully',
      user
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Server error: ' + error.message
    })
  }
}

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
