const Food = require('../models/food.js');

exports.getFood = (req, res) => {
  Food.find({userId: req.query.userId, date: { $gte: req.query.startDate, $lte: req.query.endDate }}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  })
}

exports.postFood = (req, res) => {
  newFood ={...req.body};
  delete newFood.foodId;
  Food.findByIdAndUpdate(req.body.foodId, newFood, {upsert: true}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(204).send(result);
    }
  })
}

exports.deleteFood = (req, res) => {
  Food.findByIdAndDelete(req.body.foodId, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(result);
    }
  })
}
exports.getDailyFood = (req, res) => {
  Food.aggregate ([{
    $match: {
        "date": {
            $gte: new Date(req.query.startDate),
            $lt: new Date(req.query.endDate)
        },
        "userId": req.query.userId
    }
}, {
    $project: {
        protein: 1,
        fat: 1,
        carbs: 1,
        calories: 1,
        yearMonthDayUTC: {
            $dateToString: {
                format: "%Y-%m-%d",
                date: "$date"
            }
        },
    }
}, {$group: {
        _id: '$yearMonthDayUTC',
        dailyCalories: {
            $sum: '$calories'
        },
        dailyProtein: {
            $sum: '$protein'
       },
        dailyCarbs: {
            $sum: '$carbs'
        },
        dailyFat: {
          $sum: '$carbs'
      }
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

exports.getWeeklyFood = (req, res) => {
  //TODO: write controllers
}

