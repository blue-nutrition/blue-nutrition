const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  goals: {
    water: Number,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    goalWeight: Number
  }
})

const UserModel = mongoose.model('UserModel', UserSchema, 'users');

module.exports = UserModel

