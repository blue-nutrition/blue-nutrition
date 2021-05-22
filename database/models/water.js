const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WaterSchema = new Schema({
  //TODO: Write schema
})

const WaterModel = mongoose.model('WaterModel', WaterSchema, 'water');

module.exports = WaterModel