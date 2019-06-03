const UserModel = require("../models/User.model");
const mongoose = require("mongoose");

const registerUser = async (req, res) => {
  const { name, username, password, email, date } = req.body;
  const newUser = new UserModel({
    name,
    username,
    password,
    email,
    birth_date: date
  });

  const result = await newUser.save();
  if (result) {
    res.send({ error: null, saved_user: result });
  } else {
    res.send({ error: "can not save the user" });
  }
};

const addFriend = async (req, res) => {
  const { user_id, friend_id } = req.body;
  if (user_id === friend_id) {
    res.send({ error: "IDs must not be identical" });
    return;
  }
  let user = await UserModel.findById(user_id);
  if (user) {
    user.friends.push(new mongoose.Types.ObjectId(friend_id));
    user = await user.save();
    if (user) {
      res.send(user);
    } else {
      res.send({ error: "couldn't add friend to this user" });
    }
  } else {
    res.send({ error: "failed to add friend" });
  }
};

const getUser = async (req, res) => {
  const { user_id } = req.params;
  if (user_id) {
    const user = await UserModel.findById(user_id);
    if (user) {
      res.send(user);
    } else {
      res.send({ error: "user not found" });
    }
  } else {
    res.send({ error: "invalid user id" });
  }
};

const getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  if (users) {
    res.send(users);
  } else {
    res.send({ error: "cant fetch users from database" });
  }
};

module.exports = {
  registerUser,
  getUser,
  addFriend,
  getAllUsers
};
