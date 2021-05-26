const Water = require('../models/water.js');

exports.getWater = (req, res) => {
  Water.find({userId: req.query.userId, date: { $gte: req.query.startDate, $lt: req.query.endDate }}, (err, result) => {
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

exports.getDailyWater = (req, res) => {
  Water.aggregate ([{
    $match: {
        "date": {
            $gte: new Date(req.query.startDate),
            $lt: new Date(req.query.endDate)
        },
        "userId": req.query.userId
    }
}, {
    $project: {
        oz: 1,
        yearMonthDayUTC: {
            $dateToString: {
                format: "%m-%d",
                date: "$date"
            }
        },
    }
}, {$group: {
        _id: '$yearMonthDayUTC',
        dailyWater: { $sum: '$oz' },
    }
}, {
  $sort: {
      _id: 1
  }
}], (err, resp) => {
  if(err) {
    console.log('error aggregating food', err);
    res.sendStatus(500);
  } else {
    res.status(200).send(resp);
  }
})
}