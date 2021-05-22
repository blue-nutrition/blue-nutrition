const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  //TODO: Write schema
})

const FoodModel = mongoose.model('FoodModel', FoodSchema, 'food');

module.exports = FoodModel