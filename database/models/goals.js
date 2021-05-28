const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GoalsSchema = new Schema({
  userId: String,
  date: Date,
  weight: {
    met: Boolean,
    notified: Boolean
  },
  water: {
    met: Boolean,
    notified: Boolean
  },
  calories: {
    met: Boolean,
    notified: Boolean
  },
  protein: {
    met: Boolean,
    notified: Boolean
  },
  carbs: {
    met: Boolean,
    notified: Boolean
  },
  fats: {
    met: Boolean,
    notified: Boolean
  }
});

const GoalsModel = mongoose.model('GoalsModel', GoalsSchema, 'goals');

module.exports = GoalsModel