const User = require('../Models/userModel');
// const db = require('../Config/db')

const getAllUsers = async () => {
  try {
    const uses = await User.find();
    return uses
  }
  catch (err) {
    return err
  }
};

const getUserById = (password) => {
  return User.findOne({password});
};

const addUser = async (obj) => {
  try {
    const us = new User(obj);
    await (us.save())
    return us;
  }
  catch (err) {
    return err;
  }
};

const updateUser = async (obj) => {
  console.log("obj", obj)
  try {
    await User.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
    return "Updated!"
  }
  catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return 'Deleted!';
}
const checkLogin = async (username, password) => {
  console.log(username);
  console.log(password);
  try {
    const director = await User.findOne({ username, password });
    console.log(director);
    if (director)
      return console.log(director);
    else
      return console.error(error);
  }
  catch (error) {
    console.error(error);
    return 'Internal server error';
  } 
}


module.exports = {

  checkLogin,
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};