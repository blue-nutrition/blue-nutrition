const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  userId: Number,
  weight: Number,
  date: Date
})

const WeightModel = mongoose.model('WeightModel', WeightSchema, 'weight');

module.exports = WeightModel