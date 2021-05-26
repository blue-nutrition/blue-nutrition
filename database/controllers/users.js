const User = require('../models/users.js');

exports.getUser = (req, res) => {
  //TODO: write controllers
  console.log('Get User req: ', req);
  const filter = { userId: req.query.userId }
  User.findOne(filter, 'goals', (err, results) => {
    if (err) throw err;
    console.log('Query results: ', results);
    res.send(results);
  })
}

exports.postUser = (req, res) => {
  console.log('Post user: ', req.body);
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