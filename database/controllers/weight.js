const Weight = require('../models/weight.js');

exports.getDailyWeight = (req, res) => {
  Weight.find({userId: req.query.userId, date: { $gte: req.query.startDate, $lte: req.query.endDate }}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  })
}

exports.postWeight = (req, res) => {

}