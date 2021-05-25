const Food = require('../models/food.js');

exports.getFood = (req, res) => {
  Food.find({userId: req.query.userId, date: { $gte: req.query.startDate, $lte: req.query.endDate }}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  })
}

exports.postFood = (req, res) => {
  newFood ={...req.body};
  delete newFood.foodId;
  Food.findOneAndUpdate({date: req.body.date, userId: req.body.userId, foodName: req.body.foodName}, newFood, {upsert: true}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(204).send(result);
    }
  })
}

exports.deleteFood = (req, res) => {
  Food.findByIdAndDelete(req.body.foodId, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(result);
    }
  })
}
exports.getDailyFood = (req, res) => {
  //TODO: write controllers
}

exports.getWeeklyFood = (req, res) => {
  //TODO: write controllers
}

