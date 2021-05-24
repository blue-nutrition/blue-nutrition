const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WaterSchema = new Schema({
  userId: String,
  oz: Number,
  date: Date,
  meal: String
})

const WaterModel = mongoose.model('WaterModel', WaterSchema, 'water');

module.exports = WaterModel