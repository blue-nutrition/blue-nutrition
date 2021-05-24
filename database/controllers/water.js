const Water = require('../models/water.js');

exports.getWater = (req, res) => {
  console.log(req.params);
  Water.find({userId: req.query.userId, date: { $gte: req.query.startDate, $lte: req.query.endDate }}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log(result);
      res.send(result);
    }
  })
}

exports.postWater = (req, res) => {
  console.log('Posting to water')
  console.log(req.body)
  Water.findOneAndUpdate({userId: req.body.userId, date: { $gte: req.body.startDate, $lte: req.body.endDate }, meal: req.body.meal}, {oz: req.body.oz} , (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log(result);
      res.status(204).send(result);
    }
  })
}