const mongoose = require('mongoose');

const LifeguardSchema = mongoose.Schema(
    {
        userName: {type: String, required: true},
        password: {type: String, required: true}
    },
    {versionKey : false} 
);

const Lifeguarda = mongoose.model('lifeguard', LifeguardSchema, 'Lifeguard');

module.exports = Lifeguarda;