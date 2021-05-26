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

  const filter = { userId: req.body.UserId };
  const update = {
    userId: req.body.UserId,
    weight: req.body.weight,
    date: req.body.date
  };

  Weight.findOneAndUpdate(filter, update, {
    upsert: true,
    new: true
  }, (err, results) => {
    if (err) throw err;
    res.send(results);
  })
}