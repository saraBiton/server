const User = require('../Models/userModel');

const getAllUsers = async () => {
  try {
    const uses = await User.find();
    return uses
  }
  catch (err) {
    return err
  }
};

const getUserById = (id) => {
  return User.findById(id);
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

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};