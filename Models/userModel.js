const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true }

    },
    { versionKey: false }
);

// userSchema.set('strictQuery', false);

const User = mongoose.model('user', userSchema, 'users');

module.exports = User;