const mongoose = require('mongoose');
const Director = require('../Models/DirectorModel');
const Lifeguard = require('../Models/LifeguardModel');
const User = require('../Models/userModel');
const { db } = require('../config');


const checkLogin = async (req) => {
  var user =req;
  try {
    // Check if credentials exist in Director collection
  
    console.log(user);
    const director = await Director.findOne(user);
    console.log(director);
    if (director) {
      return 'Director';
    }

    // Check if credentials exist in Lifeguard collection
    const lifeguard = await Lifeguard.findOne(user);
    // console.log(lifeguard);
    if (lifeguard) {
      return 'Lifeguard';
    }

    // If credentials do not exist in either collection, return error
    return 'Invalid credentials';
  } catch (error) {
    console.error(error);
    return 'Internal server error';
  }
};
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri);

async function getUserByPassword(password) {
  try {
    // await client.connect();
    // const database = client.db('mongoose');
    const collection = db.mongoose.mo('users');
    const user = await collection.findOne({ password });
    return user;
  } catch (error) {
    console.error(error);
//   } finally {
//     await client.close();
//   }
}
}
/*const director = await Director.findOne({ username, password });
if (director) {
  // Document exists in Director collection
} else {
  const lifeguard = await Lifeguard.findOne({ username, password });
  if (lifeguard) {
    // Document exists in Lifeguard collection
  } else {
    // Document does not exist in either collection
  }
}*/ 

module.exports = {getUserByPassword, checkLogin };