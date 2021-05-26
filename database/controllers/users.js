/* eslint-disable no-unused-vars */
const User = require('../models/users.js');

exports.getUser = (req, res) => {
  //TODO: write controllers
}

exports.postUser = (req, res) => {
  const filter = { email: req.body.email };
  const update = {
    userId: req.body.userId,
    goals: req.body.goals
  };

  User.findOneAndUpdate(filter, update, {
    upsert: true,
    new: true
  }, (err, results) => {
    if (err) throw err;
    res.send(results);
  })
}