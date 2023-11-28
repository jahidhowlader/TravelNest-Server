import User from "../models/User.js";

// GET SINGLE USER FROM MongoDB AND RETURN
export const getUser = async (req, res, next) => {

  try {

    const user = await User.findById(req.params.id);
    res.status(200).json(user);

  } catch (err) {
    next(err);
  }
}

// GET ALL USER FROM MongoDB AND RETURN
export const getUsers = async (req, res, next) => {

  try {

    const users = await User.find();
    res.status(200).json(users);

  } catch (err) {
    next(err);
  }
}