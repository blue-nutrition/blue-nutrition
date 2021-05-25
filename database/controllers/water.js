const Water = require('../models/water.js');

exports.getWater = (req, res) => {
  Water.find({userId: req.query.userId, date: { $gte: req.query.startDate, $lte: req.query.endDate }}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  })
}

exports.postWater = (req, res) => {
  Water.findOneAndUpdate({userId: req.body.userId, date: { $gte: req.body.startDate, $lte: req.body.endDate }, meal: req.body.meal}, req.body , {upsert: true}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(204).send(result);
    }
  })
}