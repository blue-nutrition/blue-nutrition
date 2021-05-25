const Weight = require('../models/weight.js');

exports.getWeight = (req, res) => {
  //TODO: write controllers
}

exports.postWeight = (req, res) => {
  const filter = { email: req.body.UserId };
  const update = {
    weight: req.body.weight,
    date: req.body.date
  };

  Weight.findOneAndUpdate(filter, update, { new: true }, (err, results) => {
    if (err) throw err;
    res.send(results);
  })
}