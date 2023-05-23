const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['user', 'volunteer', 'parent', 'director', 'lifeguard'], required: true },
        linkToUser: {},
        phones: [{ phone: String }],
        volunteer: { lat: Number, lng: Number, isActive: Boolean }
    },
    { versionKey: false }
);

// userSchema.set('strictQuery', false);

const User = mongoose.model('user', userSchema, 'users');

module.exports = User;