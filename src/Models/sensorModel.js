const mongoose = require('mongoose');

const sensorSchema = mongoose.Schema(
    {
        // sensorID: {type: String, required: true},
        userId: { type: mongoose.Types.ObjectId, ref: 'User' },
        lifeJacketNum: Number,
        isActive: Boolean
    },
    { versionKey: false }
);
const Sensor = mongoose.model('sensor', sensorSchema, 'sensors');

module.exports = Sensor;