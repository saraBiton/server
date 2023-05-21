const mongoose = require('mongoose');

const DirectorSchema = mongoose.Schema(
    {
        userName: {type: String, required: true},
        password: {type: String, required: true}
    },
    {versionKey : false} 
);

const Director = mongoose.model('director', DirectorSchema, 'Director');

module.exports = Director;