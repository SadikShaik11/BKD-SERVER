const mongoose = require('mongoose');
const Joi = require('joi');

// Mongoose Schema
const userSchema = new mongoose.Schema({
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    }
});

const userValidationSchema = Joi.object({
    dob: Joi.date().required(),
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    username: Joi.string().alphanum().required()
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel,
    userValidationSchema
};
