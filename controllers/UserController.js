const User = require("../models/UserModel.js");

function getStandardResponse(status, message, data) {
  return {
    status: status,
    message: message,
    data: data,
  };
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    // res.json(getStandardResponse(true, "", users));
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getUserLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    res.json(user);
    // res.json(getStandardResponse(true, "", user));
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getUserLoginEmail = async (req, res) => {
  try {
    const user = await User.find({
      email: req.params.id,
    });
    res.json(user);
    // res.json(getStandardResponse(true, "", user));
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
    // res.json(getStandardResponse(true, "", user));
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const insertedUser = await user.save();
    // Status 201 = Created
    res.status(201).json(insertedUser);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedUser);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    // Status 200 = Successful
    res.status(200).json(deletedUser);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserLogin,
  getUserLoginEmail,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
};
