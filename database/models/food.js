const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  meal: String,
  foodName: String,
  date: Date
})

const FoodModel = mongoose.model('FoodModel', FoodSchema, 'food');

module.exports = FoodModel;