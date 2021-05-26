const Weight = require('../models/weight.js');

exports.getDailyWeight = (req, res) => {
  Weight.aggregate ([{
    $match: {
        "date": {
            $gte: new Date(req.query.startDate),
            $lt: new Date(req.query.endDate)
        },
        "userId": req.query.userId
    }
}, {
    $project: {
        weight: 1,
        yearMonthDayUTC: {
            $dateToString: {
                format: "%m-%d",
                date: "$date"
            }
        },
    }
}, {
  $sort: {
    yearMonthDayUTC: 1
  }
}], (err, result) => {
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