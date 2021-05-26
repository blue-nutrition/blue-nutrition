const Weight = require('../models/weight.js');

exports.getWeight = (req, res) => {
  //TODO: write controllers
}

exports.postWeight = (req, res) => {
  const filter = { userId: req.body.UserId };
  const update = {
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