const Food = require('../models/food.js');

exports.getFood = (req, res) => {
  Food.find().sort({date: -1})
}

exports.getDailyFood = (req, res) => {
  //TODO: write controllers
}

exports.getWeeklyFood = (req, res) => {
  //TODO: write controllers
}

