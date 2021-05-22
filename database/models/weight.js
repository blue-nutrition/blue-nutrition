const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  //TODO: Write schema
})

const WeightModel = mongoose.model('WeightModel', WeightSchema, 'weight');

module.exports = WeightModel