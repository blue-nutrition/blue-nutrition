const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  userId: String,
  weight: Number,
  date: Date
})

const WeightModel = mongoose.model('WeightModel', WeightSchema, 'weight');

module.exports = WeightModel