const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: Number,
  email: String,
  goals: {
    water: Number,
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
    goalWeight: Number
  }
})

const UserModel = mongoose.model('UserModel', UserSchema, 'users');

module.exports = UserModel

