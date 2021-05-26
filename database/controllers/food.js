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
  if (req.body.foodId !== null) {
    Food.findByIdAndUpdate(req.body.foodId, req.body, {upsert: true}, (err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.status(204).send(result);
      }
    })
  } else {
    Food.create(req.body, (err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.status(204).send(result);
      }
    })
  }
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
  //TODO: write controllers
}


exports.getDailyBreakDown = (req, res) => {
  Food.aggregate ([{
    $match: {
        "date": {
            $gte: new Date(req.query.startDate),
            $lt: new Date(req.query.endDate)
        },
        "userId": req.query.userId
    }
},  {
  $group: {
        _id: '$meal',
        calorieBreakDown: {
            $sum: '$calories'
        },
        proteinBreakDown: {
            $sum: '$protein'
       },
        carbBreakDown: {
            $sum: '$carbs'
        },
        fatBreakDown: {
          $sum: '$fat'
      }
    }
}], (err, resp) => {
  if(err) {
    console.log('error aggregating daily breakdown of food', err);
    res.sendStatus(500);
  } else {
    res.status(200).send(resp);
  }
})
}




