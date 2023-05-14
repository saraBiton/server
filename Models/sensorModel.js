const mongoose = require('mongoose');

const sensorSchema = mongoose.Schema(
    {
        sensorID: {type: String, required: true},
    },
    {versionKey : false} 
);


const Sensor = mongoose.model('sensor', sensorSchema, 'sensors');

module.exports = Sensor;