const Goals = require('../models/goals.js');

exports.getGoals = (req, res) => {
  Goals.find({userId: req.query.userId}, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  })
}

exports.postGoals = (req, res) => {
  Goals.create({ userId: req.body.userId,
          date: req.body.startDate,
          weight: {
            met: false,
            notified: false
          },
          water: {
            met: false,
            notified: false
          },
          calories: {
            met: false,
            notified: false
          },
          protein: {
            met: false,
            notified: false
          },
          carbs: {
            met: false,
            notified: false
          },
          fats: {
            met: false,
            notified: false
          }
      }, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      })
    }

    exports.updateGoals = (req, res) => {
      Goals.findByIdAndUpdate(req.body._id, req.body, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      })
    }