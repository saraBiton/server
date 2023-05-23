const Sensor = require('../Models/sensorModel');

const getAllSensors = async () => {
  try {
    const sensors = await Sensor.find();
    return sensors
  }
  catch (err) {
    return err
  }
};

const getSensorById = (id) => {
  return Sensor.findById(id);
};


const addSensor = async (obj) => {
  try {
    const Sen = new Sensor(obj);
    await (Sen.save())
    return Sen;
  }
  catch (err) {
    return err;
  }
};

const updateSensor = async (obj) => {
  console.log("obj", obj)
  try {
    await Sensor.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
    return "Updated!"
  }
  catch (err) {
    return err;
  }
};

const deleteSensor = async (id) => {
  await Sensor.findByIdAndDelete(id);
  return 'Deleted!';
}

module.exports = {
  getAllSensors,
  getSensorById,
  addSensor,
  updateSensor,
  deleteSensor,
};